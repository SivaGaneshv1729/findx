# findmyplot-hero - Full Stack Real Estate SaaS Platform

This project is a modern, full-stack web application designed as a SaaS platform for real estate dealers to list and manage properties.

## Architecture

The project is a monorepo with two main packages:

*   **/frontend**: A Next.js 15 application using the App Router. It features a polished UI styled with Tailwind CSS, animated with `framer-motion`, and integrated with Supabase for authentication.
*   **/backend**: A Node.js/Express application using TypeScript and Prisma ORM. It provides a REST API for property management and lead tracking, connected to a PostgreSQL database.

---

## Prerequisites

*   **Node.js 18** or higher.
*   **PostgreSQL** database (or a Supabase project).

---

## How to Run the Application

### Backend (Express + Prisma)

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up your `.env` file based on `.env.example`.
4.  Run Prisma migrations:
    ```bash
    npx prisma migrate dev
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```
6.  The backend server will start on `http://localhost:8080`.

### Frontend (Next.js)

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  The frontend will be accessible at `http://localhost:3000`.

---

## User Roles

*   **ADMIN**: Full system access and management.
*   **AGENT**: Can manage properties and track customer leads.

---

## Database Schema

The system manages the following core entities via Prisma:
- **Properties**: Details, pricing, and status.
- **Leads**: Customer inquiries and interest tracking.
- **Bookings**: Site visit management and scheduling.
