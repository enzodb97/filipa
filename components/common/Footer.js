import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import {  AiOutlineWhatsApp, AiFillInstagram  } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Filipa' className='logobg' />
              <br />
              <span>
              ¿Queres darle un toque único y personalizado a tus paredes? 
              </span>
              <br />
              <br />
              <Link href={"http://wa.me/+5493876434135"}>+54 9 3876 434135</Link>              
            </div>
            <ul>
              <h3>Links</h3>
              <li>
                <Link href='/'>Inicio</Link>
              </li>
              <li>
                <Link href='/Artista'>Artista</Link>
              </li>
              <li>
                <Link href='/services'>Servicios</Link>
              </li>
              <li>
                <Link href='/showcase'>Proyectos</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contacto</Link>
              </li>
            </ul>
            <ul>
              <h3>Servicios</h3>
              <li>
                <Link href='/services'>Murales de interiores</Link>
              </li>
              <li>
                <Link href='/services'>Retratos de animales</Link>
              </li>
            </ul>
            <ul>
              <h3>Redes sociales</h3>
              <div className='connect'>
                
                
                <li>
                  <Link href='https://www.instagram.com/filipa.painting' target="blank_">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                
               
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 Filipa. Todos los derechos reservados.</span>
            </div>
            
            <div className='connect'>
              <span>Creado por </span>
              
              <span> &lt;&gt;Scriptal&lt;&gt;</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
