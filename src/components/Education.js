import data from "../data/data.json";
import { FaRegCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <>
      {data.education.map((item) => (
        <div key={item.id}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "16pt",
                color: "#268de0",
                textTransform: "uppercase",
                marginTop: "24px",
              }}
            >
              {item.place}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", lineHeight: 1 }}
              >
                <FaRegCalendarAlt
                  size={16}
                  style={{ color: "#268de0", marginRight: "4px" }}
                />
                <span style={{ fontSize: "15px" }}>{item.start_date}</span>
                <span style={{ margin: "0 4px" }}>-</span>
                <span style={{ fontSize: "15px" }}>{item.end_date}</span>
              </div>
            </div>
          </div>
          <div className="text-content" style={{ marginTop: "24px" }}>
            {item.degree}
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;
