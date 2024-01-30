import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Rooms from "./Room";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>홈페이지에요</h2>;
}

function Photo() {
  return <h2>사진을봐요</h2>;
}
