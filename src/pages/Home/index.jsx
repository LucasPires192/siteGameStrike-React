import useJogos from 'js/consults.js';
import CardGame from 'components/CardGame';
import './index.css';

export default function Home(){
    const jogos = useJogos();
    return (
        <div className="Grid-Games"> 
           {jogos.map(jogo => (
               <CardGame 
                    key={jogo.id}
                    capa={jogo.capa_jogo}
                    nome={jogo.nome}
                    desenvolvedora={jogo.desenvolvedora}
                    genero={jogo.genero}
                    data_lancamento={jogo.data_lancamento}
                    preco={jogo.preco}
                    faixa_etaria={jogo.faixa_etaria}
                    nota={jogo.nota}
                />
           ))}
        </div>
    );
}