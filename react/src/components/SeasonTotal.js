import React from 'react';

const SeasonTotal = props => {
  return(
    <div className="row">
      <div className="totalstat" key={1}>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Touchdown:</label>
            {props.seasonTotal.total_tds}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Yards:</label>
            {props.seasonTotal.total_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Passing Yards:</label>
            {props.seasonTotal.total_pass_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Passing Tds:</label>
            {props.seasonTotal.total_pass_tds}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Interceptions:</label>
            {props.seasonTotal.interceptions}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Completion Rate:</label>
            {props.seasonTotal.completion_rate}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Rushing Attempts:</label>
            {props.seasonTotal.total_rush_attempts}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Rushing Yards:</label>
            {props.seasonTotal.total_rush_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Rushing Tds:</label>
            {props.seasonTotal.total_rush_tds}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Receptions:</label>
            {props.seasonTotal.receptions}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Receiving Yards:</label>
            {props.seasonTotal.total_rec_yards}
          </div>
          <div className="small-12 medium-6 columns stat-block">
            <label>Total Receiving Tds:</label>
            {props.seasonTotal.total_rec_tds}
          </div>
        <br></br>
      </div>
    </div>
  );
};

export default SeasonTotal
