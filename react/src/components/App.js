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
          totalSeasonStats: data.total_season_stats,
          playerSearchStat: ""
        })
      }
    })
  }

  render() {
    let currentPlayerName = this.state.currentPlayerName;
    let playerSearchLastName = this.state.playerSearchLastName;
    let playerSearchFirstName = this.state.playerSearchFirstName;
    let games = this.state.games;
    let selectedGame = this.state.selectedGame;
    let totalSeasonStats = this.state.totalSeasonStats;
    let playerSearchStat = this.state.playerSearchStat;
    let handleNewPlayerSearch = this.handleNewPlayerSearch;
    let handleSelectedGame = this.handleSelectedGame;
    let handleFieldLastName = this.handleFieldLastName;
    let handleFieldFirstName = this.handleFieldFirstName;

    return(
      <PlayerSearch
        currentPlayerName={currentPlayerName}
        playerSearchLastName={playerSearchLastName}
        playerSearchFirstName={playerSearchFirstName}
        games={games}
        selectedGame={selectedGame}
        totalSeasonStats={totalSeasonStats}
        playerSearchStat={playerSearchStat}
        handleNewPlayerSearch={handleNewPlayerSearch}
        handleSelectedGame={handleSelectedGame}
        handleFieldLastName={handleFieldLastName}
        handleFieldFirstName={handleFieldFirstName}
      />
    );
  }
}

export default App;
