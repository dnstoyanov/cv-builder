import data from "../data/data.json";

const Certifications = () => {
  return (
    <>
      {data.certifications.map((item) => (
        <div key={item.name}>
          <div
            style={{ fontSize: "16pt", color: "#268de0", marginTop: "24px" }}
          >
            {item.name}
          </div>
          <div className="text-content">{item.organisation}</div>
        </div>
      ))}
    </>
  );
};

export default Certifications;
