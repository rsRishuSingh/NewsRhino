# NewsRhino

Welcome to **NewsRhino**, your go-to application for the latest news updates from around the world. Built with React, NewsRhino offers a sleek, responsive design,using API (newsapi.org) and an intuitive interface to keep you informed and engaged.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Get Api Key](#Get-API-Key)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Contributing](#contributing)
- [Demo](#demo)
- [Website](#website)

## Features
- **Real-Time Updates**: Stay informed with the latest news articles.
- **Category Browsing**: Explore news by categories.
- **Responsive Design**: Enjoy a seamless experience across all devices.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rsRishuSingh/NewsRhino
    ```

2. Navigate to the project directory:
    ```sh
    cd NewsRhino
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm start
    ```

## Get API Key
- Visit [newsapi.org](https://newsapi.org/)
- Login and Copy the API key.
- open the *".env"* file.
- Replace the 'Your_API_Key' to the copied API key.

## Usage
- Open your browser and navigate to `http://localhost:3000`.
- Browse through the latest news articles.
- Use the category filter to find news on specific topics.

## Components

### Navbar
Located in `src/components/Navbar.js`
- Navigate between different sections.

### NewsList
Located in `src/components/NewsList.js`
- Displays a list of news articles.

### NewsItem
Located in `src/components/NewsItem.js`
- Represents an individual news article.

## Pages

### Home
Located in `src/pages/Home.js`
- The main page displaying the latest news.

### Category
Located in `src/pages/Category.js`
- Shows news articles filtered by category.

### NotFound
Located in `src/pages/NotFound.js`
- Displays a 404 message for non-existent routes.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

