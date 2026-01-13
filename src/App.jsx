import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';







function App() {
  

  return (
    <>
    <Router>
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      
    </Router>
      
    </>

  
  )
}

export default App
