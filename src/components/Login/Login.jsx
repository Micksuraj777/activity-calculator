import React from "react";
import fi from "../../assets/images/Login/faculty_icon.png";
import si from "../../assets/images/Login/student_icon.png";
import book from "../../assets/images/Login/book.png";
import eye from "../../assets/images/Login/eye_icon.png";


export default function Login() {
  return (
    <div className="wrapper">
      <div className="left">
        <div className="top">
          <p>
            <span className="welcome">Welcome to </span>
            <span className="cce">CCE Portal</span>
          </p>
        </div>
        <div className="mid">
          <div>
            <img src={fi} alt="faculty_icon" className="faculty_icon" />
            <span>Faculty</span>
          </div>
          <div>
            <img src={si} alt="student_icon" className="student_icon" />
            <span>Student</span>
          </div>
        </div>
        <div className="bottom">
          <img src={book} alt="thumbnail" className="book" />
        </div>
      </div>
      <div className="right">
        <div className="rwrapper">
          <h2>Student Login</h2>
          <div className="form">
            <input placeholder="Username" className="Username" />
            <div>
              <input placeholder="Password" className="Password"/>
              <img src={eye} alt="eye-lid" />
              <span className="forgot"></span>
            </div>
            <span className="login">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}


