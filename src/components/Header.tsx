import './styles/Header.scss';
import blogdekoft_logo from '../assets/img/blogdekoft_logomark.svg';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="Header">
        <div className="Header__Box">
            <div className="Header__Box__Logo">
                <img src={blogdekoft_logo} alt="" />
            </div>
            <div className="Header__Box__Options">
              <ul>
                <li>
                  <NavLink to={'/'}>Inicio</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>Acerca</NavLink>
                </li>
                <li>
                  <NavLink to={'/recursos'}>Recursos</NavLink>
                </li>
              </ul>
            </div>
        </div>
    </header>
  )
}
