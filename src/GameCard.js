import TeamSide from "./TeamSide";
import './GameCard.css';
import Versus from './versus.png';

const GameCard = ({game}) => {
  const { homeTeam, visitingTeam, homeRevenge, visitingRevenge, startTimeEastern } = game;
  return (
    <div className='GameCard container my-3'>
      <div className='row'>
        <div className='col-5'>
          <TeamSide team={homeTeam} revenge={homeRevenge} />
        </div>
        <div className='col-2 d-flex flex-column justify-content-center align-items-center'>
          <img className="img-fluid" src={Versus} alt="Versus"/>
          <p className="text-center">{`@ ${startTimeEastern}`}</p>
        </div>
        <div className='col-5'>
          <TeamSide team={visitingTeam} revenge={visitingRevenge} />
        </div>
      </div>
    </div>
  )
}

export default GameCard;