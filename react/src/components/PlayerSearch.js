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
      var formattedGame = game.slice(4, 6) + "/" + game.slice(6, 8) + "/" + game.slice(0, 4);
      return(
      <option value={game} key={game}>{formattedGame}</option>
      )
    });
    playerInfo =
    <div className="player-info-div row">
      <div className="row">
      <div className="small-12 medium-8 columns small-centered">
        <img src= {props.player.image} className="player-image"/>
      </div>
        <div className="small-12 medium-8 columns end">
          <br />
          <h7><b>{props.player.first_name} {props.player.last_name}</b></h7><br></br>
          <h7>{props.player.current_team}</h7><br></br>
          <h7>{props.player.position} {props.player.number}</h7><br></br>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="small-12 columns">
           <h7><b>Height</b>: {props.player.height}</h7>
           <br/>
           <h7><b>Weight</b>: {props.player.weight}</h7>
           <br/>
           <h7><b>Birthday</b>: {props.player.born}</h7>
           <br/>
           <h7><b>Experience</b>: {props.player.years_pro} season</h7>
           <br/>
           <h7><b>College</b>: {props.player.college}</h7>
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
            <option key={1}> Select Game</option>
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
