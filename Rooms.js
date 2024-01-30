import React from "react";
import { Route, Link } from "react-router-dom";

export default function Room({ match }) {
  return (
    <div>
      <h2>여기는 소개하는 페이지</h2>
      <Link to={`${match.url}/blueRoom`}>파랑</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>초록</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route exact path={match.url} render={() => <h2>방 고르기</h2>} />
    </div>
  );
}

function Room({ match }) {
  return <h2>{`${match.params.roomId}방을 골랐어요`}</h2>;
}
