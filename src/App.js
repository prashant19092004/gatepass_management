import React from 'react';
import Login from './components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import SurveyForm from './components/SurveyForm'
import Admin from './components/Admin/Admin';
import Fine from './components/Fine';
import Admission from './components/Admission';
import Event from './components/Event';
import Home from './components/Home/Home';
import Adminlogin from './components/Home/Adminlogin';
import Userlogin from './components/Home/Userlogin';
import Student from './components/Student/Student';
import Adminsignup from './components/Adminsignup';

function App() {

    const router= createBrowserRouter([
        {
          path: "/",
          element: <Home />,
          children:[
            {
              path: "/adminlogin",
              element: <Adminlogin />
            },
            {
              path: "/",
              element: <Userlogin />
            },
          ]
        },
        {
          path:"/admin",
          element: <Admin />,
          children:[
            {
              path:'/admin/',
              element:<Fine />
            },
            {
              path:'/admin/published',
              element:<Admission />
            },
            {
              path:'/admin/profile',
              element:<Event />
            }
          ]
        },
        {
          path:"/student",
          element:<Student />
        },
        {
          path: "/tempregister",
          element:<Signup />
        },
        {
          path: "/adminsignup",
          element:<Adminsignup />
        }

    ]);





  return (
    <RouterProvider router={router} />
  );
}

export default App;
