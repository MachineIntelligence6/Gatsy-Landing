import React, { Suspense } from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const Dashboard = React.lazy(() => import("./pages/Dashboard"));





const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center">
        </div>
      }>
        <Dashboard />
      </Suspense>
    )
  },
  

])


function App() {



  return (
    <>
    <div>
    <RouterProvider router={router} />
    </div>
    </>
  )
}





export default App



