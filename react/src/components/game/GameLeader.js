import React from 'react';

const GameLeader = props => {
  let leadingPassers = "";
  let leadingRushers = "";
  let leadingReceivers = "";

  if (props.homePassingLeader !== "" && props.awayPassingLeader !== "" ) {
    leadingPassers=
      <div className="passing">
        <div className="small-12 medium-2 columns away-passing-leader">
           <br></br>
           <p> Passing </p>
           <img src= {props.awayPassingLeader.image} className="leader-image"/>
           <p>{props.awayPassingLeader.team}</p>
           <p>{props.awayPassingLeader.name}</p>
           <p>{props.awayPassingLeader.completions}/{props.awayPassingLeader.attempts}, {props.awayPassingLeader.passing_yards} yds, {props.awayPassingLeader.passing_tds} TD, {props.awayPassingLeader.interceptions} INT</p>
           <br></br>
        </div>
        <div className="small-12 medium-2 columns end home-passing-leader">
           <br></br>
           <p> Passing </p>
           <img src= {props.homePassingLeader.image} className="leader-image"/>
           <p>{props.homePassingLeader.team}</p>
           <p>{props.homePassingLeader.name}</p>
           <p>{props.homePassingLeader.completions}/{props.homePassingLeader.attempts}, {props.homePassingLeader.passing_yards} yds, {props.homePassingLeader.passing_tds} TD, {props.homePassingLeader.interceptions} INT</p>
           <br></br>
        </div>
      </div>
  }

  if (props.homeRushingLeader !== "" && props.awayRushingLeader !== "" ) {
    leadingRushers=
    <div className="rushing">
      <div className="small-12 medium-2 columns away-rushing-leader">
         <br></br>
         <p> Rushing </p>
         <img src= {props.awayRushingLeader.image} className="leader-image"/>
         <p>{props.awayRushingLeader.team}</p>
         <p>{props.awayRushingLeader.name}</p>
         <p>{props.awayRushingLeader.rushing_attempts} CAR, {props.awayRushingLeader.rushing_yards} yds, {props.awayRushingLeader.rushing_tds} TD </p>
         <br></br>
      </div>
      <div className="small-12 medium-2 columns end home-rushing-leader">
         <br></br>
         <p> Rushing </p>
         <img src= {props.homeRushingLeader.image} className="leader-image"/>
         <p>{props.homeRushingLeader.team}</p>
         <p>{props.homeRushingLeader.name}</p>
         <p>{props.homeRushingLeader.rushing_attempts} CAR, {props.homeRushingLeader.rushing_yards} yds, {props.homeRushingLeader.rushing_tds} TD </p>
         <br></br>
      </div>
    </div>
  }

  if (props.homeReceivingLeader !== "" && props.awayReceivingLeader !== "" ) {
    leadingReceivers=
    <div className="receiving">
      <div className="small-12 medium-2 columns away-receiving-leader">
         <br></br>
         <p> Receiving </p>
         <img src= {props.awayReceivingLeader.image} className="leader-image"/>
         <p>{props.awayReceivingLeader.team}</p>
         <p>{props.awayReceivingLeader.name}</p>
         <p>{props.awayReceivingLeader.receptions} REC, {props.awayReceivingLeader.receiving_yards} yds, {props.awayReceivingLeader.receiving_tds} TD </p>
         <br></br>
      </div>
      <div className="small-12 medium-2 columns end home-receiving-leader">
         <br></br>
         <p> Receiving </p>
         <img src= {props.homeReceivingLeader.image} className="leader-image"/>
         <p>{props.homeReceivingLeader.team}</p>
         <p>{props.homeReceivingLeader.name}</p>
         <p>{props.homeReceivingLeader.receptions} REC, {props.homeReceivingLeader.receiving_yards} yds, {props.homeReceivingLeader.receiving_tds} TD </p>
         <br></br>
      </div>
    </div>
  }

  return(
    <div className="game-leader row">
      {leadingPassers}
      {leadingRushers}
      {leadingReceivers}
    </div>
  )
};

export default GameLeader
