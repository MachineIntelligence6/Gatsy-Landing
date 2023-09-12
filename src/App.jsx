import React, { Suspense } from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const Dashboard = React.lazy(() => import("./pages/Dashboard"));





const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Dashboard />
      </Suspense>
    )
  },


])


function App() {



  return (
    <RouterProvider router={router} />
  )
}





export default App



