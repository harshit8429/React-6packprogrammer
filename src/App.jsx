// import { Fragment } from "react";
// import MyHeading from "./Components/MyHeading";
import Header from './Components/Header';
// const a="200fjvkz";
import "./styles/App.css";
import "./styles/Header.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product';


function App()
  {
   
  return <Router>
    <Header/>
  <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/contact" element={<Contact/>}/>
 <Route path="/product/:id" element={<Product/>}/>
 <Route path="*" element={<div>Page not found</div>}/>

  </Routes>
  
  </Router>
 
  
  }
export default App;