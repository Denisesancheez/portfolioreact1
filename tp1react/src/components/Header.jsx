import React from 'react'
import '../styles/header.css'
const Header = () => {
    let Alumno ="Denise Sanchez "
  return (
    <div>
      <header>
        <h1>Portfolio <br /> {Alumno}</h1>
        <hr />

      </header>
    </div>
  )
}

export default Header