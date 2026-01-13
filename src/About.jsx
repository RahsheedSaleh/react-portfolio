import React from 'react'
import { Row } from 'react-bootstrap'

export default function About() {
  return (
    <div id='AboutPage'
    style={{backgroundColor: '#c1cad8ff', height: '100%'}}>
        <Row>
          <div className='col-lg-6 col-md-6 col-sm-11 col-11'>
            <h2 className='text-center mt-5' >About <span>Me</span></h2>
            <p className='ms-3'>I am a passionate Full Stack Web Developer with a strong focus on building clean, modern, and user-friendly applications. I specialize in React, Node.js, and the MERN Stack, and I love turning ideas into functional digital experiences..</p>
            <p className='ms-3'>With every project, my goal is to write efficient code, create smooth UI/UX, and deliver solutions that truly help users. I enjoy learning new technologies, improving my skills, and taking on challenges that push me forward.</p>
            <h2 className='ms-3 mt-5'>Skills:</h2>
            <ul className='ms-2'>
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React.js</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MongoDB</li>
              <li><strong>Tools:</strong> Git, GitHub, REST APIs</li>
            </ul>

          </div>

          <div className='col-lg-6 col-md-6 col-sm-11 col-11'>
            <img src="public\Images\New Image.jpg" style={{width: '85%'}} alt="About Me" className='img-fluid aboutImage ms-4'/>
          </div>
        </Row>
        
    
    </div>
  )
}
