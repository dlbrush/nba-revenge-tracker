import axios from 'axios';

import { formatDateForSchedule } from './dates';

const BASE_URL = 'https://data.nba.net/data/10s/prod/v1/';

/**
 * Returns an array of player objects for the current season from the JSON data 
 * @returns {Promise} When fulfilled, returns array of player objects
 */
 async function getAllPlayers(season) {
  const response = await axios.get(`${BASE_URL}${season}/players.json`);
  return response.data['league']['standard'];
}

/**
* Returns an array of team objects for the current season from the JSON data
* @returns {Promise} When fulfilled, returns array of team objects
*/ 
async function getAllTeams() {
  const response = await axios.get(`${BASE_URL}current/standings_all.json`);
  return response.data['league']['standard']['teams'];
}

/**
* Returns an array of game objects for every game the given team will play in the current season
* @param {String} teamCode A short string representing the team code used in the NBA API
* @returns {Promise} When fulfilled, returns array of game objects
*/ 
async function getTeamSchedule(teamCode, season) {
  const response = await axios.get(`${BASE_URL}${season}/teams/${teamCode}/schedule.json`);
  return response.data['league']['standard']
}

// Returns game array;
async function getScoreboard(date) {
  const formattedDate = formatDateForSchedule(date);
  const response = await axios.get(`${BASE_URL}${formattedDate}/scoreboard.json`);
  return response.data.games;
}

export { getAllTeams, getAllPlayers, getTeamSchedule, getScoreboard }