import React from "react";
import Button from "../elements/Button";
import people from "../../assets/images/faculty/Vector.png";
import download from "../../assets/images/faculty/download.png";
import logo from "../../assets/images/faculty/image 1.png";
import logout from "../../assets/images/faculty/material-symbols_logout.png"
import profile from "../../assets/images/faculty/Ellipse 1.png"
function Faculty() {
  return (
    <div className="wrapper1 h-screen bg-white">
      <ul className="nav flex gap-1054 ml-16 mt-4">
        <li>
          <img className="img1" src={logo} alt="" />
        </li>
        <ul className="log flex items-center">
          <li>
            <img className="img2" src={logout} alt="" />
          </li>
          <li className="text-purple-800">logout</li>
        </ul>
      </ul>
      <div className="profile flex items-center pl-16 gap-40">
        <img src={profile} alt="" className="w-150 h-150 border-2 border-purple-800 rounded-full p-8" />
        <div className="namebox flex flex-col items-start justify-start gap-1">
          <div className="intro">
            <h2 className="text-purple-800 text-sm font-normal">Faculty Name</h2>
            <h3 className="text-lg font-semibold">Magniya Davis</h3>
          </div>
          <div className="box flex flex-col items-start justify-center border-2 border-purple-800 p-2">
            <h4 className="text-gray-500 text-xs font-normal">Department</h4>
            <h5 className="text-lg font-semibold">Computer Science</h5>
          </div>
        </div>
      </div>
      <h2 className="batch text-lg font-bold pl-181 pt-37 pb-15">Batch info</h2>
      <div className="main flex">
        <div className="batchbox w-400 h-150 top-488 left-163 px-20 py-10 border-2 border-purple-800 rounded-2xl shadow-lg border-t">
          <ul className="bb flex flex-col gap-1.3">
            <li>
              <Button className="btn">
                <h6 className="text-white text-xs font-normal">Batch:</h6>
                <h5 className="text-lg font-semibold">2022-2026</h5>
              </Button>
              <div className="branch flex flex-col items-start justify-center border-2 border-purple-800 w-150 h-40 p-2">
                <h4 className="text-gray-500 text-xs font-normal">Branch:</h4>
                <h5 className="text-lg font-semibold">Computer Science</h5>
              </div>
            </li>
            <li>
              <Button className="btn">
                <h6 className="text-white text-xs font-normal">Semester:</h6>
                <h5 className="text-lg font-semibold">4</h5>
              </Button>
              <div className="branch flex flex-col items-start justify-center border-2 border-purple-800 w-150 h-40 p-2">
                <h4 className="text-gray-500 text-xs font-normal">Number of Students:</h4>
                <h5 className="text-lg font-semibold">63</h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="batchbox w-400 h-150 ml-163 px-20 py-10 border-2 border-purple-800 rounded-2xl shadow-lg border-t">
          <ul className="bb flex flex-col gap-1">
            <li className="flex items-center gap-5">
              <Button className="btn2">
                <h6 className="text-white text-sm font-normal">Add shortlist</h6>
                <img src={people} alt="" className="w-30" />
              </Button>
              <div className="report flex items-center gap-5">
                <img src={download} alt="" className="w-20" />
                <h5 className="text-lg font-semibold">Download Batch Report</h5>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <Button className="btn3">
                <h4 className="text-lg">Pending</h4>
              </Button>
              <Button className="btn3">
                <h6 className="text-sm font-normal">Activity Point</h6>
              </Button>
              <div className="report">
                <h4 className="text-sm">View Sorted List</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
