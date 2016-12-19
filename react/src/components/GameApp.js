import React, {Component} from 'react';

class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: "",
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
      this.setState({ weeks: data.weeks });
    });
  }

  render() {
    var searchWeek = "";
    if (this.state.weeks.length !== 0) {
      searchWeek = this.state.weeks.map(Week => {
        return(
          <option>{Week}</option>
        )
      });
    }

    return(
      <select name="selectedGame" onChange={this.handleSelectedGame}>
        <option key={1}> Select Week </option>
        {searchWeek}
      </select>
    );
  }
}

export default GameApp;
