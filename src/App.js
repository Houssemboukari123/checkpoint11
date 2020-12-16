import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Jaguar from "./Jaguar.jpg";

const App = () => {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={Jaguar} />

        <br />

        <img src="/F1.large.jpg" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
