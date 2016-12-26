import React from 'react';
import PassingStat from './PassingStat';
import RushingStat from './RushingStat'
import ReceivingStat from './ReceivingStat';

const GameSearch = props => {
  let searchWeek = "";
  let searchGames = "";
  let homeStat = "";
  let awayStat = "";

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
    homeStat = props.home.map(Stat => {
      if (Stat.attempts > 0) {
        return (
          <PassingStat
           stat={Stat}
          />
        )
      } else if (Stat.rushing_attempts > 0) {
        return (
          <RushingStat
           stat={Stat}
          />
        )
      } else if (Stat.receptions > 0) {
        return (
          <ReceivingStat
           stat={Stat}
          />
        )
      }
    })
  }

  if (props.away !== "") {
    awayStat = props.away.map(Stat => {
      if (Stat.attempts > 0) {
        return (
          <PassingStat
           stat={Stat}
          />
        )
      } else if (Stat.rushing_attempts > 0) {
        return (
          <RushingStat
           stat={Stat}
          />
        )
      } else if (Stat.receptions > 0) {
        return (
          <ReceivingStat
           stat={Stat}
          />
        )
      }
    })
  }

  return(
    <div>
      <select name="selectWeek" onChange={props.handleSelectWeek}>
        <option key={1}> Select Week </option>
        {searchWeek}
      </select>
      <select name="selectGames" onChange={props.handleSelectGame}>
        <option key={1}> Select Game </option>
        {searchGames}
      </select>
        <div className="row">
          <div className="small-12 medium-6 columns">
            {awayStat}
          </div>
          <div className="small-12 medium-6 columns">
            {homeStat}
          </div>
        </div>
    </div>
  );

}

export default GameSearch;
