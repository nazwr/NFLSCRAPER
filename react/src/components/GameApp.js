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
      debugger;
      gameStats = this.state.allStats.map(Stat => {
        return(
          <p>{Stat.play_type} {Stat.yards}</p>
        )
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
