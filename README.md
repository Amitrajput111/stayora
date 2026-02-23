# 🏠 Stayora - Modern Hotel Booking Platform

<div align="center">

![Stayora](https://img.shields.io/badge/Stayora-Hotel%20Booking-FF5A5F?style=for-the-badge&logo=airbnb)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.1-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](LICENSE)

**A full-stack hotel booking application with AI-powered recommendations**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [API](#-api-endpoints)

</div>

---

## 📖 About

Stayora is a modern hotel booking platform that enables users to discover, book, and manage property rentals. Built with Node.js, Express, and featuring an intelligent AI recommendation system, Stayora delivers a seamless booking experience.

### Key Highlights

- 🤖 **AI-Powered Recommendations** - Machine learning algorithm suggests properties based on user preferences
- 🔍 **Smart Search** - Real-time search by location and property name
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⚡ **Fast Performance** - Lightweight architecture with minimal dependencies
- 🎨 **Modern UI** - Clean interface with Tailwind CSS

---

## ✨ Features

### For Guests

| Feature | Description |
|---------|-------------|
| 🏡 **Browse Properties** | Explore available accommodations with detailed information |
| 🔍 **Smart Search** | Filter by location, name, price, and rating |
| ❤️ **Favorites** | Save properties for later viewing |
| 📅 **Easy Booking** | Simple booking process with date selection |
| 🤖 **AI Recommendations** | Get personalized property suggestions |
| 📊 **Booking History** | Track all your reservations |

### For Hosts

| Feature | Description |
|---------|-------------|
| ➕ **Add Properties** | List new properties with photos and details |
| ✏️ **Edit Listings** | Update property information anytime |
| 🗑️ **Delete Listings** | Remove properties when needed |
| 📈 **Dashboard** | Manage all properties in one place |

---

## 🎬 Demo

### Live Demo
🔗 **[View Live Demo](https://stayora-ochre.vercel.app)** ← Click to see it in action!

### Quick Start

```bash
git clone https://github.com/yourusername/stayora.git
cd stayora
npm install
npm run build
npm run dev
```

Visit `http://localhost:3000`

---

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **EJS** - Embedded JavaScript templating
- **JSON Storage** - File-based data persistence

### Frontend
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No framework dependencies
- **Responsive Design** - Mobile-first approach

### AI/ML
- **Collaborative Filtering** - Custom recommendation algorithm
- **Similarity Scoring** - Multi-factor property matching
- **Real-time Processing** - Instant recommendations

---

## 📦 Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stayora.git
   cd stayora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env`:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

4. **Build CSS**
   ```bash
   npm run build
   ```

5. **Start server**
   ```bash
   npm run dev
   ```

6. **Access application**
   
   Open `http://localhost:3000` in your browser

---

## 🚀 Usage

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with auto-reload |
| `npm run build` | Build and minify Tailwind CSS |
| `npm run tailwind:watch` | Watch CSS changes in development |

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` |

---

## 📁 Project Structure

```
stayora/
├── controllers/              # Request handlers
│   ├── errors.js            # Error handling
│   ├── hostController.js    # Host operations
│   └── storeController.js   # Guest operations
├── data/                    # JSON data storage
│   ├── bookings.json        # Booking records
│   ├── favourite.json       # User favorites
│   └── homes.json           # Property listings
├── models/                  # Data models
│   ├── booking.js           # Booking model
│   ├── favourite.js         # Favorite model
│   └── home.js              # Property model
├── routes/                  # Route definitions
│   ├── hostRouter.js        # Host routes
│   └── storeRouter.js       # Guest routes
├── services/                # Business logic
│   └── recommendationService.js  # AI engine
├── public/                  # Static assets
│   ├── images/              # Property images
│   └── output.css           # Compiled CSS
├── views/                   # EJS templates
│   ├── host/                # Host views
│   ├── store/               # Guest views
│   └── partials/            # Reusable components
├── app.js                   # Application entry
├── package.json             # Dependencies
└── tailwind.config.js       # Tailwind config
```

---

## 🔌 API Endpoints

### Guest Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Home page with AI recommendations |
| `GET` | `/homes` | Browse all properties |
| `GET` | `/homes/:id` | Property details with similar properties |
| `POST` | `/homes/:id/book` | Book a property |
| `GET` | `/favourites` | View favorite properties |
| `POST` | `/favourites` | Add to favorites |
| `POST` | `/favourites/:id/remove` | Remove from favorites |
| `GET` | `/bookings` | View all bookings |

### Host Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/host/add-home` | Add property form |
| `POST` | `/host/add-home` | Create new property |
| `GET` | `/host/host-home-list` | View all properties |
| `GET` | `/host/edit-home/:id` | Edit property form |
| `POST` | `/host/edit-home` | Update property |
| `POST` | `/host/delete-home/:id` | Delete property |

---

## 🤖 AI Recommendation System

### Algorithm Overview

The recommendation engine uses collaborative filtering with multi-factor similarity scoring:

```javascript
Similarity Score = (Location Match × 0.4) + 
                   (Price Match × 0.3) + 
                   (Rating Match × 0.3)
```

### Features

1. **Personalized Recommendations**
   - Analyzes user's favorite properties
   - Suggests similar properties based on preferences
   - Falls back to popular properties for new users

2. **Similar Properties**
   - Shows related properties on detail pages
   - Helps users discover alternatives
   - Improves engagement and conversion

3. **Real-time Processing**
   - Instant recommendations
   - No external API calls
   - Lightweight and fast

---

## 🎨 Customization

### Changing Theme Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF5A5F',  // Stayora red
        secondary: '#00A699', // Teal accent
      }
    }
  }
}
```

### Adding New Features

1. Create model in `models/`
2. Add controller logic in `controllers/`
3. Define routes in `routes/`
4. Create views in `views/`
5. Update documentation

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Heroku

```bash
heroku create stayora-app
git push heroku main
heroku config:set PORT=3000
```

### Manual Deployment

1. Build CSS: `npm run build`
2. Set environment variables
3. Start server: `npm start`

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use meaningful variable names
- Comment complex logic
- Follow existing code style
- Test before submitting
- Update documentation

---

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Amit Singh Rajput**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Inspired by modern booking platforms
- Built with best practices and clean code
- Thanks to the open-source community

---

## 📊 Version History

- **v1.3.0** - Added AI recommendations and search functionality
- **v1.2.0** - UI overhaul with responsive design
- **v1.1.0** - Rebranded to Stayora
- **v1.0.0** - Initial release

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Amit Singh Rajput

</div>
