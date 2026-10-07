# Travel360

Travel website built with React, Vite and framer-motion (scroll-reveal, parallax and marquee animations).

Pages: Home, Destinations, Tours, Flights, Hotels, Blog, About Us.

```bash
npm install
npm run dev     # local dev server
npm run build   # production build in dist/
```

Images live in `public/images/`; page content (destinations, tours, hotels, posts) is in `src/data/destinations.js`.
Deploys to Vercel as a Vite app; `vercel.json` rewrites routes to `index.html` for client-side routing.
