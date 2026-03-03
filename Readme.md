# 🚀 FocusFlow

> A Backend Engineering Learning Project – Built in Phases

FocusFlow is a structured backend project designed to master Express.js and backend architecture step‑by‑step.

This repository is not just a project.
It is a documented journey from **basic routing → scalable backend system → authentication → database integration → analytics**.

---

# 🎯 Project Vision

To build a productivity session tracking API while progressively learning:

- Express fundamentals
- REST API design
- Middleware architecture
- Resource relationships
- Async/Await
- MongoDB & Mongoose
- Authentication (JWT)
- Scalable backend structure

This project evolves in controlled phases instead of rushing everything at once.

---

# 🏗️ Current Architecture (Phase-Based Development)

## 📌 Core Concept

Users can:

- Create an account
- Start a focus session
- End a focus session
- Track session duration

Relationship:

```
One User → Many Sessions
```

---

# 📂 Project Structure

```
server/
│
├── src/
│   ├── server.js
│   │
│   ├── routes/
│   │   ├── users.js
│   │   └── sessions.js
│   │
│   ├── utils/
│   │   ├── data.js
│   │   └── middleware.js
│
├── package.json
└── README.md
```

---

# 🧩 Development Roadmap

---

## ✅ Phase 1 — Express Foundation

### Objective

Understand Express core fundamentals.

### Implemented

- Express server setup
- Router usage
- Custom middleware
- Status codes
- Error handling
- In-memory storage (arrays)

### APIs

```
POST   /api/users
GET    /api/users
GET    /api/users/:id
DELETE /api/users/:id
```

### Learning Outcomes

- req.body
- req.params
- res.status()
- Middleware chaining
- Basic REST principles

---

## ✅ Phase 1.5 — Session System (In-Memory)

### Objective

Understand resource relationships.

### Implemented

- Create session for a user
- Store startTime
- End session
- Calculate duration

### API Structure

```
POST   /api/users/:userId/sessions
GET    /api/sessions
POST   /api/sessions/:sessionId/end
```

### Learning Outcomes

- One-to-many relationships
- Date handling
- Duration calculation
- Array manipulation
- API design thinking

---

## 🔄 Phase 2 — Code Structure & Refactoring

### Objective

Improve maintainability and scalability.

### Planned Improvements

- Separate controllers
- Reusable validation middleware
- Consistent naming conventions
- Centralized error handling

### Learning Outcomes

- Clean architecture patterns
- Code modularization

---

## ⏳ Phase 3 — Database Integration

### Objective

Replace in-memory arrays with persistent storage.

### Planned Implementation

- MongoDB setup
- Mongoose models
- Async/Await
- try/catch error handling

### New Models

- User Model
- Session Model

### Learning Outcomes

- Data persistence
- Schema design
- Model relationships
- Asynchronous backend flow

---

## 🔐 Phase 4 — Authentication System

### Objective

Secure the API.

### Planned Implementation

- User signup & login
- Password hashing (bcrypt)
- JWT authentication
- Protected routes

### Architectural Change

Session creation will no longer require `userId` in URL.
Authenticated user will be extracted from token.

### Learning Outcomes

- Token-based authentication
- Security best practices
- Middleware authorization flow

---

## 📊 Phase 5 — Analytics & Reporting

### Objective

Make FocusFlow intelligent.

### Planned Features

- Total focus time per user
- Weekly summary
- Monthly report
- Streak calculation

### Learning Outcomes

- Aggregation logic
- Data analysis in backend

---

## 🎨 Phase 6 — Frontend Integration (Optional)

### Objective

Connect backend to a real UI.

### Possible Stack

- React frontend
- Dashboard interface
- Live session timer

---

# 🧠 Engineering Principles Followed

- Build in phases, not chaos
- Understand before scaling
- Design RESTful endpoints
- Keep logic modular
- Separate concerns
- Think in relationships, not random routes

---

# 🛠️ How to Run Locally

```bash
npm install
npm start
```

Server runs at:

```
http://localhost:3000
```

---

# 📌 Current Status

✔ Express foundation complete
✔ Users API complete
✔ Sessions (in-memory) implemented
⏳ Database integration pending
⏳ Authentication pending

---

# 🎓 Why This Project Exists

This repository documents backend growth.

It serves as:

- A learning tracker
- A structured backend roadmap
- A future portfolio project
- A reference point for scaling backend systems

---

# 🚀 Final Vision

FocusFlow will evolve from:

Basic Express API
→ Structured Backend Architecture
→ Authenticated System
→ Database-Backed Productivity Platform

---

🔥 Built for mastery, not speed.
