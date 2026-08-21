_default:
    @just --list --unsorted

project := "rigolidev"

# An env is a folder under envs/. One with a server.conf is a remote target
# (reached through its docker SSH context); one without is local.
# Sets $dir, $name, $remote, ${docker[@]}, ${files[@]}, ${compose[@]}.
_resolve := '''
    dir="envs/$env"
    [ -d "$dir" ] || { echo "Unknown env '$env'. Available: $(ls envs | tr '\n' ' ')"; exit 1; }
    remote=""
    docker=(docker)
    if [ -f "$dir/server.conf" ]; then
        source "$dir/server.conf"
        remote=1
        docker=(docker --context "$DOCKER_CONTEXT")
    fi
    name="${COMPOSE_PROJECT:-$project-$env}"
    files=(-f infra/compose.yml)
    [ -f "$dir/compose.yml" ] && files+=(-f "$dir/compose.yml")
    compose=("${docker[@]}" compose -p "$name" --project-directory . "${files[@]}")
'''

_local_only := '''
    [ -z "$remote" ] || { echo "'$env' is a remote env — use \`just deploy $env\`."; exit 1; }
'''

# ─── Local ────────────────────────────────────────────────────────────

[group('dev')]
[doc('Start a local env with hot reload (compose watch)')]
dev env="local":
    #!/usr/bin/env bash
    set -euo pipefail
    env="{{ env }}" project="{{ project }}"
    {{ _resolve }}
    {{ _local_only }}
    "${compose[@]}" up -d --build
    "${compose[@]}" watch

[group('dev')]
[doc('Start a local env detached with build')]
up env="local" *service:
    #!/usr/bin/env bash
    set -euo pipefail
    env="{{ env }}" project="{{ project }}"
    {{ _resolve }}
    {{ _local_only }}
    "${compose[@]}" up -d --build {{ service }}

[group('dev')]
[doc('Stop and remove a local env')]
down env="local":
    #!/usr/bin/env bash
    set -euo pipefail
    env="{{ env }}" project="{{ project }}"
    {{ _resolve }}
    {{ _local_only }}
    "${compose[@]}" down

# ─── Any env, local or remote ─────────────────────────────────────────

[group('env')]
[doc('Follow logs (tail 100 lines), e.g. `just logs prod`')]
logs env="local" *service:
    #!/usr/bin/env bash
    set -euo pipefail
    env="{{ env }}" project="{{ project }}"
    {{ _resolve }}
    "${compose[@]}" logs --tail 100 --follow {{ service }}

[group('env')]
[doc('Open a shell in a container, e.g. `just sh prod web`')]
sh env="local" service="web":
    #!/usr/bin/env bash
    set -euo pipefail
    env="{{ env }}" project="{{ project }}"
    {{ _resolve }}
    "${compose[@]}" exec {{ service }} sh -c 'command -v bash > /dev/null && exec bash || exec sh'

[group('env')]
[doc('Show containers and their status, e.g. `just ps prod`')]
ps env="local":
    #!/usr/bin/env bash
    set -euo pipefail
    env="{{ env }}" project="{{ project }}"
    {{ _resolve }}
    "${compose[@]}" ps

# ─── Deploy (remote envs only) ────────────────────────────────────────

[group('remote')]
[doc('Build and deploy an env to its server, e.g. `just deploy prod` (bare `just deploy` lists targets)')]
deploy env="":
    #!/usr/bin/env bash
    set -euo pipefail
    env="{{ env }}" project="{{ project }}"
    if [ -z "$env" ]; then
        echo "Usage: just deploy <env>"
        echo
        echo "Remote envs (folders under envs/ with a server.conf):"
        for conf in envs/*/server.conf; do
            [ -f "$conf" ] || continue
            (
                source "$conf"
                extra=""
                [ "${PROTECTED:-false}" = "true" ] && extra=", protected"
                echo "  $(basename "$(dirname "$conf")") → server $SERVER_NAME (context $DOCKER_CONTEXT$extra)"
            )
        done
        exit 0
    fi
    {{ _resolve }}
    [ -n "$remote" ] || { echo "'$env' has no server.conf — it's a local env, use \`just up $env\`."; exit 1; }
    if [ "${PROTECTED:-false}" = "true" ] && [ -z "${CI:-}" ]; then
        read -rp "'$env' is protected (server: $SERVER_NAME). Type '$env' to continue: " answer
        [ "$answer" = "$env" ] || { echo "Aborted."; exit 1; }
    fi
    merged=$(docker compose -p "$name" --project-directory . "${files[@]}" config --no-interpolate)
    if grep -qE 'caddy[=:] *[^ ]*\.localhost' <<< "$merged"; then
        echo "envs/$env doesn't override the .localhost domain — refusing to deploy it to a server."; exit 1
    fi
    if [ -z "$("${docker[@]}" ps -q --filter "label=hubbify.server=$SERVER_NAME")" ]; then
        echo "The server behind context '$DOCKER_CONTEXT' is not stamped '$SERVER_NAME'."
        echo "Wrong server, or its hubbify proxy was deployed without SERVER_NAME."; exit 1
    fi
    "${compose[@]}" up -d --build
