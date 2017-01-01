import React from 'react';

const ReceivingStat = props => {
  return(
    <div>
      <div className="receiving row">
        <p1>{props.stat.name}</p1>
        <p2>{props.stat.receptions}</p2>
        <p3>{props.stat.receiving_yards}</p3>
        <p4>{props.stat.receiving_tds}</p4>
        <br></br>
      </div>
    </div>
  )
};

export default ReceivingStat
