# 🛒 WilkerStore

> A responsive e-commerce web app built with React. Browse products by category, view detailed product pages, and manage your shopping cart — all without a backend.

🌐 **[Live Demo →](https://wilkerstore.netlify.app)**

---

## 📸 Screenshots

![WilkerStore Homepage](./docs/screenshots/home.png)
![Product Detail](./docs/screenshots/product-detail.png)

---

## ✨ Features

- 🗂️ **Category navigation** — Filter products instantly from the navbar
- 🛍️ **Product catalog** — Browse items with names, images and prices
- 🔎 **Product detail page** — Individual page per product using React Router
- 🛒 **Shopping cart** — Add, remove and update quantities with localStorage persistence
- 📱 **Fully responsive** — Optimized for desktop and mobile

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Routing | React Router v6 |
| Persistence | localStorage |
| Styling | CSS (responsive) |
| Deploy | Netlify |

> ⚡ No external API — product data is defined locally, keeping the app fast and self-contained.

---

## ⚙️ Installation

### Prerequisites

- Node.js >= 18.0.0
- npm

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/tu-usuario/wilkerstore.git
cd wilkerstore
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open in your browser**

```
http://localhost:5173
```

---

## 📁 Project Structure

```
wilkerstore/
├── src/
│   ├── components/       # Reusable components (Navbar, Cart, ProductCard...)
│   ├── pages/            # Main views (Home, ProductDetail, CartPage)
│   ├── data/             # Local product and category data
│   ├── hooks/            # Custom hooks (useCart, useProducts...)
│   ├── App.jsx           # Root component + route configuration
│   └── main.jsx          # Entry point
├── public/
└── README.md
```

---

## 🚀 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/tu-usuario">Wilker Vivas</a> ·
  If you like this project, consider leaving a ⭐ on GitHub!
</p>
