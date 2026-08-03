# Divar Front End

[فارسی](README.fa.md)

The React and TypeScript user interface for the Divar project. Users can browse and filter listings, sign in with a mobile number and one-time password (OTP), and manage their own listings. An admin panel is available for users with the administrator role to manage categories.

## Features

- Browse listings with their image, title, price, and city
- Filter listings by category
- Two-step authentication with a mobile number and OTP
- Store access and refresh tokens and renew sessions automatically
- Protect user routes and limit the admin panel to users with the `ADMIN` role
- Create a listing with its title, description, price, city, category, and image
- View and delete the current user's listings
- Create, view, and delete categories in the admin panel
- Show loading states, errors, and success/error notifications
- Right-to-left Persian interface using the Vazirmatn font
- 404 page for unknown routes

## Technologies

- React 19 and TypeScript
- Vite 7
- React Router 7
- TanStack Query 5 for fetching, caching, and synchronizing server data
- Tailwind CSS 4
- Sonner for notifications and Lucide React for icons
- ESLint

## Prerequisites

- Node.js `20.19.0` or later, or `22.12.0` or later
- npm
- The project API running at `http://localhost:3400/` by default

## Getting Started

Navigate to the front-end directory and install the dependencies:

```bash
cd front-end
npm i
```

Create a `.env` file in this directory:

```env
VITE_BASE_URL=http://localhost:3400/
```

`VITE_BASE_URL` must end with a trailing `/`. Then start the development server:

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

| Route        | Description                                  | Access                                                      |
| ------------ | -------------------------------------------- | ----------------------------------------------------------- |
| `/`          | Display listings and categories              | Public                                                      |
| `/auth`      | Sign in with a mobile number and OTP         | Guests; authenticated users are redirected to the dashboard |
| `/dashboard` | Create, view, and delete the user's listings | Authenticated users                                         |
| `/admin`     | Manage categories                            | Users with the `ADMIN` role only                            |
| `*`          | Not-found page                               | Public                                                      |

## API Integration and Authentication

All requests use the address defined in `VITE_BASE_URL`. After OTP verification, access and refresh tokens are stored in browser cookies. Authenticated requests send the access token through the `Authorization: Bearer <token>` header. When a request receives a `401` response, the application attempts to refresh the token once and retries the request.

The main API endpoints used by the front end are:

- `POST /auth/send-otp`
- `POST /auth/check-otp`
- `POST /auth/check-refresh-token`
- `GET /user/whoami`
- `GET /`
- `GET /post/my`
- `POST /post/create`
- `DELETE /post/delete/:id`
- `GET /category`
- `POST /category`
- `DELETE /category/:id`

## Project Structure

```text
src/
├── assets/       # Fonts and static files
├── components/   # UI components and templates
├── config/       # Library configuration, including React Query
├── layouts/      # Shared layout, header, and footer
├── pages/        # Main application pages
├── router/       # Routes and access control
├── services/     # API integration
├── styles/       # Global styles and fonts
├── types/        # TypeScript types
├── utils/        # Helpers, including cookie management
├── App.tsx       # Providers and application structure
└── main.tsx      # Application entry point
```

## Production Build

Before deploying, set `VITE_BASE_URL` to the API address of the target environment. Then run:

```bash
npm run build
npm run preview
```
