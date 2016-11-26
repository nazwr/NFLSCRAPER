import React from 'react';

const GameTotal = props => {
  return(
    <div className="row">
      <p> Total Game Touchdown: {props.gameTotal.game_total_tds} </p>
      <p> Total Game Yards: {props.gameTotal.game_total_yards} </p>
      <p> Total Game Passing Yards: {props.gameTotal.game_total_pass_yards} </p>
      <p> Total Game Passing Tds: {props.gameTotal.game_total_pass_tds} </p>
      <p> Total Game Interceptions: {props.gameTotal.game_interceptions} </p>
      <p> Total Game Completion Rate: {props.gameTotal.game_completion_rate} </p>
      <p> Total Game Rushing Attempts: {props.gameTotal.game_total_rush_attempts} </p>
      <p> Total Game Rushing Yards: {props.gameTotal.game_total_rush_yards} </p>
      <p> Total Game Rushing Tds: {props.gameTotal.game_total_rush_tds} </p>
      <p> Total Game Receptions: {props.gameTotal.game_receptions} </p>
      <p> Total Game Receiving Yards: {props.gameTotal.game_total_rec_yards} </p>
      <p> Total Game Receiving Tds: {props.gameTotal.game_total_rec_tds} </p>
      <br></br>
    </div>
  );
};

export default GameTotal
