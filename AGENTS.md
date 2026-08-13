# Agent guide

Docker-compose project template for hosting behind the
[hubbify](https://github.com/rijuma/hubbify) Caddy proxy. Same proxy locally
and remotely; routing comes only from container labels.

## Commands

Everything goes through `just` (run `just` to list). Local: `dev`, `up`,
`down`, `logs`, `sh`, `ps`. Remote recipes take a docker SSH context name:
`just deploy myvps`, `just remote-logs myvps`. Server operations always wrap
`docker --context` — nothing runs server-side.

## Hard rules

- **Two labels only.** Routing is declared as `caddy: <domain>` +
  `caddy.reverse_proxy: '{{upstreams <port>}}'` in `infra/compose.yml` (local
  `.localhost` domain). `infra/compose.remote.yml` overrides only the `caddy`
  label with the real domain. Never add other `caddy.*` labels — anything
  fancier belongs in the hubbify proxy's base Caddyfile, not here.
- **The local domain is the baseline.** Bare compose runs must serve
  `.localhost`; the real domain exists only in the remote overlay.
- **Isolation:** only the web-facing service joins the external `proxy`
  network. Databases and workers stay on the default network. Never publish
  host ports (dev-only exceptions live in `compose.local.yml`).
- **Secrets:** local dev secrets go in `infra/.env` (loaded by
  `compose.local.yml`); production secrets live in the GitHub `production`
  environment as the `ENV_FILE` secret, which the Deploy workflow writes to
  `infra/.env.remote` (loaded by `compose.remote.yml`). Both files are
  gitignored; secrets never go in compose files or commits.

## Conventions

- Compose layering: `compose.yml` is shared truth, `compose.local.yml` is the
  dev delta, `compose.remote.yml` is the server delta. Deploys always pass
  base + remote.
- After editing any `.md` file, run `npx prettier --write` on it.
