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
  };

  componentDidMount() {
    $.ajax({
      url: "api/v1/games",
      method: "GET"
    })
    .done(data => {
      this.setState({ allGames: data.games });
    });
  }


  // handleFieldFirstName(e) {
  //   let shift = {};
  //   shift[e.target.name] = e.target.value;
  //   if (e.target.value.length > 2) {
  //     $.ajax({
  //      url: `api/v1/names`,
  //      method: "GET",
  //      data: {
  //        first_name: e.target.value,
  //      },
  //      success: function(data) {
  //        this.setState({matchingSearchFirstName: data.matchingfirst})
  //      }.bind(this),
  //      error: function(data) {
  //      }.bind(this),
  //      complete: function(data) {
  //      }.bind(this)
  //    })
  //   }
  //  this.setState(shift);
  // }

  render() {
    return(
      <p> Yo </p>
    );
  }
}

export default GameApp;
