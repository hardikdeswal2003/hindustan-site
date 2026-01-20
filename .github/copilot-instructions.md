# Copilot / AI Assistant Instructions

Repository: Hindustan Enterprises (hindustan-site)

Purpose
- Provide a friendly local storefront for Hindustan Enterprises (Panipat) — product listings, brands, campaigns and contact flow.

How the project is organized
- frontend: React (Create React App) in the repository root `src/` folder. Key pages: `src/pages/Home.js`, `src/pages/Products.js`, `src/pages/Brands.js`, `src/pages/ProductDetail.js`.
- backend: simple Express API in `backend/` (uses Mongoose). Starts from `backend/server.js`.
- static assets: served from `public/` (images under `public/brands`, `public/category`, `public/campaign`) and some images under `src/assets`.

Run the app locally
1. Frontend
   - npm install (if not already)
   - npm start (from project root) — starts CRA dev server on port 3000 by default

2. Backend (optional for product data)
   - cd backend
   - npm install
   - Create a `.env` with `MONGO_URI` if you have a MongoDB instance
   - node server.js

Notes for AI assistants / contributors
- Keep UI routes consistent: `App.js` exposes `/`, `/products`, `/brands`, `/brands/:brandName`, `/product/:id`, `/solar`.
- Category links on the homepage use query strings: `/products?category=Water%20Purifier` — `src/pages/Products.js` reads the `category` query param and filters accordingly.
- Prefer using `useNavigate`/`useLocation` for navigation and URL-sync; avoid direct window.location assignments where react-router is available.
- Static images should be referenced from `public/` with absolute paths like `/campaign/luxury-kitchen.jpeg` or `/brands/livpure.png`.
- When editing styles in `src/pages/Home.css`, scope larger blocks under `.categorySection` or `.kitchenSection` to avoid global overrides.

Troubleshooting
- If CRA fails to start due to missing asset paths, verify the file extension (e.g. `.jpeg` vs `.jpg`) and update the CSS URL accordingly.
- If backend fails to connect to DB, the server now warns and continues to run so you can still test the frontend.

If you restore files or revert edits, prefer applying focused patches rather than full reformatting.

Contact
- For questions about the design decisions, see `README.md` or reach out to the repository owner.
