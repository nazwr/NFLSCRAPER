import React from 'react';

const GameTotal = props => {
  return(
    <div className="row">
      <div className="gametotal" key={2}>
        <div className="small-12 medium-6 columns stat-block">
            <label>Total Touchdown:</label>
            {props.gameTotal.game_total_tds}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Yards:</label>
            {props.gameTotal.game_total_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Passing Yards:</label>
            {props.gameTotal.game_total_pass_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Passing Tds:</label>
            {props.gameTotal.game_total_pass_tds}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Interceptions:</label>
            {props.gameTotal.game_interceptions}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Completion Rate:</label>
            {props.gameTotal.game_completion_rate}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Rushing Attempts:</label>
            {props.gameTotal.game_total_rush_attempts}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Rushing Yards:</label>
            {props.gameTotal.game_total_rush_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Rushing Tds:</label>
            {props.gameTotal.game_total_rush_tds}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Receptions:</label>
            {props.gameTotal.game_receptions}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Receiving Yards:</label>
            {props.gameTotal.game_total_rec_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Receiving Tds:</label>
            {props.gameTotal.game_total_rec_tds}
          </div>
        <br></br>
      </div>
    </div>
  );
};

export default GameTotal
