import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './NavBar/NavBar'
import { Contacto, Habilidades, Inicio, Proyectos } from './pages'

function App() {
  
window.addEventListener("scroll",function(){//scroll
    var header=this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
  })
  return (
    <div className="App">
      <header data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
      <div className='bab'>
             <div className="conteiner">
       
       <div className="btn-menu">
         <label htmlFor="btn-menu" className='icon-menu'><i className="fa-solid fa-bars"></i></label>
       </div>
       <div className="logo">
         <a href="">E</a>
       </div>
       <nav className='menu'>
        
            <a href="#section-inicio">inicio</a>
            <a href="#section-habilidades">Habilidades</a>
            <a href="#section-proyectos">Proyectos</a>
              <a href="#section-contacto">Contacto</a>  
       </nav>
     </div>
     <input type="checkbox" id='btn-menu'/>
     <div className="container-menu">
      <div className="cont-menu">
     <nav>
            <a href="#section-inicio">inicio</a>
          <a href="#section-habilidades">Habilidades</a>
          <a href="#section-proyectos">Proyectos</a>
          <a href="#section-contacto">Contacto</a>
          </nav>
          <label htmlFor="btn-menu" className='icon-equis'><i className="fa-solid fa-xmark"></i></label>
      </div>  
     </div>
        </div>
      </header>
    <section id='section-inicio' className='inicio'><Inicio/></section>
    <section id='section-habilidades'><Habilidades/></section>
    <section id='section-proyectos'><Proyectos/></section>
    <section id='section-contacto'><Contacto/></section>
    </div>
  )
}

export default App
