import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Login'
import { Browse } from './Browse'

import { useDispatch } from 'react-redux'

export const Body = () => {
  const dispatch = useDispatch();
  
  const route = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path :"/browse",
        element: <Browse/>
    }
  ])

  return (
    <div>
        <RouterProvider router={route} />
    </div>
    
  )
}
