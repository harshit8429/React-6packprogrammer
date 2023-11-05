// import { Fragment } from "react";
import MyHeading from "./Components/MyHeading";
import Header from './Components/Header';
// const a="200fjvkz";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';



function App()
  {
   <Header/>
  return <Router>
  <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/contact" element={<Contact/>}/>

  </Routes>
  
  </Router>
 
  
  }
export default App;