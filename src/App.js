import Navbar from "./components/layout/Navbar/Navbar"
import Fotter from "./components/layout/Fotter"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Notfound from "./pages/Notfound"
function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className=" px-10 md:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
      <Fotter />
    </div>
  )
}
export default App
