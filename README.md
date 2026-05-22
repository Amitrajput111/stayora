# Stayora — Property Booking Platform

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://stayora-ochre.vercel.app)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](LICENSE)
[![CI](https://github.com/amitsinghrajput/stayora/actions/workflows/ci.yml/badge.svg)](https://github.com/amitsinghrajput/stayora/actions/workflows/ci.yml)

A full-stack property booking platform with AI-powered recommendations, built with Node.js, Express, EJS, and Tailwind CSS v4.

**[Live Demo](https://stayora-ochre.vercel.app)**

</div>

---

## Features

**For Guests**
- Browse and search properties by name or location
- View property details with a booking form
- Save favourites and manage them
- Book properties with check-in/check-out dates
- View booking history
- AI-powered recommendations based on your favourites
- Similar properties shown on detail pages

**For Hosts**
- Add, edit, and delete property listings
- Manage all listings from a single dashboard

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js v18+ |
| Framework | Express.js v5 |
| Templating | EJS |
| Styling | Tailwind CSS v4 |
| Storage | JSON files |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v8+

### Installation

```bash
git clone https://github.com/amitsinghrajput/stayora.git
cd stayora
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

`.env` variables:

```env
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

## Project Structure

```
stayora/
├── app.js                        # Entry point — exports app for Vercel
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
│   └── recommendationService.js  # AI recommendation engine
├── views/
│   ├── store/                    # Guest-facing pages
│   ├── host/                     # Host-facing pages
│   └── partials/                 # Shared components (head, nav, footer)
├── public/
│   ├── images/                   # Property images
│   └── output.css                # Compiled Tailwind CSS
├── data/
│   ├── homes.json
│   ├── bookings.json
│   └── favourite.json
├── utils/
│   └── pathUtil.js               # Root path resolver
└── vercel.json                   # Vercel deployment config
```

---

## API Endpoints

### Guest

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page with AI recommendations |
| GET | `/homes` | Browse all properties |
| GET | `/homes/:id` | Property detail + similar properties |
| POST | `/homes/:id/book` | Submit a booking |
| GET | `/bookings` | View booking history |
| GET | `/favourites` | View saved favourites |
| POST | `/favourites` | Add to favourites |
| POST | `/favourites/delete/:id` | Remove from favourites |

### Host

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/host/add-home` | Add property form |
| POST | `/host/add-home` | Create property |
| GET | `/host/host-home-list` | Manage listings |
| GET | `/host/edit-home/:id` | Edit property form |
| POST | `/host/edit-home` | Update property |
| POST | `/host/delete-home/:id` | Delete property |

---

## AI Recommendation System

The recommendation engine uses content-based collaborative filtering:

```
Similarity = (Location match × 0.4) + (Price proximity × 0.3) + (Rating proximity × 0.3)
```

- New users see top-rated properties
- Returning users get recommendations based on their favourites
- Detail pages show similar properties by similarity score

---

## Deployment

### Vercel (recommended)

Connect your GitHub repo in the [Vercel dashboard](https://vercel.com/dashboard) for automatic deployments on every push to `main`.

Or deploy manually:

```bash
npm install -g vercel
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full step-by-step guide.

### Environment Variables on Vercel

Set `NODE_ENV=production` in your Vercel project settings. `PORT` is managed by Vercel automatically.

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
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit with conventional commits: `git commit -m "feat: add feature"`
4. Push and open a PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

---

## License

ISC — see [LICENSE](LICENSE)

---

## Author

**Amit Singh Rajput**
- GitHub: [@amitsinghrajput](https://github.com/amitsinghrajput)
- Portfolio: [amitsinghrajput.dev](https://amitsinghrajput.dev)
