import { useState, useEffect } from 'react';

export function useAllGames() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost/siteGameStrike-react/public/php/allGames.php')
      .then(res => res.json())
      .then(data => setAllGames(data))
      .catch(err => console.error('Erro ao buscar jogos:', err));
  }, []);

  return allGames;
}

export function useTopGames() {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost/siteGameStrike-react/public/php/topGames.php')
      .then(res => res.json())
      .then(data => setTopGames(data))
      .catch(err => console.error('Erro ao buscar top jogos:', err));
  }, []);

  return topGames;
}