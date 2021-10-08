import './App.css';
import React, { useState, useEffect } from 'react';
import { getAllPlayers, getScoreboard, getAllTeams } from './api';
import Player from './Player';
import Game from './Game';

function App() {
  const [loading, setLoading] = useState(true);
  const [games, setGames]= useState([]);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const getGames = async () => {
      const year = date.getFullYear();
      const season = date.getMonth() > 8 ?  year : year - 1; 
      // arbitrary date
      const exampleDate = new Date(2021, 11, 30);
      const playerData = await getAllPlayers(season);
      const players = playerData.map(data => new Player(data));
      const teamData = await getAllTeams();
      const gameData = await getScoreboard(exampleDate);
      const newGames = gameData.map(data => new Game(data, players));
      setGames(newGames);
      setLoading(false);
    }
    getGames();
  },[date, games]);
  if (loading) return <p>Loading...</p>
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
