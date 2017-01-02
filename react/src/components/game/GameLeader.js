import React from 'react';

const GameLeader = props => {
  let leadingPassers = "";
  let leadingRushers = "";
  let leadingReceivers = "";

  if (props.homePassingLeader !== "" && props.awayPassingLeader !== "" ) {
    leadingPassers=
    <div className="row">
      <div className="small-12 medium-6 columns home-passing-leader">
         <p>{props.homePassingLeader.name}</p>
         <img src= {props.homePassingLeader.image} className="leader-image"/>
         <p>{props.homePassingLeader.completions}/{props.homePassingLeader.attempts}, {props.homePassingLeader.passing_yards} yds, {props.homePassingLeader.passing_tds} TD, {props.homePassingLeader.interceptions} INT</p>
      </div>
      <div className="small-12 medium-6 columns away-passing-leader">
         <p>{props.awayPassingLeader.name}</p>
         <img src= {props.awayPassingLeader.image} className="leader-image"/>
         <p>{props.awayPassingLeader.completions}/{props.awayPassingLeader.attempts}, {props.awayPassingLeader.passing_yards} yds, {props.awayPassingLeader.passing_tds} TD, {props.awayPassingLeader.interceptions} INT</p>
      </div>
    </div>
  }

  if (props.homeRushingLeader !== "" && props.awayRushingLeader !== "" ) {
    leadingRushers=
    <div className="row">
      <div className="small-12 medium-6 columns home-rushing-leader">
         <p>{props.homeRushingLeader.name}</p>
         <img src= {props.homeRushingLeader.image} className="leader-image"/>
         <p>{props.homeRushingLeader.rushing_attempts} CAR, {props.homeRushingLeader.rushing_yards} yds, {props.homeRushingLeader.rushing_tds} TD </p>
      </div>
      <div className="small-12 medium-6 columns away-rushing-leader">
         <p>{props.awayRushingLeader.name}</p>
         <img src= {props.awayRushingLeader.image} className="leader-image"/>
         <p>{props.awayRushingLeader.rushing_attempts} CAR, {props.awayRushingLeader.rushing_yards} yds, {props.awayRushingLeader.rushing_tds} TD </p>
      </div>
    </div>
  }

  if (props.homeReceivingLeader !== "" && props.awayReceivingLeader !== "" ) {
    leadingReceivers=
    <div className="row">
      <div className="small-12 medium-6 columns home-receiving-leader">
         <p>{props.homeReceivingLeader.name}</p>
         <img src= {props.homeReceivingLeader.image} className="leader-image"/>
         <p>{props.homeReceivingLeader.receptions} REC, {props.homeReceivingLeader.receiving_yards} yds, {props.homeReceivingLeader.receiving_tds} TD </p>
      </div>
      <div className="small-12 medium-6 columns away-receiving-leader">
         <p>{props.awayReceivingLeader.name}</p>
         <img src= {props.awayReceivingLeader.image} className="leader-image"/>
         <p>{props.awayReceivingLeader.receptions} REC, {props.awayReceivingLeader.receiving_yards} yds, {props.awayReceivingLeader.receiving_tds} TD </p>
      </div>
    </div>
  }

  return(
    <div className="game-leader">
      {leadingPassers}
      {leadingRushers}
      {leadingReceivers}
    </div>
  )
};

export default GameLeader
