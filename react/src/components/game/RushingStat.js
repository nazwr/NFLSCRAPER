import React from 'react';

const RushingStat = props => {
  return(
    <div>
      <div className="rushing row">
        <p1>{props.stat.name}</p1>
        <p2>{props.stat.rushing_attempts}</p2>
        <p3>{props.stat.rushing_yards}</p3>
        <p4>{props.stat.rushing_tds}</p4>
        <br></br>
      </div>
    </div>
  )
};

export default RushingStat
