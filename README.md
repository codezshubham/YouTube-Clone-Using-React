# YouTube Clone Using React 🚀
[![React](https://img.shields.io/badge/React-v18.3.1-blue)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://www.javascript.com/)

This repository contains a YouTube clone application built with React and powered by the YouTube Data API. It helps developers learn how to build a dynamic, feature-rich web application using React, RESTful APIs, and modern JavaScript practices.



## Table of Contents 📑
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)



## Description 📝
This YouTube clone is built using React, leveraging the YouTube Data API to fetch and display video content. It includes features like dynamic search functionality, video playback, and a responsive design. This project is an excellent resource for learning React development, API integration, and building single-page applications (SPAs).



## Features ✨
- **React-based Frontend**: Uses React components, hooks, and state management for a responsive and interactive user interface.
- **YouTube Data API Integration**: Fetches and displays data from the YouTube API, including videos, search results, and channel details.
- **Dynamic Search Functionality**: Implements a search bar that allows users to search for videos.
- **Video Playback**: Supports video playback with embedded YouTube players.
- **Responsive Design**: Adapts seamlessly to different screen sizes and devices.
- **Modern JavaScript**: Utilizes ES6+ features, including async/await for API calls.
- **Category-based video listing:** Ability to list videos based on the selected category. Implemented in `src/Components/Sidebar/Sidebar.jsx` and `src/Pages/Home/Home.jsx`.
- **Video Details Page**: Displays video information like title, view count, like count, channel information and comments. Implemented in `src/Pages/Video/Video.jsx` and `src/Components/PlayVideo/PlayVideo.jsx`



## Tech Stack 💻
- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: For handling navigation and routing.
- **Moment**: For formatting dates and times.
- **JavaScript**: Primary programming language.
- **CSS**: For styling components and layouts.



## Installation ⚙️
Follow these steps to install and run the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/codezshubham/YouTube-Clone-Using-React.git
   cd YouTube-Clone-Using-React
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```



## Usage 🚀
1. **Start the application:**

   ```bash
   npm start
   ```

2. **Open your browser and navigate to `http://localhost:3000`** to view the application.

This project replicates a simplified version of YouTube. You can browse videos, view details, and see recommended content.

To use the application, you'll need to obtain your own YouTube Data API key and replace the existing placeholder in `src/Data.js`:

```javascript
export const API_KEY = 'YOUR_YOUTUBE_API_KEY';
```



## Project Structure 📂
```
YouTube-Clone-Using-React/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Components/
│   │   ├── Feed/
│   │   │   ├── Feed.css
│   │   │   └── Feed.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── PlayVideo/
│   │   │   ├── PlayVideo.css
│   │   │   └── PlayVideo.jsx
│   │   ├── Recommended/
│   │   │   ├── Recommended.css
│   │   │   └── Recommended.jsx
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.css
│   │   │   └── Sidebar.jsx
│   ├── Pages/
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   ├── Video/
│   │   │   ├── Video.css
│   │   │   └── Video.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── Data.js
│   ├── assets/
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── package.json
├── README.md
```

- `public/`: Contains static assets like `index.html` and `manifest.json`.
- `src/`: Contains the main application code.
  - `Components/`: Reusable React components.
    - `Feed/`: Displays the list of videos.
    - `Navbar/`: The navigation bar at the top.
    - `PlayVideo/`: Component for playing the selected video.
    - `Recommended/`: Displays recommended videos.
    - `Sidebar/`: The sidebar for navigation.
  - `Pages/`: Contains page-level components.
    - `Home/`: The home page displaying the video feed.
    - `Video/`: The video playback page.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.
  - `Data.js`: Contains the API Key and value convertor function.
  - `assets/`: Contains images and video assets.
- `package.json`: Lists project dependencies and scripts.
- `README.md`: Project documentation.



## Contributing 🤝
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, concise messages.
4. Submit a pull request.



## License 📜
This project has no license.



## Important Links 🔗
- **Repository**: [https://github.com/codezshubham/YouTube-Clone-Using-React](https://github.com/codezshubham/YouTube-Clone-Using-React)



## Footer <footer>
- **Repository**: [YouTube-Clone-Using-React](https://github.com/codezshubham/YouTube-Clone-Using-React)
- **Author**: codezshubham
- **Contact**: (If available, insert contact details)

⭐️ Fork this repository, give a star, open issues if you find any or want new features, and contribute! ⭐️

---

<p align="center">This README generated by <a href="https://www.readmecodegen.com/">ReadmeCodeGen</a>.</p>
