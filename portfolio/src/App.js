import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro_/Intro";

const App=() => {
  return(
     <div className="App"> 
       {/* place your componets here */}
       <Navbar/>
       <Intro/>
       </div>
  )
}

export default App