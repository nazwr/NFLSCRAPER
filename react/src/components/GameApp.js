import React, {Component} from 'react';

class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allweeks: "",
      selectedWeek: "",
      allGames: "",
      SelectedGame: "",
    };

    this.handleSelectedGame = this.handleSelectedGame.bind(this);
  };

  handleSelectedGame() {

  }

  componentDidMount() {
    $.ajax({
      url: "api/v1/games",
      method: "GET"
    })
    .done(data => {
      this.setState({ allGames: data.games });
    });
  }

  render() {
    var searchGame = "";
    if (this.state.allGames.length !== 0) {
      searchGame = this.state.allGames.map(Game => {
        return(
          <option value={Game}></option>
        )
      });
    }

    return(
      <select name="selectedGame" onChange={this.handleSelectedGame}>
        <option key={1}> Select Week </option>
        {searchGame}
      </select>
    );
  }
}

export default GameApp;
