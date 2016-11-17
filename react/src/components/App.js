import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  };

  componentDidMount() {
    $.ajax({
      url: "api/v1/players",
      method: "GET"
    })
    .done(data => {
      debugger;
      this.setState({ players: data.players });
    });
  }

  render() {
    return(
    <div className="row">
      hi
    </div>
    );
  }
}

export default App;
