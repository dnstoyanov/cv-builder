import data from "../data/data.json";
import ProfilePic from "../assets/images/ffs.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const PersonalInfo = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <img
        src={ProfilePic}
        alt="Profile"
        style={{
          width: "200px",
          borderRadius: "50%",
          height: "200px",
          border: "18px solid #444",
          WebkitBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
          MozBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
          boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <div style={{ marginLeft: "32px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
          {data.personal_information.name}
        </h1>
        <h4 style={{ fontSize: "1.5rem" }}>
          {data.personal_information.current_position}
        </h4>
        <p style={{ marginTop: "24px" }}>
          {data.personal_information.about_me}
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "16px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "16px",
            }}
          >
            <FaGithub
              size={25}
              style={{ color: "#ebb400", marginRight: "8px" }}
            />
            <a
              href={data.personal_information.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.personal_information.github_url}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "16px",
            }}
          >
            <FaLinkedin
              size={25}
              style={{ color: "#ebb400", marginRight: "8px" }}
            />
            <a
              href={data.personal_information.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.personal_information.linkedin_url}
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FiMail
              size={25}
              style={{ color: "#ebb400", marginRight: "8px" }}
            />
            <a
              href={`mailto:${data.personal_information.email_address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.personal_information.email_address}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
