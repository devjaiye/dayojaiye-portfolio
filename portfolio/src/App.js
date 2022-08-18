import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro_/Intro";
import Services from "./Components/Services/Services";

const App=() => {
  return(
     <div className="App"> 
       {/* place your componets here */}
       <Navbar/>
       <Intro/>
       <Services/>
       
       </div>
  )
}

export default App