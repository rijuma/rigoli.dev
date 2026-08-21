# Agent guide

Docker-compose project template for hosting behind the
[hubbify](https://github.com/rijuma/hubbify) Caddy proxy. Same proxy locally
and remotely; routing comes only from container labels.

## Commands

Everything goes through `just` (run `just` to list). Every recipe takes an
environment name — a folder under `envs/` — defaulting to `local`: `just dev`,
`just up`, `just logs prod`, `just ps prod`, `just sh prod web`. An env folder
with a `server.conf` is a remote target reached through the docker SSH
context it declares; `just deploy <env>` is the only recipe that touches a
server, and `up`/`dev`/`down` refuse remote envs. Nothing runs server-side.

## Hard rules

- **Two labels only.** Routing is declared as `caddy: <domain>` +
  `caddy.reverse_proxy: '{{upstreams <port>}}'` in `infra/compose.yml` (local
  `.localhost` domain). Each remote env's `envs/<env>/compose.yml` overrides
  only the `caddy` label with the real domain. Never add other `caddy.*`
  labels — anything fancier belongs in the hubbify proxy's base Caddyfile,
  not here.
- **The local domain is the baseline.** Bare compose runs must serve
  `.localhost`; real domains exist only in remote env overlays (`deploy`
  refuses a merged config that still carries a `.localhost` domain).
- **Deploys fail closed.** `deploy` requires the env's `server.conf` and
  aborts unless the server behind the context carries the matching
  `hubbify.server: <SERVER_NAME>` stamp. `PROTECTED=true` envs ask for typed
  confirmation (skipped in CI, where the GitHub `production` environment's
  protection rules are the gate). Never weaken or bypass these guards.
- **Isolation:** only the web-facing service joins the external `proxy`
  network. Databases and workers stay on the default network. Never publish
  host ports (dev-only exceptions live in `envs/local/compose.yml`).
- **Secrets:** each env's secrets live in `envs/<env>/.env` (gitignored).
  Local ones are hand-written; production's is the `ENV_FILE` secret of the
  GitHub `production` environment, written by the Deploy workflow on the
  runner. Secrets never go in compose files or commits.

## Conventions

- Compose layering: `infra/compose.yml` holds only what is true in every
  env; `envs/<env>/compose.yml` is that env's delta. Services that differ
  per env (databases) are declared in the overlays that need them — an
  overlay can add and override, but not remove (`!reset null` is the escape
  hatch). Deploys always pass base + overlay.
- Each env runs as compose project `<project>-<env>` (overridden with
  `COMPOSE_PROJECT` in `server.conf` where a stack predates this layout).
- After editing any `.md` file, run `npx prettier --write` on it.
