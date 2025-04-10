import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"




function App() {

  return (
    <div className="flex min-h-screen flex-col font-futura-normal ">
      {/* Navbar */}
      <div >
        <Navbar />
      </div>
      {/* Dynamic Contents */}
      <div className="flex-grow">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>

  )
}

export default App
