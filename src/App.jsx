import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-[-1] bg-primary">
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
          <StarsCanvas />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
