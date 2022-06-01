import Navbar from "./components/Navbar/Navbar"
import Fotter from "./components/Fotter"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className=" px-10 md:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Fotter />
    </div>
  )
}
export default App
