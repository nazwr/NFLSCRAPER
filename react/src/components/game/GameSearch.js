import React from 'react';
import PassingStat from './PassingStat';
import RushingStat from './RushingStat'
import ReceivingStat from './ReceivingStat';

const GameSearch = props => {

  let searchWeek = "";
  let searchGames = "";
  let awayPassing = "";
  let awayRushing = "";
  let awayReceiving = "";
  let homePassing = "";
  let homeRushing = "";
  let homeReceiving = "";
  let homeStatpassing = "";
  let homeStatrushing = "";
  let homeStatreceiving = "";
  let awayStatpassing = "";
  let awayStatrushing = "";
  let awayStatreceiving = "";

  if (props.weeks.length !== 0) {
    searchWeek = props.weeks.map(Week => {
      return(
        <option value={Week}>{Week}</option>
      )
    });
  }

  if (props.allGames.length !== 0) {
    searchGames = props.allGames.map(Game => {
      return(
        <option value={Game.gamecode}>{Game.away} @ {Game.home}</option>
      )
    });
  }

  if (props.home !== "") {
    homeStatpassing = props.home.map(Stat => {
      if (Stat.attempts > 0) {
        return (
            <PassingStat
             stat={Stat}
            />
        )
      }
    })
  }

  if (props.home !== "") {
    homeStatrushing = props.home.map(Stat => {
      if (Stat.rushing_attempts > 0) {
        return (
          <RushingStat
           stat={Stat}
          />
        )
      }
    })
  }

  if (props.home !== "") {
    homeStatreceiving = props.home.map(Stat => {
      if (Stat.receptions > 0) {
        return (
          <ReceivingStat
           stat={Stat}
          />
        )
      }
    })
  }

  if (props.away !== "") {
    awayStatpassing = props.away.map(Stat => {
      if (Stat.attempts > 0) {
        return (
          <PassingStat
           stat={Stat}
          />
        )
      }
    })
  }

  if (props.away !== "") {
    awayStatrushing = props.away.map(Stat => {
      if (Stat.rushing_attempts > 0) {
        return (
          <RushingStat
           stat={Stat}
          />
        )
      }
    })
  }

  if (props.away !== "") {
    awayStatreceiving = props.away.map(Stat => {
      if (Stat.receptions > 0) {
        return (
          <ReceivingStat
           stat={Stat}
          />
        )
      }
    })
  }

  if (awayStatpassing !== "") {
    awayPassing=
    <div className="passing-stat row">
        <p1>{props.awayTeam} Passing</p1>
        <p2> C/ATT  YDS  TD  INT</p2>
        <p3>{awayStatpassing}</p3>
    </div>
  }

  if (awayStatrushing !== "") {
    awayRushing=
    <div className="rushing-stat row">
       <p1>{props.awayTeam} Rushing</p1>
       <p2> CAR YDS TD </p2>
       <p3>{awayStatrushing} </p3>
    </div>
  }

  if (awayStatreceiving !== "") {
    awayReceiving=
    <div className="receiving-stat row">
       <p1>{props.awayTeam} Receiving</p1>
       <p2>CAR YDS TD </p2>
       <p3>{awayStatreceiving}</p3>
    </div>
  }
  if (homeStatpassing !== "") {
    homePassing=
    <div className="passing-stat row">
        <p1>{props.homeTeam} Passing</p1>
        <p2>C/ATT YDS TD INT</p2>
        <p3>{homeStatpassing}</p3>
    </div>
  }

  if (homeStatrushing !== "") {
    homeRushing=
    <div className="rushing-stat row">
       <p1>{props.homeTeam} Rushing</p1>
       <p2>CAR YDS TD</p2>
       <p3>{homeStatrushing}</p3>
    </div>
  }

  if (homeStatreceiving !== "") {
    homeReceiving=
    <div className="receiving-stat row">
       <p1>{props.homeTeam} Receiving</p1>
       <p2>CAR YDS TD</p2>
       <p3>{homeStatreceiving}</p3>
    </div>
  }
  debugger;

  return(
    <div className="row game-body-div">
      <div className="small-12 large-3 columns game-search-div">
        <select name="selectWeek" onChange={props.handleSelectWeek}>
          <option key={1}> Select Week </option>
          {searchWeek}
        </select>
        <select name="selectGames" onChange={props.handleSelectGame}>
          <option key={1}> Select Game </option>
          {searchGames}
        </select>
        Game Leaders
        <div className="row">
          <div className="home-passing-leader">
             <p>{props.homePassingLeader.name}</p>
             <img src= {props.homePassingLeader.image} className="leader-image"/>
             <p>{props.homePassingLeader.completions}/{props.homePassingLeader.attempts}, {props.homePassingLeader.passing_yards} yds, {props.homePassingLeader.passing_tds} TD, {props.homePassingLeader.interceptions} INT</p>
          </div>
          <div className="away-passing-leader">
             <p>{props.awayPassingLeader.name}</p>
             <img src= {props.awayPassingLeader.image} className="leader-image"/>
             <p>{props.awayPassingLeader.completions}/{props.awayPassingLeader.attempts}, {props.awayPassingLeader.passing_yards} yds, {props.awayPassingLeader.passing_tds} TD, {props.awayPassingLeader.interceptions} INT</p>
          </div>
        </div>
        <div className="row">
          <div className="home-rushing-leader">
             <p>{props.homeRushingLeader.name}</p>
             <img src= {props.homeRushingLeader.image} className="leader-image"/>
             <p>{props.homeRushingLeader.rushing_attempts} CAR, {props.homeRushingLeader.rushing_yards} yds, {props.homeRushingLeader.rushing_tds} TD </p>
          </div>
          <div className="away-rushing-leader">
             <p>{props.awayRushingLeader.name}</p>
             <img src= {props.awayRushingLeader.image} className="leader-image"/>
             <p>{props.awayRushingLeader.rushing_attempts} CAR, {props.awayRushingLeader.rushing_yards} yds, {props.awayRushingLeader.rushing_tds} TD </p>
          </div>
        </div>
        <div className="row">
          <div className="home-receiving-leader">
             <p>{props.homeReceivingLeader.name}</p>
             <img src= {props.homeReceivingLeader.image} className="leader-image"/>
             <p>{props.homeReceivingLeader.receptions} REC, {props.homeReceivingLeader.receiving_yards} yds, {props.homeReceivingLeader.receiving_tds} TD </p>
          </div>
          <div className="away-receiving-leader">
             <p>{props.awayReceivingLeader.name}</p>
             <img src= {props.awayReceivingLeader.image} className="leader-image"/>
             <p>{props.awayReceivingLeader.receptions} REC, {props.awayReceivingLeader.receiving_yards} yds, {props.awayReceivingLeader.receiving_tds} TD </p>
          </div>
        </div>
      </div>
      <div className="small-12 large-4 columns away-team-div">
        {props.awayTeam}
        <br></br>
        <br></br>
        {awayPassing}
        <br></br>
        {awayRushing}
        <br></br>
        {awayReceiving}
        <br></br>
      </div>
      <div className="small-12 large-3 columns home-team-div">
        {props.homeTeam}
        <br></br>
        <br></br>
        {homePassing}
        <br></br>
        {homeRushing}
        <br></br>
        {homeReceiving}
        <br></br>
      </div>
    </div>
  );

}

export default GameSearch;
