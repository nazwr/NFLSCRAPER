import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const GameLeader = props => {
  let leadingPassers = "";
  let leadingRushers = "";
  let leadingReceivers = "";

  if (props.homePassingLeader !== "" && props.awayPassingLeader !== "" ) {
    leadingPassers=
      <div>
        <div className="leader-div">
          <p>{props.awayPassingLeader.team}</p>
           <img src= {props.awayPassingLeader.image} className="leader-image"/>
           <p>
              <b>{props.awayPassingLeader.name}</b><br/>
              {props.awayPassingLeader.completions}/{props.awayPassingLeader.attempts}, {props.awayPassingLeader.passing_yards} yds, {props.awayPassingLeader.passing_tds} TD, {props.awayPassingLeader.interceptions} INT
            </p>
        </div>
        <hr/>
        <div className="leader-div">
          <p>{props.homePassingLeader.team}</p>
          <img src= {props.homePassingLeader.image} className="leader-image"/>
          <p>
             <b>{props.homePassingLeader.name}</b><br/>
             {props.homePassingLeader.completions}/{props.homePassingLeader.attempts}, {props.homePassingLeader.passing_yards} yds, {props.homePassingLeader.passing_tds} TD, {props.homePassingLeader.interceptions} INT
           </p>
        </div>
      </div>
  }

  if (props.homeRushingLeader !== "" && props.awayRushingLeader !== "" ) {
    leadingRushers=
      <div>
        <div className="leader-div">
          <p>{props.awayRushingLeader.team}</p>
          <img src= {props.awayRushingLeader.image} className="leader-image"/>
          <p>
            <b>{props.awayRushingLeader.name}</b><br/>
            {props.awayRushingLeader.rushing_attempts} CAR, {props.awayRushingLeader.rushing_yards} yds, {props.awayRushingLeader.rushing_tds} TD
          </p>
        </div>
        <hr/>
        <div className="leader-div">
          <p>{props.homeRushingLeader.team}</p>
          <img src= {props.homeRushingLeader.image} className="leader-image"/>
          <p>
            <b>{props.homeRushingLeader.name}</b><br/>
            {props.homeRushingLeader.rushing_attempts} CAR, {props.homeRushingLeader.rushing_yards} yds, {props.homeRushingLeader.rushing_tds} TD
          </p>
        </div>
      </div>
  }

  if (props.homeReceivingLeader !== "" && props.awayReceivingLeader !== "" ) {
    leadingReceivers=
      <div>
        <div className="leader-div">
          <p>{props.awayReceivingLeader.team}</p>
          <img src= {props.awayReceivingLeader.image} className="leader-image"/>
          <p>
            <b>{props.awayReceivingLeader.name}</b><br />
            {props.awayReceivingLeader.receptions} REC, {props.awayReceivingLeader.receiving_yards} yds, {props.awayReceivingLeader.receiving_tds} TD
          </p>
        </div>
        <hr/>
        <div className="leader-div">
          <p>{props.homeReceivingLeader.team}</p>
          <img src= {props.homeReceivingLeader.image} className="leader-image"/>
          <p>
            <b>{props.homeReceivingLeader.name}</b><br />
            {props.homeReceivingLeader.receptions} REC, {props.homeReceivingLeader.receiving_yards} yds, {props.homeReceivingLeader.receiving_tds} TD
          </p>
        </div>
      </div>
  }

  if (leadingPassers !==  "") {
    let div = $(".game-leader");
    div.removeClass("hidden")
  }

  return(
    <div className="game-leader row hidden">
      <table className="leader-table">
        <th colSpan="3">Game Leaders</th>
        <tr>
          <td>
            <b>Passing</b>
            <hr />
            {leadingPassers}
          </td>
          <td>
            <b>Rushing</b>
            <hr />
            {leadingRushers}
          </td>
          <td>
            <b>Receiving</b>
            <hr />
            {leadingReceivers}
          </td>
        </tr>
      </table>
    </div>
  )
};

export default GameLeader
