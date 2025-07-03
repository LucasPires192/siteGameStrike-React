import { useTopGames, useAllGames }  from 'js/consults.js';
import CardGame from 'components/CardGame';
import './index.css';

export default function Home(){
    const allGames = useAllGames();
    const topGames = useTopGames();
    return (
        <div>
            <div className="grid-top-games">
                <h1>Top Jogos</h1>
                {topGames.map(game => (
                <CardGame 
                    key={game.id}
                    capa={game.capa_jogo}
                    nome={game.nome}
                    desenvolvedora={game.desenvolvedora}
                    genero={game.genero}
                    data_lancamento={game.data_lancamento}
                    preco={game.preco}
                    faixa_etaria={game.faixa_etaria}
                    nota={game.nota}
                />
                ))}
            </div>
            <div className="grid-games"> 
                {allGames.map(game => (
                    <CardGame 
                        key={game.id}
                        capa={game.capa_jogo}
                        nome={game.nome}
                        desenvolvedora={game.desenvolvedora}
                        genero={game.genero}
                        data_lancamento={game.data_lancamento}
                        preco={game.preco}
                        faixa_etaria={game.faixa_etaria}
                        nota={game.nota}
                    />
                ))}
            </div>
        </div>
    );
}