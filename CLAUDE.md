# MediCare — Project Guide for Claude

Read this whole file before doing anything. It describes the project, what is already done, the decisions we made, and **the strict rules you must follow**.

---

## 1. Who you are working with

- The developer is **Houssam**. He is building this project to **learn** advanced web development: security, database design, system design, and clean code.
- Reply in the **same language Houssam uses in his message** (English or Lebanese Arabic). When replying in Arabic, keep technical terms in English (branch, commit, middleware, component...).
- He wants to **understand every step**, not just receive code. For every task:
  1. Explain briefly **what** we are doing and **why** (the concept).
  2. Then do the change.
  3. Tell him how to run / test it and what he should see.
- Work **one step at a time**. Do not dump many steps at once. When a step is done, stop and wait for him.

---

## 2. STRICT RULES (non-negotiable)

### 2.1 Scope — do only what is asked

- Do **exactly** the task Houssam gives you. Nothing more.
- Do **not** refactor, rename, reformat, "improve", or clean up code he didn't ask about.
- Do **not** create extra files, folders, tests, docs, or configs unless the task needs them.
- Do **not** install, remove, or upgrade npm packages without asking him first and explaining why.
- If you notice a bug or an improvement outside the task, **mention it in one line** at the end and let him decide. Do not fix it.
- If the task is unclear, **ask** before writing code.
- Before editing, tell him which files you will touch.
- When you create the first real file inside a folder that contains a `.gitkeep`, delete that `.gitkeep` in the same step.

### 2.2 Git — read only, NEVER write

Houssam does **all** git write operations himself, because he is learning the workflow.

- ✅ Allowed: `git status`, `git diff`, `git log`, `git branch` (listing only), `git show`.
- ❌ **Never run**: `git add`, `git commit`, `git push`, `git pull`, `git fetch`, `git merge`, `git rebase`, `git reset`, `git restore`, `git checkout`, `git switch`, `git stash`, `git tag`, `git branch -d/-D`, `git rm`, `git mv`, `git config`, or any `gh` command that changes something (PRs, issues, merges).
- Instead, when a step is finished, **suggest** the exact commands for him to run, with a commit message following our convention (section 6).

### 2.3 Secrets

- Never read, print, or edit `.env` files. Use `.env.example` to know which variables exist.
- If a new environment variable is needed, add it to `.env.example` with a placeholder value and tell Houssam to add the real value to his `.env`.
- Never hardcode secrets, passwords, or connection strings in code.

### 2.4 Commands

- Do not run long-lived commands (`npm run dev`, `docker compose up` without `-d`) and block. Tell Houssam to run them.
- Ask before running anything destructive (deleting files, `docker compose down -v`, etc.).

---

## 3. The project

**MediCare** is a management system for a (multi-branch) medical center, built with the **MERN stack + TypeScript**.

### Roles

| Role             | What they do                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| **Patient**      | Registers alone. Books appointments, sees own appointments, prescriptions, lab results, invoices |
| **Receptionist** | Registers walk-in patients, manages appointments, check-in, manages the queue                    |
| **Doctor**       | Sees own queue, opens patient file, writes diagnosis & prescription, reviews lab results         |
| **Accountant**   | Invoices, payments, financial reports                                                            |
| **Admin**        | Staff, doctors, specialties, services & prices, analytics, audit log                             |

Staff **never self-register**: the Admin sends an email invitation. Only patients can register.

### Main flows

1. **Online booking:** specialty → doctor → day → free slot → confirm. Must prevent double booking (unique index + transaction).
2. **Visit day:** check-in (receptionist) → waiting in queue (live screen) → doctor calls next → doctor writes diagnosis/prescription → completes visit → invoice generated → payment recorded.
3. **Lab results:** doctor orders → file uploaded → doctor reviews → patient notified.
4. **Staff invite:** admin invites (email + role) → link valid 48h → staff sets password.
5. **Cancel / reschedule:** allowed until 24h before; slot freed; reminder cancelled.

### Appointment state machine

```
SCHEDULED → CHECKED_IN → IN_PROGRESS → COMPLETED
    ↓            ↓
CANCELLED     NO_SHOW
```

Status changes happen through **action endpoints** (`POST /appointments/:id/cancel`), never by editing `status` directly.

### Planned architecture

```
React client → Nginx → Express API (modular monolith) → MongoDB / File storage / Redis → Worker (BullMQ jobs)
```

Built gradually; Nginx, Worker and file storage come later.

### Database (MongoDB) — main collections

- `users` (identity: email, passwordHash, role, status) — separate from profiles
- `patients` (profile; `userId` optional, for walk-ins without account; embedded `allergies`)
- `doctors` (`userId`, `specialtyId`, embedded `workingHours`)
- `specialties`, `services` (name, price)
- `appointments` (`patientId`, `doctorId`, `startsAt`, `status`) — unique index on `{ doctorId, startsAt }` for non-cancelled
- `visits` (`appointmentId`, diagnosis, embedded `prescription`) — medical data isolated from booking data
- `labResults` (`visitId`, `fileKey`)
- `invoices` (`visitId`, embedded `items` with **price snapshot**, embedded `payments`, `status`)
- Later: `sessions`, `invitations`, `notifications`, `auditLogs`, `branches`

