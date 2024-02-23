import data from "../data/data.json";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Photo from "../assets/images/ffs.png";

const PersonalInfo = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const textContainerStyle = {
    marginLeft: "32px",
    maxWidth: "100%",
    flex: 1,
  };

  const textStyle = {
    overflowWrap: "break-word",
    wordBreak: "break-word",
  };

  return (
    <div style={containerStyle}>
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
          alignItems: "center",
          flexShrink: 0,
          backgroundImage: `url(${Photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div style={textContainerStyle}>
        <h1
          style={{
            ...textStyle,
            fontWeight: "bold",
            fontSize: "2.5rem",
            marginTop: "20px",
          }}
        >
          {data.personal_information.name}
        </h1>
        <h4 style={{ ...textStyle, fontSize: "1.5rem", color: "#949494" }}>
          {data.personal_information.current_position}
        </h4>
        <p style={{ ...textStyle, marginTop: "20px" }}>
          {data.personal_information.about_me}
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "26px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "16px",
              marginTop: "8px",
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
              alignItems: "center",
              marginRight: "16px",
              marginTop: "8px",
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
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
          >
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
