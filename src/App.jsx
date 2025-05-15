import {BrowserRouter, Routes, Route} from "react-router-dom"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } 

  from "react-router-dom"
import Home from "./pages/home"
import Layout from "./pages/layout"
import Contact from './pages/contact'
import About from "./pages/about"
import Adventages from "./pages/adventages"
import Freeclub from "./pages/freeclub"
import Notfound from "./pages/pageNotFound"
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="freeclub" element={<Freeclub/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="adventages" element={<Adventages/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