Rule: **embed** data that belongs to the parent, is small and read together; **reference** independent or unbounded data.

### API

- Base: `/api/v1`. REST, plural nouns, kebab-case. `/me/...` for the patient's own data (prevents IDOR).
- Response shape: `{ "data": ... }`, lists add `{ "meta": { "nextCursor", "hasMore" } }`, errors `{ "error": { "code", "message", "details" } }`.
- Cursor pagination, Zod validation, RBAC on every protected route, audit log on medical data access, `Idempotency-Key` on payments.
- Auth: short-lived access token (Bearer) + rotating refresh token in httpOnly cookie.
- Full design: `docs/API.md` (if present in the repo).

---

## 4. Current state

### Done

- GitHub repo with protected `main` (PR required, no force push)
- `.gitignore`, `.gitattributes` (LF everywhere), `README.md`, `.vscode/settings.json` (format on save with Prettier)
- **Server** (`server/`): Express 5 + TypeScript 7 (strict), `tsx watch`, Prettier, `.env` loaded with Node's `--env-file`, a single `GET /health` route in `src/server.ts` (temporary — will be split into layers)
- **Docker Compose** (root): MongoDB 8 as single-node replica set `rs0` + Redis 8 alpine, ports bound to `127.0.0.1`, named volumes, healthchecks
- **Client** (`client/`): Vite + React + TypeScript, Oxlint, Tailwind CSS v4 (`@tailwindcss/vite`), Prettier + `prettier-plugin-tailwindcss`, brand colors in `@theme` (`primary-*`, main `#0F766E`), path alias `@/` → `src/` (may be in progress — check)

Run `git status` and `git log --oneline -10` to confirm the exact current state and branch before starting.

### Next (Houssam decides the order)

1. Connect client to server (`/health`), CORS / Vite proxy
2. Server: split `server.ts` into `app.ts` / `server.ts`, env validation with Zod, logger, central error handling
3. Connect server to MongoDB (Mongoose) and Redis
4. Phase 1: Authentication & security

---

## 5. Key technical decisions (do not change without asking)

- **GitHub Flow**: `main` + short-lived branches. No `develop` branch.
- **Server TypeScript 7**. ESLint is **not used on the server** because `typescript-eslint` does not support TS 7 yet. Do not add ESLint.
- **Server is ESM** (`"type": "module"`, `NodeNext`): relative imports **must end with `.js`** (`import { app } from "./app.js"`), even for `.ts` files.
- **Client** uses Vite's bundler resolution: no `.js` extension needed; use the `@/` alias.
- **Client folder structure is type-based** (chosen by Houssam — do not switch to feature-based):
  ```
  src/
    components/ui/      shared UI (Button, Input, Card, Badge, Modal)
    components/layout/  Sidebar, Topbar, layouts
    pages/public|patient|receptionist|doctor|accountant|admin/
    services/           ALL API calls live here — never fetch inside pages/components
    hooks/  routes/  types/  utils/
    App.tsx  main.tsx  index.css
  ```
  Create folders only when needed (git ignores empty folders).
- **Server structure (planned)**: modular monolith, `src/modules/<name>/` with route → controller → service → repository layers. Controllers handle HTTP only, services hold business logic, repositories handle DB access.
- MongoDB runs as a **replica set** so transactions work. Local URI: `mongodb://localhost:27017/medicare?replicaSet=rs0`.
- Line endings **LF**, 2 spaces, double quotes, semicolons, trailing commas, print width 100.
- Use Tailwind classes and the `primary-*` design tokens; no separate CSS files per component.

---

## 6. Conventions

**Branches:** `<type>/<issue-number>-<short-description>` — e.g. `feature/4-auth-login`, `fix/12-slot-overlap`
Types: `feature`, `fix`, `chore`, `refactor`, `docs`, `test`

**Commits (Conventional Commits):** `<type>(<scope>): <summary>`
Examples: `feat(auth): add login endpoint`, `chore(client): add tailwind`, `fix(appointments): prevent double booking`
Scopes: `server`, `client`, or a module name.

**Workflow per task:** GitHub Issue → branch from `main` → small commits → PR with `Closes #N` → Squash and merge → delete branch. (Houssam does all of this himself.)

---

## 7. Useful commands (for reference — let Houssam run long-lived ones)

```bash
# Root
docker compose up -d        # start MongoDB + Redis
docker compose ps           # status (should be healthy)

# server/
npm run dev                 # dev server on :4000
npm run typecheck
npm run format

# client/
npm run dev                 # dev server on :5173
npm run lint                # oxlint
npm run format
```
