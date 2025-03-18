# 🎥 CiniWorld365

Welcome to **CiniWorld365**, an engaging and interactive movie web application! This project provides a seamless user experience for exploring movies with a visually appealing interface, fetching data from The Movie Database (TMDB) API, and offering a variety of features for movie enthusiasts.

## 🌟 Live Demo

Explore the project here: [CiniWorld365](https://cineworld365.web.app/)

---

## 📖 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Learnings](#learnings)
- [Contributing](#contributing)
- [License](#license)

---

## 🎬 Features

- **Searchable Movie Database**: Users can search for movies by name and get detailed information.
- **Dynamic Routing**: Smooth transitions between different views using React Router.
- **Visually Appealing Layout**: Tailwind CSS and Bootstrap were used for modern, responsive, and attractive UI.
- **Reusable Components**: Movie cards, carousels, buttons, and more for an efficient and scalable design.
- **Error Handling**: Robust error handling for API requests to ensure a seamless experience.
- **Animations and Transitions**: Improved user interactions with eye-catching animations.
- **Detailed Movie Pages**: View extensive details about selected movies, including cast, reviews, and trailers.

---

## 🛠️ Technologies Used

- **Frontend**: React.js, JavaScript, Tailwind CSS, Bootstrap, Axios
- **API**: The Movie Database (TMDB) API
- **Routing**: React Router

---

## 🚀 Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GantedaAravind/CiniWorld365.git
   cd CiniWorld365
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory** and add your TMDB API key:

   ```bash
   VITE_AUTHORIZATION=your-authorization-key
   VITE_BASE_URL=your-movie-api-base-url
   ```

````

4. **Run the application:**

   ```bash
   npm run dev
````

5. The app will be accessible at `http://localhost:5173`.

---

## 🌐 API Integration

CiniWorld365 uses the **TMDB API** to fetch movie data. Make sure to sign up at [The Movie Database](https://www.themoviedb.org/) and get your API key to use in this project.

**API Operations:**

- Fetching popular, trending, and top-rated movies.
- Retrieving movie details, including descriptions, trailers, and cast.
- Searching for movies by keyword.

---

## 📂 Project Structure

```
CiniWorld365/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── Navbar.js
│   │   ├── Carousel.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── MovieDetails.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── tailwind.css
│
├── .env
├── package.json
└── README.md
```

---

## 📚 Learnings

Working on CiniWorld365 offered significant insights and growth:

- **Mastered React components**: Efficient use of props, hooks (`useState`, `useEffect`), and lifecycle management.
- **Effective state management**: Prop drilling and lifting state up for optimal performance.
- **API integration and asynchronous handling**: Used Axios for seamless data fetching.
- **UI/UX design**: Developed skills in responsive and appealing design using Tailwind CSS and Bootstrap.
- **Error handling**: Implemented strategies for handling API errors and unexpected issues gracefully.

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions and improvements.

---

---

### 🙌 Connect and Explore

We'd love to hear your thoughts on CiniWorld365! Feel free to connect, share feedback, or contribute to the project.

Enjoy exploring the world of movies!
