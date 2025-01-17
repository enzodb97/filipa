import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import {AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACTO' /> <br />
            <br />
            <Title title="Contactame, estoy esperando tu propuesta! " className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FaWhatsapp size={30} className='icons' />
                  <h3>+54 9 3876 434135</h3>
                  <span>Horarios de atención: Lun - Vie 9:00 - 20:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Rosario</h3>
                  <span>Rosario, Santa Fe</span>
                </div>
                
              </div>
              <ul>
               
                
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Enviame un mail' />
              <p className='desc-p'>Dudas? Ponte en contacto conmigo. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Nombre</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Asunto</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Telefono</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>Mensaje*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
