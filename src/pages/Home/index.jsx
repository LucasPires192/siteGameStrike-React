import { useEffect, useState } from "react";

export default function Home(){
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        fetch('http://localhost/siteGameStrike-react/src/php/games.php')
        .then(res => res.text())
        .then(text => {
            console.log('Resposta bruta:', text);
            return JSON.parse(text); // depois que confirmar que é JSON
        })
        .then(data => setJogos(data))
        .catch(err => console.error('Erro ao buscar jogos:', err));
    }, []);
    return (
        <div>
        </div>
    );
}