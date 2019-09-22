import React, { Component } from "react";
import utalogo from "./UTAlogo.png";
import rankslogo from "./rankstel_logo.png";
import RoadRageLogo from "./RRlogo.png";
import RR1 from "./RRU1.jpg";
import RR2 from "./RRU2.jpg";
import RR4 from "./RRU4.jpg";
import RR5 from "./RRU5.jpg";
class Pane2 extends Component {
  state = {
    JobTitle: "Resident Assistant",
    JobType: "Current"
  };

  checkTitle() {
    if (this.state.JobType === "Current") {
      return (
        <span>
          <h1>CURRENT</h1>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="head">
        <h1 className="blueh">Work Experience </h1>

        <div className="workpane">
          <span>
            {this.state.JobTitle}
            <br></br>
            University of Texas at Arlington <br></br>
            Apartment and Residence Life <br></br>
            <img src={utalogo} className="logoC" alt="logo"></img>
            <div className="worktext">
              Serve as a Role model and Leader for residential students and
              responsible for the general welfare of approximately 600 students.
              <br></br> Develope personal relationships with 40 residents to
              build community and enhance the on-campus involvement of those
              residents. <br></br> Organize social, academic, personal welfare
              and diverse programs and events for student residents.
            </div>
            <h7 className="area">
              August 2018 - Present <br></br>Arlington, Texas
            </h7>
          </span>
        </div>
        <div className="workpane">
          <span>
            Summer Intern<br></br>
            <a className="Work-link" href="https://rankstelecom.com">
              Ranks Telecommunication Limited
            </a>
            <br></br>
            <img src={rankslogo} className="logoC" alt="logo"></img>
            <div className="worktext">
              Worked under the mentorship of the main front end developer.
              <br></br>
              Assisted in developing multiple internal system webpages.
              <br></br>
            </div>
            <h7 className="area">
              May 2018 - July 2018 <br></br>
              Dhaka, Bangladesh
            </h7>
          </span>
        </div>
        <div className="workpane">
          Student Caller <br></br>
          University of Texas at Arlington <br></br>
          University Development and Alumni Relations <br></br>
          <img src={utalogo} className="logoC" alt="logo"></img>
          <div className="worktext">
            Served as an ambassador by establishing an open line of
            communication between the University and its alumni.<br></br>
            Called constituents (alumni, and friends of UTA) to build personal
            rapport, update demographic information, and acquire gifts to the
            Annual Fund. <br></br>Handled personal information with extreme
            confidentiality.
          </div>
          <div className="area">
            January 2018 - May 2018 <br></br>
            Arlington, Texas
          </div>
        </div>
        <h1 className="blueh">Projects</h1>
        <div className="workpane">
          <span>
            Road Rage Unlimited<br></br>
            <img
              src={RoadRageLogo}
              className="logoC"
              alt="RoadRage Unlimited logo"
            ></img>
            <div className="worktext">
              3D racing game where the player wins by getting the highest point
              in 5 minutes of game time.<br></br>Points are gained by
              maintaining a high health, colliding with opponents at a higher
              velocity, deploying items such as dynamites and using boost to
              accelerate.<br></br>
            </div>
            <img src={RR1} className="ssC" alt="picture0"></img>
            <img src={RR2} className="ssC" alt="picture1"></img>
            <img src={RR4} className="ssC" alt="picture2"></img>
            <img src={RR5} className="ssC" alt="picture3"></img>
            <div className="area">
              Powered by Unity 3D.<br></br>April 2019
            </div>
          </span>
        </div>
        <div className="workpane">
          <span>
            MemeRoyale
            <div className="worktext">
              The Battle Royale of Memes.<br></br>
              <div className="area">
                Winner, 1st Prize and Best Mobile Project at HACKSMU<br></br>
                Southern Methodist University
                <div className="worktext">
                  Nahian Alam, James Brady, Robery Brady and Adarsh Pai
                </div>
                February 2019
              </div>
            </div>
          </span>
        </div>
        <div className="workpane">
          <span>
            Tea Tool - Teacher's Tool
            <div className="worktext">
              Web based platform where a teacher keeps track of a preliminary
              student's performance in addition to class grades and attendance
              <br></br>
              This tool allows a teacher to keep track of more personal traits
              such as leadership skills, team work and anything else that the
              teacher decides to record. <br></br>A report can be generated
              automatically based on the data recorded and sent to parents to
              notify them about the progress.
            </div>
            <div className="area">
              React <br></br>Plan to complete by end of November 2019
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Pane2;
