import React from 'react';
import { Row } from 'react-bootstrap';

export default function Contact() {
  return (
    <div  id='ContactPage' style={{backgroundColor: '#c1cad8ff', height: '100vh'}}>
        
          <section className="contact-section py-5" id="contact">
              <div className="container">
                <h2 className="text-center mb-3">
                  Contact <span className="text-success">Me</span>
                </h2>

                <p className="text-center mt-5">
                  I'm available for freelance work and open to new opportunities. 
                </p>
                <p className="text-center">
                  Feel free to reach out using the below email/phone.
                </p>
                <p className="text-center text-muted mb-4">
                  I usually respond within 24 hours.
                </p>
                <Row className='d-flex justify-content-center align-items-center'>
                <div className="col-lg-4 col-md-6 col-sm-8 col-10 mt-4 mb-4">
                    <p><img src="/images/email.png" style={{height:"25px", width:"25px"}} alt="" />Email: khanrahsheed@gmail.com</p>
                    <p><img src="/images/smartphone.png" style={{height:"25px", width:"25px"}} alt="" />Phone / WhatsApp: +92 311-9301500</p>
                    <p><img src="/images/telegram.png" style={{height:"25px", width:"25px"}} alt="" />Telegram: +92 311-9301500</p>
                    <p><img src="/images/location.png" style={{height:"25px", width:"25px"}} alt="" />Location: Pakistan</p>
                </div>
                </Row>
                
              </div>
          </section>
       
    </div>
  )
}
