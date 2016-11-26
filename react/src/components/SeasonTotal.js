import React from 'react';

const SeasonTotal = props => {
  return(
    <div className="row">
      <p> Total Touchdown: {props.seasonTotal.total_tds} </p>
      <p> Total Yards: {props.seasonTotal.total_yards} </p>
      <p> Total Passing Yards: {props.seasonTotal.total_pass_yards} </p>
      <p> Total Passing Tds: {props.seasonTotal.total_pass_tds} </p>
      <p> Total Interceptions: {props.seasonTotal.interceptions} </p>
      <p> Total Completion Rate: {props.seasonTotal.completion_rate} </p>
      <p> Total Rushing Attempts: {props.seasonTotal.total_rush_attempts} </p>
      <p> Total Rushing Yards: {props.seasonTotal.total_rush_yards} </p>
      <p> Total Rushing Tds: {props.seasonTotal.total_rush_tds} </p>
      <p> Total Receptions: {props.seasonTotal.receptions} </p>
      <p> Total Receiving Yards: {props.seasonTotal.total_rec_yards} </p>
      <p> Total Receiving Tds: {props.seasonTotal.total_rec_tds} </p>
      <br></br>
    </div>
  );
};

export default SeasonTotal
