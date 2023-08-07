import './App.css'
import {RouterProvider} from "react-router-dom";
import {ROUTER} from "./routes/routes.tsx";


function App() {
  return (
      <RouterProvider router={ROUTER} />
  )
}

export default App
