import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';
import ErrorPages from './Components/Error-Pages/ErrorPages';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Bookdetails from './Components/BookDetails/Bookdetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import Rechart from './Components/Rechart/Rechart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
      path:'booked/:bookId',
      element:<Bookdetails></Bookdetails>,
     
      },
      {
        path:'listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
       path:'reChart',
       element:<Rechart></Rechart>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
