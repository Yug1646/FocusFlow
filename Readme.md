# FocusFlow

FocusFlow is a productivity web application designed to help users track focus sessions, improve consistency, and build productive habits.

## Current Phase

### Objectives

- Set up the project structure.
- Configure the backend with TypeScript and Express.
- Set up SQLite using Drizzle ORM.
- Design the initial database schema.
- Implement user authentication.
- Build session management APIs.
- Test APIs using Bruno.

### Features

- User Registration
- User Login (JWT-based)
- Focus Session Management (create, update, end, delete)
- Password Change (with current-password verification)
- Session Ownership Authorization (users can only access their own sessions)
- Request Validation (Zod)
- SQLite Database with Drizzle ORM
- Centralized Error Handling
- API Testing with Bruno

### Tech Stack

#### Frontend

- Coming Soon

#### Backend

- Node.js
- TypeScript
- Express.js
- Drizzle ORM
- SQLite (better-sqlite3)
- JWT
- bcrypt
- Zod
- Bruno

## Progress

- [x] Project initialized
- [x] Folder structure created
- [x] API routes planned
- [x] SQLite configured
- [x] Database schema
- [x] Authentication (register + login with JWT signing)
- [x] Session APIs
- [x] JWT verification middleware (protected routes)
- [x] Session ownership authorization
- [x] Password change endpoint
- [x] Request validation (Zod)
- [x] API Testing

## Next Up

- [ ] Frontend
- [ ] Response format standardization (`msg` vs `message`)
- [ ] Consider `/me` routes for self-service profile access

---

This README will evolve as each phase of FocusFlow is completed.
