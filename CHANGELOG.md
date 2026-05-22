# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.0] - 2026-05-22

### Fixed
- Fixed stray `</head>` tag in `home-added.ejs` that broke HTML structure
- Fixed `vercel.json` static asset routes: replaced overly broad CSS glob with explicit routes for `output.css` and `home.css` to correctly serve compiled Tailwind CSS on Vercel
- Fixed GitHub Actions `ci.yml` and `deploy.yml`: added `working-directory: airbnbDp` and `cache-dependency-path: airbnbDp/package-lock.json` so CI correctly resolves the project in the monorepo workspace
- Fixed `home-added.ejs` success page never being rendered: `postAddHome` now redirects to `/host/home-added` instead of directly to the list

### Added
- Added `GET /host/home-added` route and `getHomeAdded` controller so the property-added success page is reachable
- Updated `SECURITY.md` to reflect current supported versions (1.5.x, 1.4.x)

## [1.5.0] - 2026-05-21

### Fixed
- Corrected ESLint config: changed `sourceType` from `"module"` to `"commonjs"` to match the CommonJS codebase
- Fixed `vercel.json`: replaced `rewrites` (unsupported with `@vercel/node` builds) with `routes` including proper static asset routing for images and CSS
- Fixed `home.js` model `deleteById`: now pretty-prints JSON on write, consistent with all other write operations
- Fixed broken git clone URL in README (`htttayora.git` → correct URL)
- Fixed broken scripts table formatting in README

### Changed
- Rewrote GitHub Actions CI workflow: correct `working-directory`, removed `continue-on-error` from lint step, dropped Node 16 from matrix (EOL), added format check job
- Rewrote GitHub Actions deploy workflow: replaced outdated `amondnet/vercel-action` with official Vercel CLI approach
- Updated README to production quality: accurate badges, correct clone URL, proper scripts table, CI badge
- Updated CONTRIBUTING.md: renamed from "Airbnb Clone" to "Stayora"
- Removed dead `tailwind.config.js` (v3 format, unused in Tailwind v4)

## [1.4.1] - 2024-01-06

### Added
- Comprehensive architecture documentation (ARCHITECTURE.md)
- Detailed development guide (DEVELOPMENT.md)
- Quick deployment guide (QUICK_DEPLOY.md)
- GitHub Actions workflow for automated deployments
- Dependabot configuration for automated dependency updates
- Code of Conduct for community guidelines
- Funding configuration for sponsorship
- EditorConfig for consistent code formatting
- Enhanced ESLint and Prettier configurations
- Additional npm scripts for linting and formatting

### Changed
- Updated package.json with comprehensive metadata
- Enhanced CI/CD pipeline with security audits
- Improved README with proper GitHub links
- Updated Node.js engine requirement to >=16.0.0
- Enhanced GitHub workflows with multiple jobs

### Fixed
- Corrected author information in README
- Fixed repository URLs throughout documentation
- Improved code quality standards documentation

## [1.4.0] - 2024-01-05

### Added
- AI/ML recommendation system with collaborative filtering algorithm
- Personalized property recommendations on home page
- Similar properties section on detail pages
- Search functionality on home page with location and name filtering
- Real-time search with empty state handling
- "AI Pick" badges for recommended properties
- Search query display with clear option

### Changed
- Updated property names to First House, Second House, Third House
- Improved home page layout with search bar
- Enhanced user experience with visual search feedback
- Updated page title from "airbnb Home" to "Stayora Home"

### Fixed
- Property IDs now use sequential numbering (1, 2, 3)
- Search works on both location and property name
- Empty search results show helpful message

## [1.3.0] - 2024-01-04

### Fixed
- Removed horizontal scrollbar and sidebar issues
- Fixed viewport zoom problems on mobile devices
- Removed unnecessary container boxes for cleaner layout
- Improved responsive navigation with better spacing
- Fixed all pages to use consistent max-width layout
- Rebuilt Tailwind CSS with proper configuration

### Changed
- Updated navigation labels for better clarity ("Homes" instead of "Homes-List")
- Simplified page layouts without boxed containers
- Improved overall spacing and alignment across all pages
- Enhanced viewport meta tag for better mobile experience

### Added
- Developer footer with author credit on all pages
- Proper overflow-x hidden to prevent horizontal scroll
- Consistent max-width (7xl) across all pages
- Created input.css for Tailwind compilation

## [1.2.0] - 2024-01-03

### Added
- Footer with developer name (Amit Singh Rajput) on all pages
- Empty state messages for bookings and favourites pages
- Responsive grid layout for property cards
- Property amenities icons on detail page
- Form labels and better validation
- Confirmation dialog for delete actions
- SVG icons throughout the application

### Changed
- Complete UI overhaul with modern responsive design
- Fixed CSS overflow issues using flexbox and grid
- Improved button styling with hover effects
- Enhanced favourite button with emoji indicators
- Better mobile-first responsive design
- Improved spacing and typography
- Updated all view files with consistent styling

### Fixed
- CSS overflow issues on host pages
- Corrupted home-detail.ejs file
- Button alignment and sizing issues
- Form validation and user experience

## [1.1.0] - 2024-01-02

### Changed
- Rebranded from Airbnb Clone to Stayora
- Updated all branding and UI text to Stayora
- Added author information: Amit Singh Rajput
- Fixed image display issues with fallback images
- Enhanced meta tags with author and description

### Fixed
- Images now display correctly with fallback to default image
- All external image URLs replaced with local assets

## [1.0.0] - 2024-01-01

### Added
- Initial release of hotel booking application
- User features: browse homes, view details, add to favourites, make bookings
- Host features: add, edit, delete home listings
- Responsive design with Tailwind CSS
- EJS templating for server-side rendering
- JSON-based data storage
- Search functionality for homes by location
- Error handling and 404 pages
- Professional GitHub repository structure
- Comprehensive documentation
- GitHub templates for issues and PRs
- CI/CD workflow with GitHub Actions
- Security policy and contributing guidelines

### Fixed
- Improved error handling in all models
- Fixed ID generation to be more unique
- Fixed JSON parsing errors with proper try-catch blocks
- Standardized code formatting across all files
- Fixed callback error handling in controllers

### Changed
- Improved code quality and consistency
- Added proper indentation to JSON data files
- Enhanced error messages for better debugging
