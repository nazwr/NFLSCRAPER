import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerName: "",
      playerSearchLastName: "",
      playerSearchFirstName: "",
      playerSearchStat: [],
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
    let shift = {};
    shift[e.target.name] = e.target.value;
    this.setState(shift);
  }

  handleNewPlayerSearch() {
    $.ajax({
      url: `api/v1/players`,
      method: "GET",
      data: {
        player: {
          last_name: this.state.playerSearchLastName,
          first_name: this.state.playerSearchFirstName,
        }
      },
      success: (data) => {
        this.setState({
          games: data.games,
          playerSearchStat: data.stats,
          totalSeasonStats: data.total_season_stats
        })
      }
    })
  }

  render() {
    var gameset = "";
    var gamestats = "";
    var totalstats = "";
    if (this.state.games.length !== 0) {
      gameset = this.state.games.map(game => {
        return(
          <option value={game} key={game}>{game}</option>
        )
      })
    }
    if (this.state.games.length !== 0) {
      gamestats = this.state.playerSearchStat.map(game => {
        if (this.state.selectedGame === game.gamecode) {
          return(
            <div className="row" key={game.id}>
              <p> playtype: {game.play_type} </p>
              <p> direction: {game.direction} </p>
              <p> complete: {game.complete.toString()} </p>
              <p> intercepted: {game.intercepted.toString()} </p>
              <p> yards: {game.yards} </p>
              <p> touchdown: {game.touchdown.toString()} </p>
              <br></br>
            </div>
          )
      }
      })
    }

      if (this.state.totalSeasonStats !== "") {
        totalstats =
            <div className="row">
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
      }

    return(
    <div className="row">
      <div className="player-search col s4">
        <input type="text" value={this.state.playerSearchFirstName} name="playerSearchFirstName" onChange={this.handleFieldFirstName} />
        <input type="text" value={this.state.playerSearchLastName} name="playerSearchLastName" onChange={this.handleFieldLastName} />
        <button className="PlayerSearch btn" onClick={this.handleNewPlayerSearch}>Search</button>
      </div>
      <br></br>
      {totalstats}
      <select name="selectedGame" onChange={this.handleSelectedGame}>
        {gameset}
      </select>
        {gamestats}
      </div>
    );
  }
}

export default App;
