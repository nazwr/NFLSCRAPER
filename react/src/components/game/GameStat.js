import React from 'react';

const GameStats = props => {


  return(
    <div className="game-leader row">
      <table className="leader-table">
        <th colSpan="3">Game Stats</th>
        <tr>
          <td>
            <b>Passing</b>
          </td>
          <td>
            <b>Rushing</b>
          </td>
          <td>
            <b>Receiving</b>
          </td>
        </tr>
        <tr>
          <td>
            <tr>
              {props.homeTeam}
            </tr>
            <tr>
              <td>Player</td>
              <td>CMP</td>
              <td>ATT</td>
              <td>YDS</td>
              <td>TD</td>
              <td>INT</td>
            </tr>
          </td>
          <td>
            test
          </td>
          <td>
            test
          </td>
        </tr>
      </table>
    </div>
  )
};

export default GameStats
