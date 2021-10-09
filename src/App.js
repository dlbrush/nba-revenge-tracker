import './App.css';
import React, { useState, useEffect } from 'react';
import { getAllPlayers, getScoreboard, getAllTeams } from './api';
import Player from './Player';
import Game from './Game';
import GameCard from './GameCard';
import RevengeLogo from './revengelogo.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [games, setGames]= useState([]);
  // arbitrary date
  // const [date, setDate] = useState(new Date(2021, 8, 30));
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const getGames = async () => {
      const year = date.getFullYear();
      const season = date.getMonth() > 8 ?  year : year - 1;
      const playerData = await getAllPlayers(season);
      const players = playerData.map(data => new Player(data));
      const teamData = await getAllTeams();
      const gameData = await getScoreboard(date);
      const newGames = gameData.map(data => new Game(data, players, teamData));
      setGames(newGames);
      setLoading(false);
    }
    getGames();
  },[date, games]);
  if (loading) return <p>Loading...</p>
  return (
    <div className="App container">
      {/* <h1 className="text-center text-white">NBA Revenge Tracker</h1> */}
      <img className="img-fluid" src={RevengeLogo} alt="Revenge Tracker Logo" />
      <h5 className="text-center text-white">Players facing their former teams today</h5>
      {!games.length && <h2 className="text-center text-white">No games today!</h2>}
      {games.length > 0 && games.map(game => {
        return <GameCard game={game}/>
      })}
    </div>
  );
}

export default App;
