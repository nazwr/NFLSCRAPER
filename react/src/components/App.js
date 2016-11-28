import React, {Component} from 'react';
import PlayerSearch from './PlayerSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerName: "",
      playerSearchLastName: "",
      playerSearchFirstName: "",
      playerSearchStat: "",
      games: [],
      selectedGame: "",
      totalSeasonStats: ""
    };
    this.handleFieldFirstName = this.handleFieldFirstName.bind(this);
    this.handleFieldLastName = this.handleFieldLastName.bind(this);
    this.handleNewPlayerSearch = this.handleNewPlayerSearch.bind(this);
    this.handleSelectedGame = this.handleSelectedGame.bind(this);
  };

  handleFieldFirstName(e) {
    let shift = {};
    shift[e.target.name] = e.target.value;
    this.setState(shift);
  }

  handleFieldLastName(e) {
    let shift = {};
    shift[e.target.name] = e.target.value;
    this.setState(shift);
  }

  handleSelectedGame(e) {
    $.ajax({
      url: `api/v1/stats`,
      method: "GET",
      data: {
        gamecode: e.target.value,
        first_name: this.state.playerSearchFirstName,
        last_name: this.state.playerSearchLastName,
      },
      success: (data) => {
        this.setState({
          playerSearchStat: data.gametotal
        })
      }
    })
  }

  handleNewPlayerSearch() {
    let searchFirstName = this.state.playerSearchFirstName.trim();
    let searchLastName = this.state.playerSearchLastName.trim();
    let firstName = searchFirstName[0].toUpperCase() + searchFirstName.slice(1);
    let lastName = searchLastName[0].toUpperCase() + searchLastName.slice(1);
    this.setState({});
    $.ajax({
      url: `api/v1/players`,
      method: "GET",
      data: {
        player: {
          last_name: lastName,
          first_name: firstName,
        }
      },
      success: (data) => {
        this.setState({
          games: data.games,
          totalSeasonStats: data.total_season_stats,
          playerSearchStat: "",
          playerSearchLastName: lastName,
          playerSearchFirstName: firstName
        })
      }
    })
  }

  render() {
    var gameset = "";
    var gametotals = "";
    var totalstats = "";

    if (this.state.games.length !== 0) {
      gameset = this.state.games.map(game => {
        return(
          <option value={game} key={game}>{game}</option>
        )
      })
    }

      if (this.state.totalSeasonStats !== "") {
        totalstats =
            <div className="row">
              <div className="totalstat" key={1}>
                <p> Total Touchdown: {this.state.totalSeasonStats.total_tds} </p>
                <p> Total Yards: {this.state.totalSeasonStats.total_yards} </p>
                <p> Total Passing Yards: {this.state.totalSeasonStats.total_pass_yards} </p>
                <p> Total Passing Tds: {this.state.totalSeasonStats.total_pass_tds} </p>
                <p> Total Interceptions: {this.state.totalSeasonStats.interceptions} </p>
                <p> Total Completion Rate: {this.state.totalSeasonStats.completion_rate} </p>
                <p> Total Rushing Attempts: {this.state.totalSeasonStats.total_rush_attempts} </p>
                <p> Total Rushing Yards: {this.state.totalSeasonStats.total_rush_yards} </p>
                <p> Total Rushing Tds: {this.state.totalSeasonStats.total_rush_tds} </p>
                <p> Total Receptions: {this.state.totalSeasonStats.receptions} </p>
                <p> Total Receiving Yards: {this.state.totalSeasonStats.total_rec_yards} </p>
                <p> Total Receiving Tds: {this.state.totalSeasonStats.total_rec_tds} </p>
                <br></br>
              </div>
            </div>
      }

      if (this.state.playerSearchStat !== "") {
        gametotals =
          <div className="row">
            <div className="gametotal" key={2}>
              <p> Total Game Touchdown: {this.state.playerSearchStat.game_total_tds} </p>
              <p> Total Game Yards: {this.state.playerSearchStat.game_total_yards} </p>
              <p> Total Game Passing Yards: {this.state.playerSearchStat.game_total_pass_yards} </p>
              <p> Total Game Passing Tds: {this.state.playerSearchStat.game_total_pass_tds} </p>
              <p> Total Game Interceptions: {this.state.playerSearchStat.game_interceptions} </p>
              <p> Total Game Completion Rate: {this.state.playerSearchStat.game_completion_rate} </p>
              <p> Total Game Rushing Attempts: {this.state.playerSearchStat.game_total_rush_attempts} </p>
              <p> Total Game Rushing Yards: {this.state.playerSearchStat.game_total_rush_yards} </p>
              <p> Total Game Rushing Tds: {this.state.playerSearchStat.game_total_rush_tds} </p>
              <p> Total Game Receptions: {this.state.playerSearchStat.game_receptions} </p>
              <p> Total Game Receiving Yards: {this.state.playerSearchStat.game_total_rec_yards} </p>
              <p> Total Game Receiving Tds: {this.state.playerSearchStat.game_total_rec_tds} </p>
              <br></br>
            </div>
          </div>
      }

    return(
    <div className="row">
      <div className="small-12 medium-4 columns search-div">
        <div className="player-search">
          <label>First Name</label>
          <input type="text" value={this.state.playerSearchFirstName} name="playerSearchFirstName" onChange={this.handleFieldFirstName} />
          <label>Last Name</label>
          <input type="text" value={this.state.playerSearchLastName} name="playerSearchLastName" onChange={this.handleFieldLastName} />
          <button className="PlayerSearch button" onClick={this.handleNewPlayerSearch}>Search</button>
        </div>
      </div>
      <div className="small-12 medium-8 columns">
        <label>Test</label>
        {totalstats}
        <label>Select Game</label>
          <select name="selectedGame" onChange={this.handleSelectedGame}>
            {gameset}
          </select>
          {gametotals}
        </div>
      </div>
    );
  }
}

export default App;
