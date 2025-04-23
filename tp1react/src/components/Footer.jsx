import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css'

const Footer = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <footer>
      <a href="https://www.facebook.com/denisesaanchez/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FaFacebook size={24} color="#4267B2" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FaTwitter size={24} color="#1DA1F2" />
      </a>
      <a href="https://www.instagram.com/denisesancheez/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FaInstagram size={24} color="#C13584" />

      </a>
      <p>© 2023 Denise Sanchez. Todos los derechos reservados.</p>
      </footer>
 
    </div>
  )
}

export default Footer

