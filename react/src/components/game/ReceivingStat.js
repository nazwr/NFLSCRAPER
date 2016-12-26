import React from 'react';

const ReceivingStat = props => {
  return(
    <div className="row">
      <label>Receiving: {props.stat.name} </label>
      <label>Receptions: {props.stat.receptions} </label>
      <label>Receiving Yards: {props.stat.receiving_yards} </label>
      <label>Receiving Touchdowns: {props.stat.receiving_tds} </label>
      <br></br>
    </div>
  )
};

export default ReceivingStat
