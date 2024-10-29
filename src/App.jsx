import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <StarsCanvas />
      <div class=" z-1">
        <div className="relative">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
