# Stayora

A full-stack property booking platform built with Node.js, Express, EJS, and Tailwind CSS. Features content-based property recommendations, search, favourites, and a host management dashboard.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](LICENSE)
[![CI](https://github.com/Amitrajput111/stayora/actions/workflows/ci.yml/badge.svg)](https://github.com/Amitrajput111/stayora/actions/workflows/ci.yml)

**Live demo:** https://stayora-ochre.vercel.app

---

## Features

**Guests**
- Browse and search properties by name or location
- View property details with an inline booking form
- Save and manage favourites
- Book with check-in / check-out dates
- View booking history
- Recommendations based on favourites (content-based filtering)
- Similar properties on detail pages

**Hosts**
- Add, edit, and delete property listings
- Manage all listings from a single dashboard

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js v18+ |
| Framework | Express.js v5 |
| Templating | EJS |
| Styling | Tailwind CSS v4 |
| Storage | JSON files (demo) |
| Deployment | Vercel |

---

## Getting started

### Prerequisites

- Node.js v18+
- npm v8+

### Install

```bash
git clone https://github.com/Amitrajput111/stayora.git
cd stayora
npm install
```

### Environment

```bash
cp .env.example .env
```

The only variable needed locally:

```
PORT=3000
NODE_ENV=development
```

### Build CSS

```bash
npm run build
```

### Run

```bash
# Development (auto-reload)
npm run dev

# Production
npm start
```

Open `http://localhost:3000`

---

## Project structure

```
stayora/
├── app.js                        # Entry point
├── controllers/
│   ├── storeController.js        # Guest route handlers
│   ├── hostController.js         # Host route handlers
│   └── errors.js                 # 404 handler
├── models/
│   ├── home.js                   # Property CRUD
│   ├── booking.js                # Booking CRUD
│   └── favourite.js              # Favourites CRUD
├── routes/
│   ├── storeRouter.js            # Guest routes
│   └── hostRouter.js             # Host routes
├── services/
│   └── recommendationService.js  # Recommendation engine
├── views/
│   ├── store/                    # Guest pages
│   ├── host/                     # Host pages
│   ├── partials/                 # Shared partials (head, nav, footer)
│   ├── 404.ejs
│   └── input.css                 # Tailwind source
├── public/
│   ├── images/                   # Property images
│   └── output.css                # Compiled Tailwind CSS
├── data/
│   ├── homes.json
│   ├── bookings.json
│   └── favourite.json
├── utils/
│   └── pathUtil.js
└── vercel.json
```

---

## Routes

### Guest

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home — search + recommendations |
| GET | `/homes` | All properties |
| GET | `/homes/:id` | Property detail + similar properties |
| POST | `/homes/:id/book` | Submit booking |
| GET | `/bookings` | Booking history |
| GET | `/favourites` | Saved favourites |
| POST | `/favourites` | Add to favourites |
| POST | `/favourites/delete/:id` | Remove from favourites |

### Host

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/host/add-home` | Add property form |
| POST | `/host/add-home` | Create property |
| GET | `/host/home-added` | Success page |
| GET | `/host/host-home-list` | Manage listings |
| GET | `/host/edit-home/:id` | Edit property form |
| POST | `/host/edit-home` | Update property |
| POST | `/host/delete-home/:id` | Delete property |

---

## Recommendation system

Content-based filtering using a weighted similarity score:

```
score = (location match × 0.4) + (price proximity × 0.3) + (rating proximity × 0.3)
```

- No favourites → top-rated properties shown
- With favourites → scored against each saved property, averaged
- Detail page → similar properties by score

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start dev server with nodemon |
| `npm run build` | Build and minify Tailwind CSS |
| `npm run tailwind:watch` | Watch CSS in development |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |

---

## Deployment

The app is deployed on Vercel. See [DEPLOYMENT.md](DEPLOYMENT.md) for the full guide.

For automated deployments, connect the GitHub repo in the [Vercel dashboard]([https://vercel.com/dashboard](https://stayora-gc5mry7wq-amitrajput111s-projects.vercel.app/)) — every push to `main` deploys automatically.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

ISC — see [LICENSE](LICENSE)

---

**Amit Singh Rajput** · [GitHub](https://github.com/Amitrajput111) · [amitsinghrajput.dev](https://amitsinghrajput.dev)
