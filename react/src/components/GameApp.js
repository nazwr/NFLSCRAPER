import React, {Component} from 'react';
import GameSearch from './game/GameSearch';

class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: "",
      allGames: "",
      allStats: "",
      allPlayers: "",
      home: "",
      away: "",
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
          home: data.homeStats,
          away: data.awayStats
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
    let handleSelectWeek = this.handleSelectWeek;
    let handleSelectGame = this.handleSelectGame;
    let weeks = this.state.weeks;
    let allGames = this.state.allGames;
    let allStats = this.state.allStats;
    let allPlayers = this.state.allPlayers;
    let home = this.state.home;
    let away = this.state.away;

    return(
      <GameSearch
        handleSelectWeek={handleSelectWeek}
        handleSelectGame={handleSelectGame}
        weeks={weeks}
        allGames={allGames}
        allStats={allStats}
        allPlayers={allPlayers}
        home={home}
        away={away}
      />
    );
  }
}

export default GameApp;
