import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Proyectos' /> <br />
            <br />
            <Title title='Trabajemos juntos para elevar tu ambiente y llevarlo a otro nivel' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card path="/showcase" data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <br></br>
        </div>
      </section>
    </>
  )
}

export default ShowCase
