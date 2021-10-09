import * as NBAIcons from 'react-nba-logos';

class Team {
  constructor(teamData) {
    this.id = teamData.teamId;
    this.location = teamData.teamSitesOnly.teamName;
    this.name = teamData.teamSitesOnly.teamNickname;
    this.tricode = teamData.teamSitesOnly.teamTricode;
    this.Logo = NBAIcons[this.tricode];
  }

  static get (id, teams) {
    const teamData = teams.find(team => team.teamId === id);
    return new Team(teamData);
  }
}

export default Team;