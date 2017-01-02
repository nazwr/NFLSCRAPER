import React from 'react';

const PassingStat = props => {

  return(
    <div>
      <div className="passing">
        <p1>{props.stat.name}</p1>
        <p2>{props.stat.completions}/{props.stat.attempts}</p2>
        <p3>{props.stat.passing_yards}</p3>
        <p4>{props.stat.passing_tds}</p4>
        <p5>{props.stat.interceptions}</p5>
      </div>
    </div>
  )
};

export default PassingStat
