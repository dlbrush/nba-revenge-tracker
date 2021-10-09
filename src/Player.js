class Player {
  constructor(playerData) {
    this.id = playerData.personId;
    this.teams = playerData.teams;
    this.currentTeam = this.teams[this.teams.length - 1];
    this.first = playerData.firstName;
    this.last = playerData.lastName;
    this.photo = this.getPlayerPhoto(this.id);
  }

  checkTeam(teamId) {
    if (this.currentTeam) {
      return this.currentTeam.teamId === teamId;
    }
    return false;
  }

  getPlayerPhoto(id) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  }
}

export default Player;