
import { Title, TitleSm } from "@/components/common/Title"

const Artista = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='' /> <br />
            <br />
            <Title title='
Te ayudo a plasmar tu idea en el rincón que desees' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Mi nombre es Mariana Arias ' />
              <p className='desc-p'>Soy una artista visual apasionada por fusionar el arte pop con el realismo en formas orgánicas y tonos pasteles. Me especializo en crear murales y retratos de animales personalizados que reflejan la esencia y personalidad de mis clientes. Mi enfoque se centra en respetar los gustos e intenciones del cliente, adaptando colores y estilos para armonizar con el ambiente. Trabajo del arte desde 2018.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>7+</h1>
                  <h3>Años de experiencia</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Murales pintados</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>72+</h1>
                  <h3>Cuadros realizados</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpeg' alt='Img' className='round' width='100%' height='80%' />
            </div>
          </div>

          
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Artista
