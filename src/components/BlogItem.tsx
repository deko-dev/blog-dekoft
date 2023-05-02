import './styles/BlogItem.scss'
import { NavLink } from "react-router-dom"
import image_blog1 from "../assets/img/blog1.webp";

export const BlogItem = () => {
  return (
    <div className="BlogItem">
      <div className="BlogItem__Info">
        <h3 className="Title__Blog fc-primary">Cómo Iniciar en el Mundo de la Programación en 2023</h3>
        <span className="Date__Blog">03 May 2023</span>
        <p className="Description__Blog fc-primary">“Bienvenido al mundo de la programación! Si estás leyendo esto, es probable que estés interesado en comenzar tu carrera en la programación. En este blog, te guiaré a través de los pasos que debes seguir para convertirte en un programador exitoso en 2023.”</p>
        <NavLink to={'/blog/juhs8d81hs1'} className='btn-read-more'>Ver más</NavLink>
      </div>
      <div className="BlogItem__Image" style={{backgroundImage: `url(${image_blog1})`}}></div>
    </div>
  )
}
