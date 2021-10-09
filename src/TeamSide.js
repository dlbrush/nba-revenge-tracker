import './TeamSide.css';

const TeamSide = ({team, revenge}) => {
  return (
    <div className="TeamSide text-center mb-4">
      <team.Logo />
      <h4>{`${team.location} ${team.name}`}</h4>
      {revenge.length > 0 && <h5>Getting Revenge:</h5>}
      {!revenge.length && <h5 className="text-success">No Revenge</h5>}
      <ul className="revenge-list mb-2">
        {revenge.map(player => {
          return (
            <li>
              <img className="player-photo" src={player.photo} alt={`${player.first} ${player.last}`}/>
              <p>{`${player.first} ${player.last}`}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TeamSide;