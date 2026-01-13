import React from 'react';
import { Row } from 'react-bootstrap';
import { useState } from 'react';

export default function TicTacToeGame() {
  let [Istrue, setIstrue] = useState(false);
      return (
        <div className='text-center' id='ProjectsPage' style={{backgroundColor: '#c1cad8ff'}}>
            <Row>
              <div className="col-lg-6 col-md-10 col-sm-11 col-11 mx-auto pt-3">
                
                <div className="card border-2 black shadow-lg shadow-dark mb-5">
                  <img src="public/TIC TAC TOE GAME Images/Main View.png" onClick={() => setIstrue(true)} className="card-img-top"  alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Tic Tac Toe Game - Interactive Two Player Game</h5>
                    <p className="card-text">A classic two-player Tic Tac Toe game featuring win detection, draw handling, and a clean interactive interface.</p>
                    <a href="https://rahsheedsaleh.github.io/Tic-Tac-Toe-Game/" className="btn btn-primary me-2">View Demo</a>
                    <a href="https://github.com/RahsheedSaleh/Tic-Tac-Toe-Game.git" className="btn btn-primary">View Code</a>
                  </div>
                </div>
                
              </div>
    
    
    
              {Istrue ?
              <div className="modal d-block bg-dark bg-opacity-75" id="sliderModal" tabindex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
    
          <div className="modal-header">
            <h5 className="modal-title">Tic Tac Toe Game - Interactive Two Player Game</h5>
            <button type="button" className="btn-close" onClick={() => setIstrue(false)} data-bs-dismiss="modal"></button>
          </div>
    
          <div className="modal-body">
              
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    
              <div className="carousel-inner">
    
                <div className="carousel-item active">
                  <img src="public/TIC TAC TOE GAME Images/Main View.png" className="d-block w-100"/>
                </div>
    
                <div className="carousel-item">
                  <img src="public/TIC TAC TOE GAME Images/Game Playing.png" className="d-block w-100"/>
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
