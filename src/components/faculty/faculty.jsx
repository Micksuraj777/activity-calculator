import React from "react";
import "../faculty/faculty.css";
import logo from "../../assets/images/faculty/image 1.png";
import logout from "../../assets/images/faculty/material-symbols_logout.png";
import profile from "../../assets/images/faculty/Ellipse 1.png";
function faculty() {
  return (
    <div className="wrapper1">
      <ul className="nav">
        <li>
          <img className="img1" src={logo} alt="" />
        </li>
        <li>
          <img className="img2" src={logout} alt="" />
          logout
        </li>
      </ul>
      <div className="profile">
        <img src={profile} alt="" />
        <div className="namebox">
          <div className="intro">
            <h2 className="intro1">Faculty Name</h2>
            <h3 className="intro2">Magniya Davis</h3>
          </div>
          <div className="box">
            <h4 className="box1">Department</h4>
            <h5 className="box2">Computer Science</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default faculty;
