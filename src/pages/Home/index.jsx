import useJogos from "js/consults.js";

export default function Home(){
    const jogos = useJogos();
    return (
        <div>
           {jogos.map(jogo => (
               <div key={jogo.id}>{jogo.nome} - Nota: {parseFloat(jogo.nota).toFixed(1)}</div>
           ))}
        </div>
    );
}