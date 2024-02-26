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
    <div className="print-wrapper">
      <div
        id="cv-page"
        style={{
          // padding: "20px",
          // backgroundColor: "#313131",
          backgroundColor: "#fff",
          marginLeft: "auto",
          marginRight: "auto",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          // width: "100%",
          width: "210mm",
        }}
      >
        <div
          className="section"
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <PersonalInfo />
          <div style={{ marginTop: "45px" }}>
            <h2>Skills</h2>
            <hr
              style={{
                backgroundColor: "white",
                height: "0",
                borderBottom: "0.5px solid white",
              }}
            />
            <Skills />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="section">
            <h2>Professional Experience</h2>
            <hr
              style={{
                backgroundColor: "white",
                height: "0",
                borderBottom: "0.5px solid white",
              }}
            />
            <WorkExp />
          </div>
          <div className="section">
            <div>
              <h2>Certifications</h2>
              <hr
                style={{
                  backgroundColor: "white",
                  height: "0",
                  borderBottom: "0.5px solid white",
                }}
              />
              <Certifications />
            </div>
            <div style={{ marginTop: "50px" }}>
              <h2>Training / Courses</h2>
              <hr
                style={{
                  backgroundColor: "white",
                  height: "0",
                  borderBottom: "0.5px solid white",
                }}
              />
              <Training />
            </div>
            <div style={{ marginTop: "50px" }}>
              <h2>Languages</h2>
              <hr
                style={{
                  backgroundColor: "white",
                  height: "0",
                  borderBottom: "0.5px solid white",
                }}
              />
              <Languages />
            </div>
            <div style={{ marginTop: "50px" }}>
              <h2>Education</h2>
              <hr
                style={{
                  backgroundColor: "white",
                  height: "0",
                  borderBottom: "0.5px solid white",
                }}
              />
              <Education />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
