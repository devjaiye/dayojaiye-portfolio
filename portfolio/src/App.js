import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro_/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";

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
       </div>
  )
}

export default App