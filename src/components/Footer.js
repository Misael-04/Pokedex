import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
          <section className='version'>
            <h5 >
              v1.0
            </h5>
          </section>
          <section className='datos_autor'>
            <h5>Desarrollado por M. Aguilar</h5>
            <p>Mas proyectos en<a href='https://github.com/Misael-04?tab=repositories'><img src='/GitHub-Mark-Light-32px.png' alt='GitHub'/> </a></p>
          </section>
        </footer>
    )
}

export default Footer
