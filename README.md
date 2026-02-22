# Airbnb Clone

A full-stack Airbnb-like application built with Node.js, Express.js, EJS templating, and Tailwind CSS. This project allows users to browse homes, add to favourites, make bookings, and hosts to manage their listings.

## 🚀 Live Demo

[View Live Demo on Vercel](https://your-vercel-app-url.vercel.app) *(Update with your actual Vercel URL after deployment)*

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Tailwind CSS
- **Data Storage**: JSON files (for demo purposes)
- **Deployment**: Vercel

## ✨ Features

- **User Features**:
  - Browse available homes with search functionality
  - View detailed home information
  - Add/remove homes to/from favourites
  - Make bookings with user details

- **Host Features**:
  - Add new home listings
  - Edit existing home listings
  - Delete home listings
  - View all hosted homes

- **General**:
  - Responsive design with Tailwind CSS
  - Clean, modern UI
  - Error handling and 404 pages

## 📁 Folder Structure

```
airbnbDp/
├── controllers/          # Request handlers
├── data/                 # JSON data files
├── models/               # Data models
├── public/               # Static assets (CSS, images)
├── routes/               # Route definitions
├── utils/                # Utility functions
├── views/                # EJS templates
│   ├── host/             # Host-related views
│   ├── store/            # User-facing views
│   └── partials/         # Reusable components
├── app.js                # Main application file
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vercel.json           # Vercel deployment config
└── README.md
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
```

Copy `.env.example` to `.env` and update the values as needed.

## 🚀 Local Setup

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
   npm start
   ```

   The application will be available at `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server with Tailwind watch
- `npm run dev` - Start development server without Tailwind watch
- `npm run build` - Build Tailwind CSS for production
- `npm run tailwind` - Watch and build Tailwind CSS

## 🚀 Build & Deployment

### Local Build

```bash
npm run build
```

### Vercel Deployment

1. **Connect your GitHub repository to Vercel**
2. **Deploy**: Vercel will automatically detect the Node.js app and use the `vercel.json` configuration
3. **Environment Variables**: Add your environment variables in Vercel's dashboard
4. **Update README**: Replace the placeholder URL with your actual Vercel URL

### Manual Deployment

The app is configured for Vercel with:
- Node.js runtime
- Automatic routing through Express.js
- Static file serving

## 📸 Screenshots

*Add screenshots of your application here*

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, please reach out to [your-email@example.com]
