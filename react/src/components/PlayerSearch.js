import React from 'react';
import GameTotal from './GameTotal';
import SeasonTotal from './SeasonTotal';

const PlayerSearch = props => {
  let gameset= "";
  let totalSeasonStats = "";
  let totalGameStats = "";

  if (props.games.length !== 0) {
    gameset = props.games.map(game => {
      return(
      <option value={game} key={game}>{game}</option>
      )
    });
  };

  if (props.totalSeasonStats !== "") {
    totalSeasonStats =
      <SeasonTotal
        seasonTotal={props.totalSeasonStats}
      />;
  }

  if (props.playerSearchStat !== "") {
    totalGameStats =
      <GameTotal
        gameTotal={props.playerSearchStat}
      />;
  }

  return(
    <div className="row">
      <div className="player-search col s4">
        <label>First Name</label>
        <input type="text" value={props.playerSearchFirstName} name="playerSearchFirstName" onChange={props.handleFieldFirstName} />
        <label>Last Name</label>
        <input type="text" value={props.playerSearchLastName} name="playerSearchLastName" onChange={props.handleFieldLastName} />
        <button className="PlayerSearch btn" onClick={props.handleNewPlayerSearch}>Search</button>
      </div>
      <br></br>
      {totalSeasonStats}
      <select name="selectedGame" onChange={props.handleSelectedGame}>
        {gameset}
      </select>
      {totalGameStats}
    </div>
  );

}

export default PlayerSearch;
