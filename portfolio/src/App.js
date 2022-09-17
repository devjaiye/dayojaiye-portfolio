import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro_/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";


const App=() => {
  return(
     <div className="App"> 
       {/* place your componets here */}
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Works/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       </div>
  )
}

export default App