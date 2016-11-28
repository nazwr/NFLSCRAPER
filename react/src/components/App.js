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
    var playerinfo = "";

    if (this.state.games.length !== 0) {
      gameset = this.state.games.map(game => {
        var formattedName = game.slice(4, 6) + "/" + game.slice(6, 8) + "/" + game.slice(0, 4)
        return(
          <option value={game} key={game}>{formattedName}</option>
        )
      })

      playerinfo =
      <div className="player-info-div row">
        <div className="row">
        <div className="small-12 medium-8 columns">
          <img src="https://static-hosted.stats.com/fb/graphics/headshots/nfl_29435.png" />
        </div>
          <div className="small-12 medium-4 columns end">
            <h4>{this.state.playerSearchFirstName} {this.state.playerSearchLastName}</h4>
          </div>
        </div>
        <div className="row">
          <div className="small-12 columns">
            <h4>player details</h4>
          </div>
        </div>
      </div>;
    }

    if (this.state.totalSeasonStats !== "") {
      totalstats =
          <div className="row">
            <div className="totalstat" key={1}>
              <p>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Touchdown:</label>
                  {this.state.totalSeasonStats.total_tds}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Yards:</label>
                  {this.state.totalSeasonStats.total_yards}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Passing Yards:</label>
                  {this.state.totalSeasonStats.total_pass_yards}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Passing Tds:</label>
                  {this.state.totalSeasonStats.total_pass_tds}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Interceptions:</label>
                  {this.state.totalSeasonStats.interceptions}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Completion Rate:</label>
                  {this.state.totalSeasonStats.completion_rate}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Rushing Attempts:</label>
                  {this.state.totalSeasonStats.total_rush_attempts}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Rushing Yards:</label>
                  {this.state.totalSeasonStats.total_rush_yards}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Rushing Tds:</label>
                  {this.state.totalSeasonStats.total_rush_tds}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Receptions:</label>
                  {this.state.totalSeasonStats.receptions}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Receiving Yards:</label>
                  {this.state.totalSeasonStats.total_rec_yards}
                </div>
                <div className="small-12 medium-6 columns stat-block">
                  <label>Total Receiving Tds:</label>
                  {this.state.totalSeasonStats.total_rec_tds}
                </div></
              p>
              <br></br>
            </div>
          </div>
    }

    if (this.state.playerSearchStat !== "") {
      gametotals =
        <div className="row">
          <div className="gametotal" key={2}>
            <p>
            <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Touchdown:</label>
                {this.state.playerSearchStat.game_total_tds}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Yards:</label>
                {this.state.playerSearchStat.game_total_yards}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Passing Yards:</label>
                {this.state.playerSearchStat.game_total_pass_yards}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Passing Tds:</label>
                {this.state.playerSearchStat.game_total_pass_tds}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Interceptions:</label>
                {this.state.playerSearchStat.game_interceptions}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Completion Rate:</label>
                {this.state.playerSearchStat.game_completion_rate}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Rushing Attempts:</label>
                {this.state.playerSearchStat.game_total_rush_attempts}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Rushing Yards:</label>
                {this.state.playerSearchStat.game_total_rush_yards}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Rushing Tds:</label>
                {this.state.playerSearchStat.game_total_rush_tds}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Receptions:</label>
                {this.state.playerSearchStat.game_receptions}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Receiving Yards:</label>
                {this.state.playerSearchStat.game_total_rec_yards}
              </div>
              <div className="small-12 medium-6 columns stat-block">
                <label>Total Game Receiving Tds:</label>
                {this.state.playerSearchStat.game_total_rec_tds}
              </div>
            </p>
            <br></br>
          </div>
        </div>
    }

    return(
    <div className="row page-body-div">
      <div className="small-12 large-3 columns">
        <div className="player-search">
          <h3>Player Search</h3>
          <hr />
          <label><b>First Name</b></label>
          <input type="text" value={this.state.playerSearchFirstName} name="playerSearchFirstName" onChange={this.handleFieldFirstName} />
          <label><b>Last Name</b></label>
          <input type="text" value={this.state.playerSearchLastName} name="playerSearchLastName" onChange={this.handleFieldLastName} />
          <div className="search-button-div">
            <button className="PlayerSearch button" onClick={this.handleNewPlayerSearch}>Search</button>
          </div>
          <br />
          <label><b>Select Game</b></label>
          <select name="selectedGame" onChange={this.handleSelectedGame}>
            {gameset}
          </select>
          <br /><br />
          <h3>Player Info</h3>
          <hr />
          {playerinfo}
        </div>
      </div>
      <div className="small-12 large-4 columns season-totals-div">
        <h3>Season Stats</h3>
        <hr />
        {totalstats}
      </div>
      <div className="small-12 large-4 columns season-totals-div end">
        <h3>Game Stats</h3>
        <hr />
        {gametotals}
      </div>
    </div>
    );
  }
}

export default App;
