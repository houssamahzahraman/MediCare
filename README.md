# 🏥 MediCare

A full-stack medical center management system built with the **MERN stack** and **TypeScript**, focused on security, clean architecture, and system design.

## ✨ Features (planned)

- Authentication with JWT and role-based access control
- Patient records and medical history
- Appointment booking with conflict prevention
- Prescriptions and lab results
- Real-time clinic queue
- Billing and admin dashboard

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, TypeScript, MongoDB, Redis
- **Frontend:** React, TypeScript
- **DevOps:** Docker, GitHub Actions

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS)
- Docker Desktop

### 1. Start the database services
```bash
docker compose up -d
```

### 2. Run the server
```bash
cd server
cp .env.example .env
npm install
npm run dev
```

The API runs on `http://localhost:4000`. Check `GET /health`.

## 🚧 Status

In active development.