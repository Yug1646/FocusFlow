# FocusFlow Server

Backend service for the FocusFlow web application — a productivity app for tracking focus sessions.

## Tech Stack

- **Runtime:** Node.js + TypeScript
- **Framework:** Express.js 5
- **Database:** SQLite (via better-sqlite3)
- **ORM:** Drizzle ORM
- **Auth:** JWT + bcrypt
- **API Testing:** Bruno

## Folder Structure

```
src/
├── config/
├── controllers/      # HTTP layer — thin handlers (req/res only)
├── services/         # Business logic + DB queries
├── routes/           # Route definitions
├── middleware/       # Error handler, auth (coming)
├── utils/            # AppError and helpers
├── dto/              # Response shapers (toUserResponse, etc.)
├── db/               # Schema, connection, migrations
├── app.ts
└── server.ts
```

## API Endpoints

### Auth

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

### Users

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/users` | List all users |
| GET | `/api/users/:id` | Get user by id |
| PATCH | `/api/users/:id` | Update username/email |
| DELETE | `/api/users/:id` | Delete user |

### Sessions

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/sessions` | List all sessions |
| GET | `/api/sessions/:id` | Get session by id |
| POST | `/api/sessions` | Start a new session |
| PATCH | `/api/sessions/:id` | Update session title |
| PATCH | `/api/sessions/:id/end` | End a session |
| DELETE | `/api/sessions/:id` | Delete session |

## Completed

- Project initialized with TypeScript + Express
- Folder structure (controllers / services / routes / middleware / utils / dto)
- SQLite configured with Drizzle ORM
- Database schema (users, sessions)
- Auth: register + login with JWT signing and bcrypt hashing
- User CRUD APIs
- Session lifecycle APIs (create / update / end / delete)
- Centralized error handling middleware
- AppError class for typed business errors
- DTO pattern for response shaping

## Next Up

- JWT verification middleware (protect routes, attach `req.user`)
- Request validation (likely zod)
- Password change endpoint (with current-password verification)
- User enumeration hardening on auth endpoints

## Development

Start the development server:

```bash
npm run dev
```

Type-check the project (recommended before commits — `tsx` does not type-check):

```bash
npx tsc --noEmit
```

Database commands:

```bash
npm run db:generate   # generate migrations from schema changes
npm run db:migrate    # apply migrations to the database
npm run db:studio     # open Drizzle Studio GUI
```

## Environment

Create a `.env` file with:

```
PORT=8000
JWT_SECRET=your_secret_here
```

---

This backend is under active development and will continue to evolve as new features are added.