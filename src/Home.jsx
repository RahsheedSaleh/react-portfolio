import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';


export default function Home() {
  return (
    <div className='container-fluid bg-dark text-light' id='HomePage' style={{backgroundColor: '#121212'}}>
            <Row className='home-row'>
              <div className='col-lg-6 col-md-6 col-sm-11 col-11'>
                <div className='text-center HomePageTextIntroduction' style={{marginLeft: '50px'}}>
                  <h3 className='fw-bold'>Hello, I am </h3>
                  <h1 className='display-4 fw-bold text-center'>Rahsheed</h1>
                  
                  <p className='lead mt-3 text-center'>Full Stack Web Developer ready to turn ideas into powerful and high-quality web applications.</p>
                  <a className='btn btn-primary mt-4'><Link className='nav-link' to='/Contact'>Hire Me</Link></a>
                  <a className="btn btn-primary mt-4 ms-4"><Link className='nav-link' to='/Projects'>View Projects</Link></a>
                </div>
                
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-12' >
                <img src="/public/Images/1766341273230.jpg" alt="Portfolio" className='img12'/>
              </div>
            
            </Row>
    </div>
  )
}
