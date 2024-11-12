import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/header/home/home.jsx'
import Annapurna from './components/header/annapurna/annapurna.jsx'
import Layout from './layout.jsx'
import About from './components/header/about/about.jsx'
import Jacks from './components/header/jacks/jacks.jsx'
import Mba from './components/header/mba/mba.jsx'
import Privacy from './components/header/privacy/privacy.jsx'
import Terms from './components/header/terms/terms.jsx'
import Login from './components/header/login/login.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
     
      {
        path:"about",
        element:<About/>
      },
      {
        path:"annapurna",
        element:<Annapurna/>
      },
      {
        path:"jacks",
        element:<Jacks/>
      },
      {
        path:"mba",
        element:<Mba/>
      },
      {
        path:"privacy",
        element:<Privacy/>
      },
      {
        path:"terms",
        element:<Terms/>
      },
      {
        path:"login",
        element:<Login/>
      }
      
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
