import './index.css';
import { NavLink, Link} from "react-router-dom";
import ico_login from '../../img/ico_login.png';

export default function Navbar() {
    const links = [
        {
            nome: 'Página Inicial',
            url: '/Home'
        },
        {
            nome: 'Sobre',
            url: '/About'
        },
        {
            nome: 'Meus Jogos',
            url: '/MyGames'
        },
        {
            nome: 'Admin',
            url: '/Admin'
        }
    ];
    return (
        <nav className="nav-bar">
            <ul className="nav-menu">
                {links.map((item, index) => (
                    <NavLink
                        key={index}
                        className="nav-link"
                        to={item.url}
                    > 
                        {({ isActive }) => (
                            <li className={`nav-button ${isActive ? "active" : ""}`}>
                                {item.nome}
                            </li>
                        )}
                    </NavLink>
                ))}
            </ul>
            <div className="login-container">
                <Link to="/Login"><img className="image-login" src={ico_login} alt="icone de login"/></Link>
            </div>
        </nav>   
    );
}