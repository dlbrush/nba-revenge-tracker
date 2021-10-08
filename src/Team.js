class Team {
  constructor(teamData) {
    this.id = teamData.teamId;
    this.location = teamData.teamSitesOnly.teamName;
    this.name = teamData.teamSitesOnly.teamNickName;
  }
}

export default Team;