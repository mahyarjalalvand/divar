# Divar Front End

The user interface for the Divar project is built with React and TypeScript. The application retrieves listings and categories from an API, supports sign-in with a mobile number and a one-time password (OTP), and provides a page for managing categories.

> This project is under development, and some pages and features are not yet complete.

## Current Features

- Display listings and categories on the home page
- Two-step sign-in using a mobile number and OTP
- Store access and refresh tokens and automatically renew user sessions
- Protect the dashboard route for authenticated users
- View and create categories in the admin panel
- Manage server request state with TanStack Query
- Persian interface, Vazirmatn font, and toast notifications
- A 404 page for unknown routes

## Technologies

- React 19 and TypeScript
- Vite 7 (Rolldown-based version)
- React Router 7
- TanStack React Query 5
- Tailwind CSS 4
- Sonner and Lucide React
- ESLint

## Prerequisites

- Node.js `20.19.0` or later, or `22.12.0` or later
- npm
- The project's API running at `http://localhost:3400/` by default

## Setup

First, navigate to the front-end directory and install the dependencies:

```bash
cd front-end
npm ci
```

Then, create a `.env` file in the root of this directory:

```env
VITE_BASE_URL=http://localhost:3400/
```

The API URL must end with a trailing `/`. Finally, start the development server:

```bash
npm run dev
```

Vite displays the application URL in its output; it is usually `http://localhost:5173/`.

## Scripts

| Command           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload                   |
| `npm run build`   | Type-check the project and create a production build in `dist` |
| `npm run preview` | Preview the production build locally                           |
| `npm run lint`    | Check the code with ESLint                                     |

## Application Routes

| Route        | Description                          | Access                                     |
| ------------ | ------------------------------------ | ------------------------------------------ |
| `/`          | Display listings and categories      | Public                                     |
| `/auth`      | Sign in with a mobile number and OTP | Guest users                                |
| `/dashboard` | Dashboard and listing submission     | Authenticated users                        |
| `/admin`     | View and create categories           | No role restriction in the current version |
| `*`          | 404 page                             | Public                                     |

## Directory Structure

```text
src/
├── assets/       # Fonts and static files
├── components/   # Template components and UI elements
├── config/       # Library configuration, such as React Query
├── constants/    # Application constants
├── layouts/      # Shared layouts, Header, and Footer
├── lib/          # Shared helper functions
├── pages/        # Main application pages
├── router/       # Route definitions and access control
├── services/     # Authentication, user, and admin API integrations
├── styles/       # Global styles, Tailwind, and fonts
├── utils/        # General utilities, such as cookie management
├── App.tsx       # Providers and the main application structure
└── main.tsx      # React entry point
```

Use the following alias when importing modules from `src`:

```ts
import HomePage from "@/pages/HomePage";
```

## API Integration and Authentication

All requests use the URL defined in `VITE_BASE_URL`. After OTP verification, the access and refresh tokens are stored in browser cookies. Authenticated requests send the access token in the `Authorization` header using the `Bearer` scheme. If a request receives a `401` response, the application makes one attempt to refresh the token.

The main API endpoints used by the front end are:

- `POST /auth/send-otp`
- `POST /auth/check-otp`
- `POST /auth/check-refresh-token`
- `GET /user/whoami`
- `GET /category`
- `POST /category`

## Production Build

```bash
npm run build
npm run preview
```

The final output is generated in the `dist` directory. Before building for deployment, set `VITE_BASE_URL` to the API URL of the target environment.
