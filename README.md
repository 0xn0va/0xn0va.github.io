# Portfolio

## App description:

## Dependency installation

In this project, I install several dependencies to build a robust and responsive React application. Below are the installed dependencies along with a brief explanation of each.

### Installation commands

To create a new React application with Vite, run the following command:

`npm create vite@latest ./ -- --template react`

After creating the project, install the following dependencies:

`npm install -D tailwindcss`

`npx tailwindcss init`

`npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`

### Dependencies description:

`--legacy-peer-deps`- I use this flag to resolve compatibility issues with older versions of React required by react-tilt;

`@react-three/fiber` - create three.js code in react;

`@react-three/drei maath` - need utility functions to do geometry;

`react-tilt` - provide cool inclination animations;

`react-vertical-timeline-component` - build a vertical timeline;

`@emailjs/browser` - library that allows to send emails directly from the application using the EmailJS API;

`framer-motion` - A powerful animation library for React that lets create fluid animations and transitions easily and intuitively;

`react-router-dom` - for routing.

### Folders description:

`assests` - use all the icons and images for the app;

`components` - components to render inside `App.jsx`;

`index.css` - for gradients + box-shadows and tailwind imports;

`style.js` - Tailwind utility styles;

`utils` - create `motion.js` for framer-motions animations;

`constants` - `index.js` - all the content that i gonna have in my app;

`hoc` - High Order Component styles;

`tailwind.config.js` - contain primaray, secondary and terciary colors + box-shadows + screens + animations and background-image.
