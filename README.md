# findmyplot-hero - Full Stack Real Estate SaaS Platform

This project is a modern, full-stack web application designed as a SaaS platform for real estate dealers to list and manage properties, with a "Super Admin" role for oversight and verification.

## Architecture

The project is a monorepo with two main packages:

*   **/frontend**: A modern React application built with Vite. It features a component-based architecture, client-side routing with `react-router-dom`, global state management with React Context, and a polished UI styled with Tailwind CSS and animated with `framer-motion`.
*   **/backend**: A robust Spring Boot application that serves a REST API for managing users, plots, and authentication. It uses Spring Security for handling roles and JWT for stateless authentication. For local development, it runs on an H2 file-based database.

---

## Prerequisites

*   **Java 21** or higher (for the backend).
*   **Node.js 18** or higher (for the frontend).
*   A running PostgreSQL database (for production) or the ability to use the embedded H2 database (for local development).

---

## How to Run the Application

You can run the application using the integrated VS Code task or by running the frontend and backend separately.

### Option 1: Using VS Code Tasks (Recommended)

1.  Open the project root in Visual Studio Code.
2.  Press `Ctrl + Shift + B`.
3.  Select **"Run Full App"** from the dropdown. This will start both the backend and frontend servers in separate terminal panels.

### Option 2: Running Manually

#### Backend (Spring Boot)

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Run the application using the Maven wrapper:
    ```bash
    # For Windows
    ./mvnw.cmd spring-boot:run

    # For macOS/Linux
    ./mvnw spring-boot:run
    ```
3.  The backend server will start on `http://localhost:8080`.

#### Frontend (React)

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
4.  The frontend will be accessible at `http://localhost:5173`.

---

## User Roles & Credentials

The application is seeded with default users for development purposes:

*   **Super Admin:**
    *   **Email:** `admin@findmyplot.com`
    *   **Password:** `admin123`
    *   **Abilities:** Can view all plots and verify them via the dashboard.

*   **Dealer:**
    *   **Email:** `dealer@example.com`
    *   **Password:** `dealer123`
    *   **Abilities:** Can view their dashboard and upload new plot listings.

---

## Local Database

For local development, the backend uses a persistent H2 file-based database.

*   **Database file location:** `backend/data/findmyplot.mv.db`
*   **H2 Console:** You can access a database management UI by navigating to `http://localhost:8080/h2-console` while the backend is running.
    *   **JDBC URL:** `jdbc:h2:file:./data/findmyplot`
    *   **Username:** `sa`
    *   **Password:** `password`
