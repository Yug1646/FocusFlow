# FocusFlow Backend

FocusFlow is a application for tracking users' focus sessions and productivity. This repository is being developed incrementally, with the README updated as each phase is completed.

## Current Phase

### Project Setup

### Objectives

- Set up a Node.js project with TypeScript.
- Configure PostgreSQL and Drizzle ORM.
- Create the initial folder structure.
- Configure environment variables.
- Create the initial database schema.
- Generate the first database migration.

### Authentication

- Implement user registration.
- Implement user login.
- Hash passwords using bcrypt.
- Generate JWT tokens after successful login.
- Create authentication middleware to protect routes.

### API Development

- Create authentication routes.
- Create session routes.
- Organize controllers, services, and routes.
- Follow REST API conventions.

### Database

Initial tables:

- Users
- Sessions

Relationship:

- One user can have multiple focus sessions.

### Testing

- Test all endpoints using Bruno.
- Verify request validation.
- Verify authentication flow.
- Handle common error cases.

### Tech Stack

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Drizzle ORM
- bcrypt
- JWT
- dotenv
- Bruno

---

