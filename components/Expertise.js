import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"


const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Servicios' />
            <p>Servicios que brindo desde pintura en murales hasta cuadros de tus mascotas.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card path="/services" data={item} key={item.id} caption='VER' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
