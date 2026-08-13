_default:
    @just --list --unsorted

compose_local := "docker compose --project-directory . -f infra/compose.yml -f infra/compose.local.yml"

# Remote commands run through a docker SSH context, e.g. `just deploy myvps`.
compose_remote := "compose --project-directory . -f infra/compose.yml -f infra/compose.remote.yml"

# ─── Local development ────────────────────────────────────────────────

[group('dev')]
[doc('Start dev with hot reload (compose watch)')]
dev:
    {{ compose_local }} up -d --build
    {{ compose_local }} watch

[group('dev')]
[doc('Start containers detached with build')]
up *service:
    {{ compose_local }} up -d --build {{ service }}

[group('dev')]
[doc('Stop and remove local containers')]
down:
    {{ compose_local }} down

[group('dev')]
[doc('Follow logs (tail 100 lines)')]
logs *service:
    {{ compose_local }} logs --tail 100 --follow {{ service }}

[group('dev')]
[doc('Open a shell in a container')]
sh service="web":
    {{ compose_local }} exec {{ service }} sh -c 'command -v bash > /dev/null && exec bash || exec sh'

[group('dev')]
[doc('Show running containers and their status')]
ps:
    {{ compose_local }} ps

# ─── Remote (docker SSH context) ──────────────────────────────────────

[group('remote')]
[doc('Build and deploy to a server, e.g. `just deploy myvps`')]
deploy context:
    docker --context {{ context }} {{ compose_remote }} up -d --build

[group('remote')]
[doc('Follow logs on a server')]
remote-logs context *service:
    docker --context {{ context }} {{ compose_remote }} logs --tail 100 --follow {{ service }}

[group('remote')]
[doc('Show container status on a server')]
remote-ps context:
    docker --context {{ context }} {{ compose_remote }} ps

[group('remote')]
[doc('Shell into a container on a server')]
remote-sh context service="web":
    docker --context {{ context }} {{ compose_remote }} exec {{ service }} sh -c 'command -v bash > /dev/null && exec bash || exec sh'
