import data from "../data/data.json";

const Languages = () => {
  return (
    <>
      {data.languages.map((item) => (
        <div key={item.id}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "24px",
            }}
          >
            <div style={{ fontSize: "18px", color: "#afcf46" }}>
              {item.name}
            </div>
            <div>{item.level}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Languages;
