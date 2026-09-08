# 🏨 Stayora — Accommodation Booking Platform

> A full-stack hotel and accommodation booking web platform featuring dynamic search filters, sub-100ms query latency, and responsive guest reviews.

[![Live Demo](https://img.shields.io/badge/Demo-Live_on_Vercel-22c55e.svg)](https://stayora-gn3uxnvdz-amitrajput111s-projects.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Amitrajput111%2Fstayora-blue.svg)](https://github.com/Amitrajput111/stayora)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Key Features
- **Real-Time Property Discovery:** Multi-criteria search (location, pricing, amenities, room types).
- **Sub-100ms Query Response:** Built with compound database indexing in MongoDB to eliminate table scans on large datasets.
- **Responsive & Mobile-First UI:** Tailored layout for smartphones, tablets, and desktop displays.
- **Modular RESTful Architecture:** Express.js API contracts handling inventory, reservations, and reviews.

---

## 🏗️ System Architecture

```
[ React Client Application ]
            │
       HTTP / JSON
            ▼
[ Express.js REST API Server ]
   ├── Authentication & Validation Layer
   ├── Property & Booking Controllers
   └── Review & Rating Service
            │
       Mongoose ODM
            ▼
[ MongoDB Database (Compound Indexed) ]
```

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Component Architecture
- **Backend:** Node.js, Express.js, RESTful APIs
- **Database:** MongoDB, Mongoose ODM
- **Deployment:** Vercel

---

## ⚡ Quick Start (Local Setup)

```bash
# 1. Clone the repository
git clone https://github.com/Amitrajput111/stayora.git
cd stayora

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file and add:
# MONGODB_URI=your_mongodb_connection_string
# PORT=5000

# 4. Start development server
npm run dev
```

---

## 👨‍💻 Author
**Amit Rajput**  
- Portfolio: [amit-portfolio-jet.vercel.app](https://amit-portfolio-jet.vercel.app/)
- LinkedIn: [linkedin.com/in/amitrajput111](https://linkedin.com/in/amitrajput111)
- GitHub: [github.com/Amitrajput111](https://github.com/Amitrajput111)
