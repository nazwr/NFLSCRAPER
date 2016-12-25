import React, {Component} from 'react';

class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: "",
      allGames: "",
      allStats: "",
      allPlayers: "",
    };

    this.handleSelectWeek = this.handleSelectWeek.bind(this);
    this.handleSelectGame = this.handleSelectGame.bind(this);

  };

  handleSelectGame(e) {
    $.ajax({
      url: `api/v1/games`,
      method: "GET",
      data: {
        gamecode: e.target.value,
      },
      success: (data) => {
        this.setState({
          allStats: data.allStats,
          allPlayers: data.allPlayers
        })
      }
    })
  }

  handleSelectWeek(e) {
    $.ajax({
      url: `api/v1/games`,
      method: "GET",
      data: {
        week: e.target.value,
      },
      success: (data) => {
        this.setState({
          allGames: data.allGames
        })
      }
    })
  }

  componentDidMount() {
    $.ajax({
      url: "api/v1/games",
      method: "GET"
    })
    .done(data => {
      this.setState({ weeks: data.weeks });
    });
  }

  render() {
    var searchWeek = "";
    var searchGames = "";
    var gameStats = "";
    if (this.state.weeks.length !== 0) {
      searchWeek = this.state.weeks.map(Week => {
        return(
          <option value={Week}>{Week}</option>
        )
      });
    }

    if (this.state.allGames.length !== 0) {
      searchGames = this.state.allGames.map(Game => {
        return(
          <option value={Game.gamecode}>{Game.away} @ {Game.home}</option>
        )
      });
    }

    if (this.state.allStats.length !== 0) {
      gameStats = this.state.allStats.map(Stat => {
        if (Stat.attempts > 0) {
          return(
            <div className="row">
              <label>Passing: {Stat.name} </label>
              <label>Completions: {Stat.completions} </label>
              <label>Attempts: {Stat.attempts} </label>
              <label>Passing Yards: {Stat.passing_yards} </label>
              <label>Passing Touchdowns: {Stat.passing_tds} </label>
              <label>Interceptions: {Stat.interceptions} </label>
              <br></br>
            </div>
          )
        } else if (Stat.rushing_attempts > 0) {
          return(
            <div className="row">
              <label>Rushing: {Stat.name} </label>
              <label>Carries: {Stat.rushing_attempts} </label>
              <label>Rushing Yards: {Stat.rushing_yards} </label>
              <label>Rushing Touchdowns: {Stat.rushing_tds} </label>
              <br></br>
            </div>
          )
        } else if (Stat.receptions > 0) {
          return(
            <div className="row">
              <label>Receiving: {Stat.name} </label>
              <label>Receptions: {Stat.receptions} </label>
              <label>Receiving Yards: {Stat.receiving_yards} </label>
              <label>Receiving Touchdowns: {Stat.receiving_tds} </label>
              <br></br>
            </div>
          )
        }
      });
    }

    return(
      <div>
        <select name="selectWeek" onChange={this.handleSelectWeek}>
          <option key={1}> Select Week </option>
          {searchWeek}
        </select>
        <select name="selectGames" onChange={this.handleSelectGame}>
          <option key={1}> Select Game </option>
          {searchGames}
        </select>
          {gameStats}
      </div>
    );
  }
}

export default GameApp;
