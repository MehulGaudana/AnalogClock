import React from "react";
import { useState, useEffect } from "react";
import "../../../common/css/analog.css";

const AnalogClock = (props) => {
  const [isClock, setClock] = useState();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setInterval(
      () => setClock({ animation: "spin 60s linear infinite" }),
      1000
    );
    return () => {
      clearInterval();
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    }, 60000);

    if (interval === 3) {
      setInterval(() => {
        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [color]);
  return (
    <React.Fragment>
      {}
      <div>
        <h3>Analog Clock</h3>
      </div>
      <div className="analogClock">
        <div
          id="clock"
          className="clock"
          style={{ backgroundColor: color }}
        ></div>
        <div className="second" style={isClock}>
          <div className="secondArrow"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AnalogClock;
