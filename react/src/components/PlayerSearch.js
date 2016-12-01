import React from 'react';
import GameTotal from './GameTotal';
import SeasonTotal from './SeasonTotal';

const PlayerSearch = props => {
  var gameset= "";
  var totalSeasonStats = "";
  var totalGameStats = "";
  var playerInfo = "";
  var searchFirst = "";
  var searchLast = "";

  if (props.matchingFirst.length !== 0) {
    searchFirst = props.matchingFirst.map(name => {
      return(
        <option value={name}></option>
      )
    });
  }

  if (props.matchingLast.length !== 0) {
    searchLast = props.matchingLast.map(name => {
      return(
        <option value={name}></option>
      )
    });
  }

  if (props.games.length !== 0) {
    gameset = props.games.map(game => {
      return(
      <option value={game} key={game}>{game}</option>
      )
    });
    playerInfo =
    <div className="player-info-div row">
      <div className="row">
      <div className="small-12 medium-8 columns">
        <img src="https://static-hosted.stats.com/fb/graphics/headshots/nfl_29435.png" />
      </div>
        <div className="small-12 medium-4 columns end">
          <h4>{props.playerSearchFirstName} {props.playerSearchLastName}</h4>
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns">
          <h4>player details</h4>
        </div>
      </div>
    </div>
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
    <div className="row page-body-div">
      <div className="small-12 large-3 columns">
        <div className="player-search">
          <h3>Player Search</h3>
          <hr />
          <label><b>First Name</b></label>
          <input type="text" value={props.playerSearchFirstName} name="playerSearchFirstName" onChange={props.handleFieldFirstName} list='playerSearchFirst'/>
            <datalist id='playerSearchFirst'>
              {searchFirst}
            </datalist>
          <label><b>Last Name</b></label>
          <input type="text" value={props.playerSearchLastName} name="playerSearchLastName" onChange={props.handleFieldLastName} list='playerSearchLast'/>
            <datalist id='playerSearchLast'>
              {searchLast}
            </datalist>
          <div className="search-button-div">
            <button className="PlayerSearch button" onClick={props.handleNewPlayerSearch}>Search</button>
          </div>
          <br />
          <label><b>Select Game</b></label>
          <select name="selectedGame" onChange={props.handleSelectedGame}>
            {gameset}
          </select>
          <br /><br />
          <h3>Player Info</h3>
          <hr />
          {playerInfo}
        </div>
      </div>
      <div className="small-12 large-4 columns season-totals-div">
        <h3>Season Stats</h3>
        <hr />
        {totalSeasonStats}
      </div>
      <div className="small-12 large-4 columns season-totals-div end">
        <h3>Game Stats</h3>
        <hr />
        {totalGameStats}
      </div>
    </div>
  );

}



export default PlayerSearch;
