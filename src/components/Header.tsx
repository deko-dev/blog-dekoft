import './styles/Header.scss';
import blogdekoft_logo from '../assets/blogdekoft_logomark.png';

export const Header = () => {
  return (
    <header className="Header">
        <div className="Header__Box">
            <div className="Header__Box__Logo">
                <img src={blogdekoft_logo} alt="" />
            </div>
        </div>
    </header>
  )
}
