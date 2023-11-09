import React from "react";
import "../faculty/faculty.css";
import logo from "../../assets/images/faculty/image 1.png";
import logout from "../../assets/images/faculty/material-symbols_logout.png";
import profile from "../../assets/images/faculty/Ellipse 1.png";
import Button from "../elements/Button";
import people from "../../assets/images/faculty/Vector.png"
import download from "../../assets/images/faculty/download.png"
function faculty() {
  return (
    <div className="wrapper1">
      <ul className="nav">
        <li>
          <img className="img1" src={logo} alt="" />
        </li>
        <ul className="log">
          <li>
            <img className="img2" src={logout} alt="" />
          </li>
          <li>logout</li>
        </ul>
      </ul>
      <div className="profile">
        <img src={profile} alt="" />
        <div className="namebox">
          <div className="intro">
            <h2>Faculty Name</h2>
            <h3>Magniya Davis</h3>
          </div>
          <div className="box">
            <h4>Department</h4>
            <h5>Computer Science</h5>
          </div>
        </div>
      </div>
      <h2 className="batch">Batch info</h2>
      <div className="main">
        <div className="batchbox">
          <ul className="bb">
            <li>
              <Button className="btn">
                <h6>Batch:</h6>
                <h5>2022-2026</h5>
              </Button>
              <div className="branch">
                <h4>Branch:</h4>
                <h5>Computer Science</h5>
              </div>
            </li>
            <li>
              <Button className="btn">
                <h6>Semester:</h6>
                <h5>4</h5>
              </Button>
              <div className="branch">
                <h4>Number of Students:</h4>
                <h5>63</h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="batchbox">
          <ul className="bb">
            <li>
              <Button className="btn2">
                <h6>Add shortlist</h6>
                <img src={people}></img>
              </Button>
              <div className="report">
                <img src={download}></img>
                <h5>Download Batch Report</h5>
              </div>
            </li>
            <li>
              <Button className="btn3">
                <h4>Pending</h4>
              </Button>
              <Button className="btn3">
                <h6>Activity Point</h6>
              </Button>
              <div className="report">
                <h4>View Sorted List</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default faculty;
