import React from 'react';

const RushingStat = props => {
  return(
    <div className="row">
      <label>Rushing: {props.stat.name} </label>
      <label>Carries: {props.stat.rushing_attempts} </label>
      <label>Rushing Yards: {props.stat.rushing_yards} </label>
      <label>Rushing Touchdowns: {props.stat.rushing_tds} </label>
      <br></br>
    </div>
  )
};

export default RushingStat
