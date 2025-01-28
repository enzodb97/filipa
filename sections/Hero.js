import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Filipa' className='logobg' />
          <h1 className='hero-title'>Eleva tus espacios con arte</h1>

          <div className='sub-heading flex'>
            <TitleSm title='MURALES ' /> <span> . </span>
            <TitleSm title='CUADROS ' /> <span> . </span>
            <TitleSm title='ARTE ' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Sobre mi'  />
            <p className="$xl-5">Creando espacios en arte.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Mi Blog' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
