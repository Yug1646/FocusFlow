# FocusFlow Server

Backend service for the FocusFlow web application — a productivity app for tracking focus sessions.

## Tech Stack

- **Runtime:** Node.js + TypeScript
- **Framework:** Express.js 5
- **Database:** SQLite (via better-sqlite3)
- **ORM:** Drizzle ORM
- **Auth:** JWT + bcrypt
- **Validation:** Zod
- **API Testing:** Bruno

## Folder Structure

```
src/
├── config/
├── controllers/      # HTTP layer — thin handlers (req/res only)
├── services/         # Business logic + DB queries
├── routes/           # Route definitions
├── middleware/       # authenticate, validate, errorHandler
├── schemas/          # Zod validation schemas
├── utils/            # AppError, password helpers
├── dto/              # Response shapers (toUserResponse, etc.)
├── types/            # Express type augmentation (req.user)
├── db/               # Schema, connection, migrations
├── app.ts
└── server.ts
```

## Authentication

All routes except `/auth/register` and `/auth/login` require a JWT token in the `Authorization` header:

```
Authorization: Bearer <token>
```

Sessions are **user-scoped** — users can only access, modify, or delete sessions they own. Cross-user access returns `403 Forbidden`.

## API Endpoints

### Auth (public)

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

### Users (protected)

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/users` | List all users |
| GET | `/api/users/:id` | Get user by id |
| GET | `/api/users/by-email/:email` | Get user by email |
| PATCH | `/api/users/:id` | Update username/email |
| PATCH | `/api/users/password` | Change password (requires current password) |
| DELETE | `/api/users/:id` | Delete user |

### Sessions (protected, user-scoped)

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/sessions` | List the logged-in user's sessions |
| GET | `/api/sessions/:id` | Get session by id (only if owned) |
| POST | `/api/sessions` | Start a new session |
| PATCH | `/api/sessions/:id` | Update session title (only if owned) |
| PATCH | `/api/sessions/:id/end` | End a session (only if owned) |
| DELETE | `/api/sessions/:id` | Delete session (only if owned) |

## Completed

- Project initialized with TypeScript + Express
- Folder structure (controllers / services / routes / middleware / schemas / utils / dto / types)
- SQLite configured with Drizzle ORM
- Database schema (users, sessions)
- Auth: register + login with JWT signing and bcrypt hashing
- JWT verification middleware (protected routes, `req.user` attachment)
- User CRUD APIs
- Session lifecycle APIs (create / update / end / delete)
- Session ownership authorization (users can only access their own sessions)
- Password change endpoint with current-password re-verification
- Request validation with Zod (schemas + validate middleware)
- Password helper utilities (hashPassword, comparePassword)
- Centralized error handling middleware
- AppError class for typed business errors
- DTO pattern for response shaping

## Next Up

- Frontend
- Response format standardization (`msg` vs `message`)
- Consider `/me` routes for self-service profile access
- `getUserByEmail` endpoint security review (user enumeration risk)

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
