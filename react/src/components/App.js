import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerName: "",
      playerSearchLastName: "",
      playerSearchFirstName: "",
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
        
      }
    })
  }

  render() {
    return(
    <div className="row">
      <div className="player-search col s4">
        <input type="text" value={this.state.playerSearchFirstName} name="playerSearchFirstName" onChange={this.handleFieldFirstName} />
        <input type="text" value={this.state.playerSearchLastName} name="playerSearchLastName" onChange={this.handleFieldLastName} />
        <button className="PlayerSearch btn" onClick={this.handleNewPlayerSearch}>Search</button>
      </div>
    </div>
    );
  }
}

export default App;
