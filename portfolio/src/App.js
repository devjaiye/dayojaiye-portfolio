import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro_/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";

const App=() => {
  return(
     <div className="App"> 
       {/* place your componets here */}
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Works/>
       </div>
  )
}

export default App