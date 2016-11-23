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
    };
    this.handleFieldFirstName = this.handleFieldFirstName.bind(this);
    this.handleFieldLastName = this.handleFieldLastName.bind(this);
    this.handleNewPlayerSearch = this.handleNewPlayerSearch.bind(this);
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
        })
      }
    })
  }

  render() {
    var gameset = "";
    if (this.state.games.length !== 0) {
      gameset = this.state.games.map(game => {
        return(
          <option value={game} key={game}>{game}</option>
        )
      })
    }
    return(
    <div className="row">
      <div className="player-search col s4">
        <input type="text" value={this.state.playerSearchFirstName} name="playerSearchFirstName" onChange={this.handleFieldFirstName} />
        <input type="text" value={this.state.playerSearchLastName} name="playerSearchLastName" onChange={this.handleFieldLastName} />
        <button className="PlayerSearch btn" onClick={this.handleNewPlayerSearch}>Search</button>
      </div>
      <br></br>
      <select name="GameList">
        {gameset}
      </select>
        {gamestats}
      </div>
    );
  }
}

export default App;


// if (this.state.playerSearchStat.length !== 0) {
//   var stats = "";
//   var touchdown = "";
//   stats = this.state.playerSearchStat.map(stat => {
//     if (stat.touchdown === true) {
//       var touchdown = "true";
//     }
//     else {
//       var touchdown = "false";
//     }
//     return(
      // <div className="row" key={stat.id}>
//         <p> playtype: {stat.play_type} </p>
//         <p> direction: {stat.direction} </p>
//         <p> yards: {stat.yards} </p>
//         <p> touchdown: {touchdown} </p>
//         <p> gamecode: {stat.gamecode} </p>
//         <br></br>
//       </div>
//     )
//   })
// }
