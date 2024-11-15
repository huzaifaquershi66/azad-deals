import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main App component
import Home from './components/home/Home'; // Home component
import Listing from './components/Listingpage'; // Listing component
import ScrollToTop from './components/Scroolontop'; // Import the ScrollToTop component
import './index.css'; // Ensure your CSS is being loaded
import Placeadd from './components/Placeadd';
import Postdetail from './components/Postdetail';

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
      {
        path: '/listing', // Route for the Listing component
        element: <Listing />, // Render the Listing component
      },
      {
        path: '/placeadd', // Route for the Listing component
        element: <Placeadd/>, // Render the Listing component
      },
      {
        path: '/postdetail', // Route for the Listing component
        element: <Postdetail/>, // Render the Listing component
      },
    ],
  },
]);

const Main = () => {
  return (
    <RouterProvider router={router}>
      <ScrollToTop /> {/* Make sure ScrollToTop is included here */}
      <App /> {/* Render the App component here if needed */}
    </RouterProvider>
  );
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main /> {/* Main component ko yahan render karein */}
  </React.StrictMode>
);
