import { useState, useEffect } from 'react';

export default function useJogos() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch('http://localhost/siteGameStrike-react/public/php/games.php')
      .then(res => res.json())
      .then(data => setJogos(data))
      .catch(err => console.error('Erro ao buscar jogos:', err));
  }, []);

  return jogos;
}
