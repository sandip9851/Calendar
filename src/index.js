import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Details from './component/details';
import DataProvider from './store/context'; 

// Define the router
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/details", element: <Details /> },
  

],
{
  basename: "/" 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider> 
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </DataProvider>
);
