import './styles/Footer.scss';
import logo_bdekoft from '../assets/img/Logo_Blog_Dekoft.svg';


export const Footer = () => {
  return (
    <footer className="Footer">
        <div className="Footer__Box">
            <div className="Footer__Box__Logo">
                <img src={logo_bdekoft} alt="" />
            </div>
            <div className="Footer__Box__Credits">
              <span className='fc-primary'>Hecho con amor desde Colombia</span>
            </div>
        </div>
    </footer>
  )
}
