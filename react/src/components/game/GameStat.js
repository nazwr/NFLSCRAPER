import React from 'react';

const GameStats = props => {


  return(
    <div className="game-leader row">
      <table className="stat-table">
        <th colSpan="3">{props.homeTeam} Passing</th>
        <tr>
        </tr>
      </table>
      <table className="stat-table">
        <th colSpan="3">{props.awayTeam} Passing</th>
        <tr>
        </tr>
      </table>
    </div>
  )
};

export default GameStats
