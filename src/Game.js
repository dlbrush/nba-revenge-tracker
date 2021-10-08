class Game {
  constructor(gameData, players, teams) {
    this.homeTeamId = gameData.hTeam.teamId;
    this.visitorTeamId = gameData.vTeam.teamId;
    this.homePlayers = players.filter(player => player.currentTeam.teamId === this.homeTeamId);
    this.visitingPlayers = players.filter(player => player.currentTeam.teamId === this.visitorTeamId);
    this.homeRevenge = this.getRevenge(this.visitorTeamId, this.homePlayers);
    this.visitorRevenge = this.getRevenge(this.homeTeamId, this.visitingPlayers);
  }

  // Return all players in a potential revenge game
  getRevenge(opponentTeamId, players) {
    return players.filter(player => {
      for (const team of player.teams) {
        if (team.teamId === opponentTeamId) return true;
      }
      return false;
    })
  }
}

export default Game;