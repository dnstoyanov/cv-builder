import data from "../data/data.json";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Photo from "../assets/images/FFS.png";

const PersonalInfo = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "18px solid #444",
          WebkitBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
          MozBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
          boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexShrink: 0,
          backgroundImage: `url(${Photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div style={{ marginLeft: "32px" }}>
        <h1
          style={{ fontWeight: "bold", fontSize: "2.5rem", marginTop: "20px" }}
        >
          {data.personal_information.name}
        </h1>
        <h4 style={{ fontSize: "1.5rem", color: "#949494" }}>
          {data.personal_information.current_position}
        </h4>
        <p style={{ marginTop: "20px" }}>
          {data.personal_information.about_me}
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "26px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginRight: "16px",
            }}
          >
            <FaGithub
              size={25}
              style={{ color: "#afcf46", marginRight: "8px" }}
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
              alignItems: "flex-start",
              marginRight: "16px",
            }}
          >
            <FaLinkedin
              size={25}
              style={{ color: "#afcf46", marginRight: "8px" }}
            />
            <a
              href={data.personal_information.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.personal_information.linkedin_url}
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <FiMail
              size={25}
              style={{ color: "#afcf46", marginRight: "8px" }}
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
