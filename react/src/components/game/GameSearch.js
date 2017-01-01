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
        <br></br>
        <p2> C/ATT  YDS  TD  INT</p2>
        <p3>{awayStatpassing}</p3>
    </div>
  }

  if (awayStatrushing !== "") {
    awayRushing=
    <div className="rushing-stat row">
       <p1>{props.awayTeam} Rushing</p1>
       <br></br>
       <p2> CAR YDS TD </p2>
       <p3>{awayStatrushing} </p3>
    </div>
  }

  if (awayStatreceiving !== "") {
    awayReceiving=
    <div className="receiving-stat row">
       <p1>{props.awayTeam} Receiving</p1>
       <br></br>
       <p2>CAR YDS TD </p2>
       <p3>{awayStatreceiving}</p3>
    </div>
  }
  if (homeStatpassing !== "") {
    homePassing=
    <div className="passing-stat row">
        <p1>{props.homeTeam} Passing</p1>
        <br></br>
        <p2>C/ATT YDS TD INT</p2>
        <p3>{homeStatpassing}</p3>
    </div>
  }

  if (homeStatrushing !== "") {
    homeRushing=
    <div className="rushing-stat row">
       <p1>{props.homeTeam} Rushing</p1>
       <br></br>
       <p2>CAR YDS TD</p2>
       <p3>{homeStatrushing}</p3>
    </div>
  }

  if (homeStatreceiving !== "") {
    homeReceiving=
    <div className="receiving-stat row">
       <p1>{props.homeTeam} Receiving</p1>
       <br></br>
       <p2>CAR YDS TD</p2>
       <p3>{homeStatreceiving}</p3>
    </div>
  }

  return(
    <div className="row">
      <div className="small-12 large-2 columns">
        <select name="selectWeek" onChange={props.handleSelectWeek}>
          <option key={1}> Select Week </option>
          {searchWeek}
        </select>
        <select name="selectGames" onChange={props.handleSelectGame}>
          <option key={1}> Select Game </option>
          {searchGames}
        </select>
      </div>
      <div className="small-12 large-3 columns">
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
      <div className="small-12 large-3 columns">
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
