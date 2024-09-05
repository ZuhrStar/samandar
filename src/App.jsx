import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Production from "./pages/production"
import Products from "./pages/products"
import Contacts from "./pages/contacts"
import Layout from "./layout"

const routes = [
  {
    path: "/",
    element: <Home></Home>,
    layout: "layout"
  },
  {
    path: "/about",
    element: <About></About>,
    layout: "layout"
  },
  {
    path: "/production",
    element: <Production></Production>,
    layout: "layout"
  },
  {
    path: "/products",
    element: <Products></Products>,
    layout: "layout"
  },
  {
    path: "/contact",
    element: <Contacts></Contacts>,
    layout: "layout"
  }
]

function App() {
  return (
    <>
      <Routes>
        {
          routes?.map((route, index) => (
            <Route key={index} path={route.path} element={route?.layout === "layout" ? <Layout>{route.element}</Layout> : route.element}></Route>
          ))
        }
      </Routes>
    </>
  )
}

export default App