# FocusFlow Server

Backend service for the FocusFlow web application.

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Drizzle ORM
- SQLite
- JWT Authentication
- bcrypt
- Bruno

## Folder Structure

```
src/
├── controllers/
├── services/
├── routes/
├── middleware/
├── utils/
├── db/
├── app.ts
└── server.ts
```

## Current Goals

- Configure SQLite with Drizzle ORM.
- Create the initial database schema.
- Implement authentication.
- Implement user management.
- Implement session management.
- Test all APIs using Bruno.

## Development

Start the development server:

```bash
npm run dev
```

Generate database migrations:

```bash
npm run db:generate
```

Apply migrations:

```bash
npm run db:migrate
```

Open Drizzle Studio:

```bash
npm run db:studio
```

---

This backend is currently under active development and will continue to evolve as new features are added.
