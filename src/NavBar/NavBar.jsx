import React from 'react';

const NavBar = () => {
  window.addEventListener("scroll",function(){//scroll
    var header=this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
  })
    return (
        <div className='bab'>
             <div className="conteiner">
       
       <div className="btn-menu">
         <label htmlFor="btn-menu" className='icon-menu'><i className="fa-solid fa-bars"></i></label>
       </div>
       <div className="logo">
         <a href="">E</a>
       </div>
       <nav className='menu'>
        
            <a href="">inicio</a>
            <a href="">Habilidades</a>
            <a href="">Proyectos</a>
              <a href="">Contacto</a>  
       </nav>
     </div>
     <input type="checkbox" id='btn-menu'/>
     <div className="container-menu">
      <div className="cont-menu">
     <nav>
            <a href="#">inicio</a>
          <a href="#">Habilidades</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
          </nav>
          <label htmlFor="btn-menu" className='icon-equis'><i className="fa-solid fa-xmark"></i></label>
      </div>  
     </div>
        </div>
    );
};

export default NavBar;