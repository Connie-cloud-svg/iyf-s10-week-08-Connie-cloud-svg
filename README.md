# Week 8: React Fundamentals

## Author
- **Name:** Connie
- **GitHub:** [@Connie-cloud-svg](https://github.com/Connie-cloud-svg)
- **Date:** May 5, 2026

## Project Description
AlumniHub is a React-based community platform where users can create posts, like and delete them, and browse content through a search and filter feature. Built as the Week 8 deliverable for IYF Weekend Academy Season 10, this project covers the core fundamentals of React including components, props, state, events, and controlled forms.

## Technologies Used
- React 18
- Vite
- JavaScript (ES6+)
- CSS3 (custom properties / CSS variables)
- JSX

## Features
- Create new posts with a title, author name, and content
- Like posts — like count updates in real time
- Delete posts from the list
- Search and filter posts by title, content, or author
- Sidebar showing popular posts ranked by likes and category tags
- Login/logout toggle with conditional greeting by time of day
- Dark theme with pink accents
- Lesson exercise demos — Counter, Toggle, and Event Handler patterns built in

## How to Run
1. Clone this repository
   ```bash
   git clone https://github.com/Connie-cloud-svg/iyf-s10-week-08-Connie-cloud-svg.git
   ```
2. Navigate into the project folder
   ```bash
   cd iyf-s10-week-08-Connie-cloud-svg
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173`

## Lessons Learned
- How JSX works — writing HTML-like syntax inside JavaScript and using `{}` to embed expressions
- The difference between props (data passed in from a parent) and state (data managed inside a component)
- How `useState` works and why you never mutate state directly — always create a new array or object
- Lifting state up — keeping shared data in the parent component and passing it down via props and callback functions
- How controlled forms work — every input is tied to state via `value` and `onChange`
- The importance of the `key` prop when rendering lists with `.map()`
- How conditional rendering with `&&` and ternary operators keeps JSX clean

## Challenges Faced
- **Syntax error in the like handler** — wrote `{ ...post, post.likes + 1 }` instead of `{ ...post, likes: post.likes + 1 }`. Learned that spread syntax still requires proper key-value pairs.
- **Blank white screen on load** — caused by a corrupted `App.jsx` from a copy-paste issue. Fixed by replacing the whole file with a clean version and checking the console for the exact error.
- **Buttons invisible on dark theme** — the secondary button style used hardcoded light grey which disappeared against the dark background. Fixed by switching to CSS variables so all colours adapt to the theme automatically.

## Screenshots (optional)
![CommunityHub Screenshot](path/to/screenshot.png)

## Live Demo (if deployed)
[View Live Demo](https://your-deployed-url.com)
