# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.0] - 2026-05-22

### Added
- `GET /host/home-added` route and `getHomeAdded` controller — success page was previously unreachable
- `CODE_OF_CONDUCT.md` and `dependabot.yml` to `.github/`
- Automated deploy workflow using Vercel CLI (`deploy.yml`)

### Fixed
- `home-added.ejs` had a stray `</head>` tag that broke HTML structure
- `postAddHome` now redirects to `/host/home-added` instead of skipping the success page
- `vercel.json` static asset routes replaced with explicit rules (CSS glob was broken)
- GitHub Actions `ci.yml` and `deploy.yml` now set correct `working-directory` and `cache-dependency-path` for the monorepo layout
- `dependabot.yml` npm directory corrected to `/airbnbDp`
- Removed deprecated `name` property from `vercel.json`

### Removed
- Dead/unused files: `views/store/favourite.ejs` (old broken view), `views/store/reserve.ejs` (empty), `public/home.css` (unused)
- Redundant docs: `ARCHITECTURE.md`, `DEVELOPMENT.md`, `QUICK_DEPLOY.md`, `PROJECT_STATUS.md`, `deploy.bat`, `.github/FUNDING.yml`, `.github/PROJECT_SUMMARY.md`
- `tailwind.config.js` (Tailwind v3 format, unused with v4)

### Changed
- `.nvmrc` updated from `14.0.0` to `20`
- `README.md` rewritten: correct GitHub username, accurate badge URLs, clean structure
- `package.json` repository/bugs/homepage URLs corrected to `Amitrajput111/stayora`
- `SECURITY.md` supported versions updated to reflect current release

## [1.5.0] - 2026-05-21

### Fixed
- ESLint config `sourceType` corrected from `"module"` to `"commonjs"`
- `vercel.json` replaced unsupported `rewrites` with `routes`
- `home.js` model `deleteById` now pretty-prints JSON on write
- Broken git clone URL in README

### Changed
- GitHub Actions CI workflow rewritten with correct working directory, Node 18/20 matrix, format check job
- GitHub Actions deploy workflow replaced outdated action with official Vercel CLI approach
- README updated with accurate badges and clone URL

## [1.4.0] - 2024-01-05

### Added
- Content-based recommendation system with collaborative filtering
- Personalized recommendations on home page
- Similar properties section on detail pages
- Search by location and property name on home page
- "AI Pick" badges on recommended cards

### Changed
- Home page layout updated with search bar
- Page title updated to "Stayora Home"

### Fixed
- Property IDs use sequential numbering (1, 2, 3)
- Search handles both location and name fields

## [1.3.0] - 2024-01-04

### Fixed
- Horizontal scrollbar removed
- Viewport zoom issues on mobile
- Inconsistent max-width across pages

### Changed
- Navigation labels updated ("Homes" instead of "Homes-List")
- Consistent `max-w-7xl` layout across all pages

### Added
- Developer footer on all pages
- `input.css` for Tailwind compilation

## [1.2.0] - 2024-01-03

### Added
- Empty state messages for bookings and favourites
- Responsive grid layout for property cards
- Property amenity icons on detail page
- Confirmation dialog for delete actions

### Changed
- Full UI overhaul with Tailwind CSS
- Mobile-first responsive design

### Fixed
- CSS overflow issues on host pages
- Button alignment and sizing

## [1.1.0] - 2024-01-02

### Changed
- Rebranded from Airbnb Clone to Stayora
- Replaced external image URLs with local assets

## [1.0.0] - 2024-01-01

### Added
- Initial release
- Guest features: browse, search, favourites, bookings
- Host features: add, edit, delete listings
- Responsive design with Tailwind CSS
- EJS server-side rendering
- JSON file storage
- 404 error handling
- GitHub Actions CI workflow
