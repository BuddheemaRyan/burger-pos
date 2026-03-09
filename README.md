# 🍔 BurgerPOS

A modern **Point of Sale (POS)** web application for a burger restaurant, built with **Angular 19** and **Tailwind CSS**. BurgerPOS lets restaurant staff browse the menu, manage a live cart with real-time totals, and administer products — all from a clean, responsive, dark-themed interface.

> **Currency:** All prices are displayed in **LKR (Sri Lankan Rupees)**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Application Routes](#application-routes)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Backend API](#backend-api)
- [Running Tests](#running-tests)
- [Building for Production](#building-for-production)

---

## Features

- **Dashboard** (`/`) – Browse the full menu filtered by category (`burger`, `fries`, `snacks`, `drinks`).
- **Live Cart** – Add items, adjust quantities, remove individual items, or clear the cart. Displays a real-time subtotal, 8% tax, and grand total in LKR (Sri Lankan Rupees).
- **Order View** (`/order`) – Dedicated checkout screen focused on the current cart contents.
- **Admin Board** (`/admin`) – Full product management (create, read, update, delete) with image URL support and a modal form interface.
- **Sidebar Navigation** – Quick access to Dashboard, Manage Products, and Order pages.
- **Responsive Layout** – Built with Tailwind CSS utility classes for a consistent dark UI.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Angular 19](https://angular.dev) |
| Language | TypeScript 5.7 |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| State | Angular Signals (`signal`, `computed`) |
| HTTP | Angular `HttpClient` |
| Testing | Karma + Jasmine |
| Build | Angular CLI 19 |

---

## Application Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Dashboard | Main POS screen — menu grid + live cart panel |
| `/order` | Order | Checkout screen showing the current cart |
| `/admin` | Admin Board | Product CRUD management panel |

---

## Project Structure

```
src/
├── app/
│   ├── component/
│   │   ├── cart/          # Cart panel with item list & totals
│   │   ├── categories/    # Category filter tabs
│   │   ├── menu/          # Menu grid fetched from the backend
│   │   ├── side-bar/      # Navigation sidebar
│   │   └── top-bar/       # Top navigation bar
│   ├── pages/
│   │   ├── dashboard/     # Main POS screen (menu + cart)
│   │   ├── order/         # Order / checkout screen
│   │   └── admin-board/   # Product CRUD admin panel
│   └── services/
│       ├── cart.service.ts    # Signal-based cart state
│       └── product.service.ts # HTTP calls to the product API
└── styles.css
```

---

## Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- [Angular CLI](https://angular.dev/tools/cli) v19 (`npm install -g @angular/cli`)
- A running backend API (see [Backend API](#backend-api))

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/BuddheemaRyan/burger-pos.git
   cd burger-pos
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   ng serve
   # or
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`.  
   The app reloads automatically when you edit source files.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the development server on port 4200 |
| `npm run build` | Compile the app for production (output to `dist/`) |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests with Karma |

---

## Backend API

The frontend expects a REST API running at `http://localhost:8080`. The following endpoints are used:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/products/all` | Fetch all products |
| `GET` | `/products/get/:id` | Fetch a single product |
| `POST` | `/products/add` | Create a new product |
| `PUT` | `/products/:id` | Update an existing product |
| `DELETE` | `/products/:id` | Delete a product |

### Product object

```json
{
  "id": 1,
  "name": "Classic Burger",
  "category": "burger",
  "price": 850,
  "imageUrl": "https://images.unsplash.com/..."
}
```

> **Tip:** You can change the API base URL in `src/app/services/product.service.ts`.

---

## Running Tests

```bash
ng test
```

Unit tests use the [Karma](https://karma-runner.github.io) test runner with [Jasmine](https://jasmine.github.io). Test files are located alongside each component/service with the `.spec.ts` suffix.

---

## Building for Production

```bash
ng build
```

Build artifacts are placed in the `dist/` directory. The production build enables full optimization (tree-shaking, minification, AOT compilation).
