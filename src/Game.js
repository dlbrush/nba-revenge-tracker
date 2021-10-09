import Team from "./Team";

class Game {
  constructor(gameData, players, teams) {
    this.startTimeEastern = gameData.startTimeEastern;
    this.homeTeamId = gameData.hTeam.teamId;
    this.visitingTeamId = gameData.vTeam.teamId;
    this.homeTeam = Team.get(this.homeTeamId, teams);
    this.visitingTeam = Team.get(this.visitingTeamId, teams);
    this.homePlayers = players.filter(player => player.checkTeam(this.homeTeamId));
    this.visitingPlayers = players.filter(player => player.checkTeam(this.visitingTeamId));
    this.homeRevenge = this.getRevenge(this.visitingTeamId, this.homePlayers);
    this.visitingRevenge = this.getRevenge(this.homeTeamId, this.visitingPlayers);
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