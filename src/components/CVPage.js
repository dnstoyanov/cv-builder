import React from "react";

import WorkExp from "./WorkExp";
import Training from "./Training";
import Skills from "./Skills";
import Languages from "./Languages";
import Education from "./Education";
import Certifications from "./Certifications";
import PersonalInfo from "./PersonalInfo";

export const CVPage = () => {
  return (
    <div id="cv-page" style={{ padding: "40px", backgroundColor: "#313131" }}>
      <div style={{ width: "100%" }}>
        <PersonalInfo />
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "10px",
          display: "flex",
          gap: "2%",
        }}
      >
        <div style={{ flex: "0 0 67%" }}>
          <h2>Professional Experience</h2>
          <hr
            style={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <div>
            <WorkExp />
          </div>
          <h2>Training / Courses</h2>
          <hr
            style={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <div>
            <Training />
          </div>
        </div>
        <div style={{ flex: "0 0 31%" }}>
          <h2>Skills</h2>
          <hr
            style={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <div>
            <Skills />
          </div>
          <h2>Certifications</h2>
          <hr
            style={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <div>
            <Certifications />
          </div>
          <h2>Languages</h2>
          <hr
            style={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <div>
            <Languages />
          </div>
          <h2>Education</h2>
          <hr
            style={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <div>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
