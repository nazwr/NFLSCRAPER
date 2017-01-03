import React from 'react';

const GameLeader = props => {
  let leadingPassers = "";
  let leadingRushers = "";
  let leadingReceivers = "";

  if (props.homePassingLeader !== "" && props.awayPassingLeader !== "" ) {
    leadingPassers=
      <div>
        <div className="leader-div">
           <img src= {props.awayPassingLeader.image} className="leader-image"/>
           <p>
              {props.awayPassingLeader.team}<br/>
              <b>{props.awayPassingLeader.name}</b><br/>
              {props.awayPassingLeader.completions}/{props.awayPassingLeader.attempts}, {props.awayPassingLeader.passing_yards} yds, {props.awayPassingLeader.passing_tds} TD, {props.awayPassingLeader.interceptions} INT
            </p>
        </div>
        <div className="leader-div">
           <img src= {props.homePassingLeader.image} className="leader-image"/>
           <p>{props.homePassingLeader.team}</p>
           <p>{props.homePassingLeader.name}</p>
           <p>{props.homePassingLeader.completions}/{props.homePassingLeader.attempts}, {props.homePassingLeader.passing_yards} yds, {props.homePassingLeader.passing_tds} TD, {props.homePassingLeader.interceptions} INT</p>
        </div>
      </div>
  }

  if (props.homeRushingLeader !== "" && props.awayRushingLeader !== "" ) {
    leadingRushers=
      <div>
        <div className="leader-div">
           <img src= {props.awayRushingLeader.image} className="leader-image"/>
           <p>{props.awayRushingLeader.team}</p>
           <p>{props.awayRushingLeader.name}</p>
           <p>{props.awayRushingLeader.rushing_attempts} CAR, {props.awayRushingLeader.rushing_yards} yds, {props.awayRushingLeader.rushing_tds} TD </p>
        </div>
        <div className="leader-div">
           <img src= {props.homeRushingLeader.image} className="leader-image"/>
           <p>{props.homeRushingLeader.team}</p>
           <p>{props.homeRushingLeader.name}</p>
           <p>{props.homeRushingLeader.rushing_attempts} CAR, {props.homeRushingLeader.rushing_yards} yds, {props.homeRushingLeader.rushing_tds} TD </p>
        </div>
      </div>
  }

  if (props.homeReceivingLeader !== "" && props.awayReceivingLeader !== "" ) {
    leadingReceivers=
      <div>
        <div className="leader-div">
           <img src= {props.awayReceivingLeader.image} className="leader-image"/>
           <p>{props.awayReceivingLeader.team}</p>
           <p>{props.awayReceivingLeader.name}</p>
           <p>{props.awayReceivingLeader.receptions} REC, {props.awayReceivingLeader.receiving_yards} yds, {props.awayReceivingLeader.receiving_tds} TD </p>
        </div>
        <div className="leader-div">
           <img src= {props.homeReceivingLeader.image} className="leader-image"/>
           <p>{props.homeReceivingLeader.team}</p>
           <p>{props.homeReceivingLeader.name}</p>
           <p>{props.homeReceivingLeader.receptions} REC, {props.homeReceivingLeader.receiving_yards} yds, {props.homeReceivingLeader.receiving_tds} TD </p>
        </div>
      </div>
  }

  return(
    <div className="game-leader row">
      <table className="leader-table">
        <th colSpan="3">Game Leaders</th>
        <tr>
          <td>
            <b>Passing</b>
            {leadingPassers}
          </td>
          <td>
            <b>Rushing</b>
            {leadingRushers}
          </td>
          <td>
            <b>Receiving</b>
            {leadingReceivers}
          </td>
        </tr>
      </table>
    </div>
  )
};

export default GameLeader
