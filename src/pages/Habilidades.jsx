import React from 'react';
import redux from '../img/redux-icon.png'

const Habilidades = () => {
    return (
        <div>
            
                <div  className='havilidades'>
                    <div data-aos="fade-down" className="cajah1"><h1>HABILIDADES</h1></div>
                    
                    <div data-aos="zoom-in-up" className="carrusel">
                        <div className="carrusel-items">
                            <div className="carrusel-item">
                            <i className="fa-brands fa-js"></i>
                            </div>
                            <div className="carrusel-item">
                                
                            <i className="fa-brands fa-react"></i>

                            </div>
                            <div className="carrusel-item">
                            <i className="fa-brands fa-css3 "></i>
                           
                            </div>
                            <div className="carrusel-item">
                            <i className="fa-brands fa-html5"></i>
                            
                            </div>
                            <div className="carrusel-item">
                            <i className="fa-brands fa-git-alt"></i>
                            
                            </div>
                            <div className="img-redux" ><img src={redux} alt="" /></div>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Habilidades;