# PlotFlow (findmyplot-hero) - Project Documentation

## Overview
PlotFlow is a premium real estate platform specializing in plot and land sales. It combines high-end editorial aesthetics with robust agent-productivity tools.

## Key Features

### 1. Interactive Plot Mapping
- **Tech:** Leaflet.js with custom DivIcons.
- **Functionality:** Real-time synchronization between search results and map markers. Markers (dots) reveal property detail popups on click, linking directly to the property's detailed view.
- **Data Model:** Uses `latitude` and `longitude` metadata for precise plot positioning.

### 2. Premium Dashboard
- **Design:** Redesigned with a minimalist, high-contrast aesthetic.
- **KPI Tracking:** Real-time monitoring of Revenue, Lead Volume, and Inventory (Sold vs. Total).
- **Activity Feed:** Live stream of recent lead actions and inquiries.

### 3. Unified Navigation
- **Component:** `Navbar.tsx`
- **Features:** Glassmorphism scroll effects, unified brand identity across all routes (Home, Explore, Dashboard, Properties).

### 4. Property Detail View
- **Route:** `/properties/[id]`
- **Features:** Editorial layout, market investment insights (appreciation/yield), and integrated agent contact actions.

## Technical Architecture

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **Map Engine:** React-Leaflet (Client-side dynamic import)

### Backend
- **Framework:** Express + TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL (via Supabase)

## Recent Changes (June 5, 2026)
- Implemented Interactive Map on Explore page.
- Redesigned Agent Dashboard to match brand aesthetics.
- Synchronized navigation across the application.
- Fixed critical AuthContext initialization bugs.
- Added data safety guards to prevent crashes on malformed API responses.

## Future Roadmap
- Implementation of the `PlotCoordinate` polygon mapping for boundary visualization.
- Integration of RERA/Legal verification badges.
- WhatsApp API integration for direct agent lead qualification.
