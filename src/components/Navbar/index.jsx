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
                        to={item.url}
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        {item.nome}
                    </NavLink>
                ))}
            </ul>
            <div className="login-container">
                <Link to="/Login"><img className="image-login" src={ico_login} alt="icone de login"/></Link>
            </div>
        </nav>   
    );
}