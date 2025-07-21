import { BrowserRouter } from "react-router-dom"
import { Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <StarsCanvas />
      <div className="z-1 overflow-hidden">
        <div className="relative">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Experience />
          <Tech />
          <Works />

          <div>
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
