# Airbnb Clone

A full-stack Airbnb-like application built with Node.js, Express.js, EJS templating, and Tailwind CSS. This project allows users to browse homes, add to favourites, make bookings, and hosts to manage their listings.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Live Demo

[View Live Demo on Vercel](https://your-vercel-app-url.vercel.app) *(Update with your actual Vercel URL after deployment)*

## ✨ Features

### User Features
- 🏠 Browse available homes with search functionality
- 🔍 View detailed home information
- ❤️ Add/remove homes to/from favourites
- 📅 Make bookings with user details
- 📱 Responsive design for all devices

### Host Features
- ➕ Add new home listings
- ✏️ Edit existing home listings
- 🗑️ Delete home listings
- 📊 View all hosted homes

### General
- 🎨 Clean, modern UI with Tailwind CSS
- 🚦 Error handling and 404 pages
- ⚡ Fast and lightweight
- 🔒 Input validation

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Tailwind CSS
- **Data Storage**: JSON files (for demo purposes)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
airbnbDp/
├── controllers/          # Request handlers
│   ├── errors.js
│   ├── hostController.js
│   └── storeController.js
├── data/                 # JSON data files
│   ├── bookings.json
│   ├── favourite.json
│   └── homes.json
├── models/               # Data models
│   ├── booking.js
│   ├── favourite.js
│   └── home.js
├── public/               # Static assets
│   ├── images/
│   ├── home.css
│   └── output.css
├── routes/               # Route definitions
│   ├── hostRouter.js
│   └── storeRouter.js
├── utils/                # Utility functions
│   └── pathUtil.js
├── views/                # EJS templates
│   ├── host/             # Host-related views
│   ├── store/            # User-facing views
│   └── partials/         # Reusable components
├── app.js                # Main application file
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vercel.json           # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/airbnb-clone.git
   cd airbnb-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Build Tailwind CSS**:
   ```bash
   npm run build
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Build Tailwind CSS for production
- `npm run tailwind:watch` - Watch and build Tailwind CSS during development

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

## 📸 Screenshots

*Add screenshots of your application here*

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Configure Environment Variables** in Vercel dashboard

4. **Update README** with your live URL

The app is pre-configured for Vercel with `vercel.json`.

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Data is stored in JSON files (not suitable for production)
- No authentication system implemented
- No image upload functionality (uses URLs)

## 🔮 Future Enhancements

- [ ] Add user authentication
- [ ] Integrate with a real database (MongoDB/PostgreSQL)
- [ ] Add image upload functionality
- [ ] Implement payment integration
- [ ] Add reviews and ratings system
- [ ] Email notifications for bookings
- [ ] Advanced search filters
- [ ] Map integration for locations

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

## 🙏 Acknowledgments

- Inspired by Airbnb
- Built with Express.js and EJS
- Styled with Tailwind CSS
