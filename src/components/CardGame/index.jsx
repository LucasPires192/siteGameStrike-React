import './index.css';

export default function CardGame(props) {
    return(
        <div className="card-game">
            <img src={props.capa} alt={`capa do jogo ${props.nome}`} />
            <h3>{props.nome}</h3>
            <p><strong>Desenvolvedora: </strong>{props.desenvolvedora}</p>
            <p><strong>Genero: </strong>{props.genero}</p>
            <p><strong>Data de lançamento: </strong></p>
            <p>{props.data_lancamento}</p>
            <p><strong>Preço: </strong>R$ {props.preco}</p>
            <p><strong>Faixa etária: </strong>{props.faixa_etaria == 0?'Livre':`${props.faixa_etaria} anos`}</p>
            <p><strong>Nota: </strong>{(props.nota !== null)?parseFloat(props.nota).toFixed(1):'Sem nota'}</p>
        </div>
    );
}