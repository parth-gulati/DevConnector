import React from "react";
import img from "../../img/pagenotfound.gif";

const NotFound = () => {
  console.log(img);
  return (
    <div
      style={{
        height: `100vh`,
        background: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <br />
      <h1
        className="glow text-center display-4"
        style={{
            
          fontFamily: "Raleway",
          textShadow: "2px 2px 5px white",
          color: "white",
        }}
      >
        Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
