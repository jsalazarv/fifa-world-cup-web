import { InfoCard } from './components/InfoCard';
import { MatchesService } from '../../services/MatchesService.js';
import { useEffect, useState } from 'react';

const matchesService = new MatchesService();

export const Home = () => {
  const [games, setGames] = useState([]);

  const getMatches = async () => {
    try {
      const { data } = await matchesService.getMatches();

      setGames(data);
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    getMatches();
  }, []);
  return (
    <div className="home">
      {games.map((game, index) => (
        <InfoCard data={game} key={index} />
      ))}
    </div>
  );
};
