import data from "../data/data.json";
import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
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
    <div>
      <div style={containerStyle}>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "18px solid #268de0",
            // WebkitBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
            // MozBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
            // boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
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
          <div
            className="text-content"
            style={{ ...textStyle, marginTop: "20px" }}
          >
            {data.personal_information.about_me}
          </div>
        </div>
      </div>

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
            marginTop: "8px",
          }}
        >
          <FaGithub
            size={25}
            style={{ color: "#268de0", marginRight: "8px" }}
          />
          <a
            href={data.personal_information.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-content">
              {data.personal_information.github_url}
            </div>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "16px",
            marginTop: "8px",
          }}
        >
          <FaLinkedin
            size={25}
            style={{ color: "#268de0", marginRight: "8px" }}
          />
          <a
            href={data.personal_information.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-content">
              {data.personal_information.linkedin_url}
            </div>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            // marginLeft: "16px",
          }}
        >
          <FiMail size={25} style={{ color: "#268de0", marginRight: "8px" }} />
          <a
            href={`mailto:${data.personal_information.email_address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-content">
              {data.personal_information.email_address}
            </div>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            marginLeft: "16px",
          }}
        >
          <FaPhoneSquareAlt
            size={25}
            style={{ color: "#268de0", marginRight: "8px" }}
          />

          <div className="text-content">{data.personal_information.phone}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            marginLeft: "16px",
          }}
        >
          <TiLocation
            size={25}
            style={{ color: "#268de0", marginRight: "8px" }}
          />
          <div className="text-content">
            {data.personal_information.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
