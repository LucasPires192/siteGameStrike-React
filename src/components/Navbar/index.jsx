import './index.css';

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
        <nav>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.nome}</a>
                    </li>
                ))}
            </ul>
        </nav>   
    );
}