class Player {
  constructor(playerData) {
    this.teams = playerData.teams;
    this.currentTeam = this.teams[this.teams.length - 1];
  }
}

export default Player;