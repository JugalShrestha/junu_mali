import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import Artpage from "./pages/Artpage.jsx"
import DigitalArtGallery from "./pages/DigitalArtGallery.jsx"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/arts" element={<Artpage/>}/>
      <Route path="/digital_gallery" element={<DigitalArtGallery/>}/>
    </Routes>
    </>
  )
}

export default App