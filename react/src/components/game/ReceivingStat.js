import React from 'react';

const ReceivingStat = props => {

  return(
    <div>
      <div className="receiving">
        <p1>{props.stat.name}</p1>
        <p2>{props.stat.receptions}</p2>
        <p3>{props.stat.receiving_yards}</p3>
        <p4>{props.stat.receiving_tds}</p4>
      </div>
    </div>
  )
};

export default ReceivingStat
