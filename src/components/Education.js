import data from "../data/data.json";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <>
      {data.education.map((item) => (
        <div key={item.id}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                color: "#afcf46",
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
                marginTop: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaRegCalendarAlt
                  size={14}
                  style={{ color: "#afcf46", marginRight: "4px" }}
                />
                <span style={{ fontSize: "14px" }}>{item.start_date}</span>
                <span style={{ margin: "0 4px" }}>-</span>
                <span style={{ fontSize: "14px" }}>{item.end_date}</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "8px" }}>{item.degree}</div>
        </div>
      ))}
    </>
  );
};

export default Education;
