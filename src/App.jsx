import { BrowserRouter, Route, Routes, } from "react-router-dom"
import "./css/style.css"
import Page from "./view/home/page"
import NoteFound from "./view/NoteFound"
import About from "./view/about/about"
import Contact from "./view/contact/contact"
import Detail from "./view/home/detail"


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Page/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        


        <Route path="/*" element={<NoteFound/>} />
        
         
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App

