import React from "react";
import Hello from "../../assets/Hello.jpg";
import "./Welcom.scss";

export default function Welcome() {
  return (
    <>
      <div className="hello">
        <img src={Hello} className="welcome w-100" />
        {/* <div className="title">
          <h3>Your exclusive sitewide offer awaits SIGNUP NOW</h3>
        </div> */}
      </div>
    </>
  );
}
