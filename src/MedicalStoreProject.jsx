import React from 'react';
import { Row } from 'react-bootstrap';
import { useState } from 'react';

export default function MedicalStoreProject() {
  let [Istrue, setIstrue] = useState(false);
    return (
      <div className='text-center' id='ProjectsPage' style={{backgroundColor: '#c1cad8ff'}}>
          <Row>
            <div className="col-lg-6 col-md-10 col-sm-11 col-11 mx-auto pt-3">
              <h2>My Projects</h2>
              <p>A collection of my work showcasing frontend and full stack projects.</p>
              <div className="card border-2 black shadow-lg shadow-dark mb-5">
                <img src="/projectimages/view-modal.png" onClick={() => setIstrue(true)} className="card-img-top"  alt="" />
                <div className="card-body">
                  <h5 className="card-title">Medical Store Management System (Full-Stack CRUD App)</h5>
                  <p className="card-text">Medical Store Management System is a full-stack web application designed to manage medical store inventory efficiently. The system allows users to add, view, update, and delete medicines using a clean and user-friendly interface without page reloads.</p>
                  
                  <a href="https://github.com/RahsheedSaleh/medical-store-app.git" className="btn btn-primary">View Code</a>
                </div>
              </div>
              
            </div>
  
  
  
            {Istrue ?
            <div className="modal d-block bg-dark bg-opacity-75" id="sliderModal" tabindex="-1">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
  
        <div className="modal-header">
          <h5 className="modal-title">Medical Store Management System</h5>
          <button type="button" className="btn-close" onClick={() => setIstrue(false)} data-bs-dismiss="modal"></button>
        </div>
  
        <div className="modal-body">
  
          
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  
            <div className="carousel-inner">
  
              <div className="carousel-item active">
                <img src="/projectimages/view-modal.png" className="d-block w-100"/>
              </div>
  
              <div className="carousel-item">
                <img src="/projectimages/add-modal.png" className="d-block w-100"/>
              </div>
  
              <div className="carousel-item">
                <img src="/projectimages/veiw-detail.png" className="d-block w-100"/>
              </div>
  
              <div className="carousel-item">
                <img src="/projectimages/update-modal.png" className="d-block w-100"/>
              </div>
  
              <div clasNames="carousel-item">
                <img src="/projectimages/delete-modal.png" className="d-block w-100"/>
              </div>
  
            </div>
  
           
            <button className="carousel-control-prev" style={{filter: 'invert(1)'}} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
  
            <button className="carousel-control-next" style={{filter: 'invert(1)'}} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
  
          </div>
  
        </div>
  
      </div>
    </div>
  </div>
            : null}
  
  
  
  
          </Row>
      </div>
    )
  
}
