import React from 'react';

const PassingStat = props => {
  return(
    <div className="row">
      <label>Passing: {props.stat.name} </label>
      <label>Completions: {props.stat.completions} </label>
      <label>Attempts: {props.stat.attempts} </label>
      <label>Passing Yards: {props.stat.passing_yards} </label>
      <label>Passing Touchdowns: {props.stat.passing_tds} </label>
      <label>Interceptions: {props.stat.interceptions} </label>
      <br></br>
    </div>
  )
};

export default PassingStat
