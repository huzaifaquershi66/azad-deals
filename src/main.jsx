import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main App component
import Home from './components/home/Home'; // Home component
 // Optional: A 404 not found component
import './index.css'; // Ensure your CSS is being loaded

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App component will render here
    children: [
      {
        path: '', // Default route that renders when the path is '/'
        element: <Home />, // Render the Home component
      },
   
    ],
  },
]);

const Main = () => {
  return (
    <RouterProvider router={router} /> // Set up the router provider
  );
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main /> {/* Main component ko yahan render karein */}
  </React.StrictMode>
);
