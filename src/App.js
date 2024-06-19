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
import Userprofile from './components/Student/student_component/Userprofile';
import Userhistory from './components/Student/student_component/Userhistory';
import Userrequest from './components/Student/student_component/Userrequest';
import Regularpass from './components/Student/student_component/Regularpass';
import Homepass from './components/Student/student_component/Homepass';
import Requests from './components/Admin/admincomponents/Requests';
import Accepted_requests from './components/Admin/admincomponents/Accepted_requests';
import Rejected_requests from './components/Admin/admincomponents/Rejected_requests';
import Addusers from './components/Admin/admincomponents/Addusers';

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
          element:<Admin />,
          children: [
            {
              path: "/admin/",
              element: <Requests />
            },
            {
              path: "/admin/accepted_requests",
              element: <Accepted_requests />
            },
            {
              path: "/admin/rejected_requests",
              element: <Rejected_requests />
            },
            {
              path: "/admin/add_users",
              element: <Addusers />
            }
          ]
        },
        {
          path:"/student",
          element:<Student />,
          children: [
            {
              path: "/student/",
              element: <Userprofile />
            },
            {
              path: "/student/history",
              element: <Userhistory />
            },
            {
              path: "/student/request",
              element: <Userrequest />,
              children: [
                {
                  path: "/student/request/regularpass",
                  element: <Regularpass />
                },
                {
                  path: "/student/request/homepass",
                  element: <Homepass />
                }
              ]
            }
          ]
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
