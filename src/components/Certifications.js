import data from "../data/data.json";

const Certifications = () => {
  return (
    <>
      {data.certifications.map((item) => (
        <div key={item.name}>
          <div
            style={{ fontSize: "18px", color: "#ebb400", marginTop: "24px" }}
          >
            {item.name}
          </div>
          {item.organisation}
        </div>
      ))}
    </>
  );
};

export default Certifications;
