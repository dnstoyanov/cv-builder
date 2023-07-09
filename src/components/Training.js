import data from "../data/data.json";

const Training = () => {
  return (
    <>
      {data.training.map((course) => (
        <div key={course.id}>
          <div
            style={{ fontSize: "18px", color: "#ebb400", marginTop: "24px" }}
          >
            {course.name}
          </div>
          <div>{course.description}</div>
        </div>
      ))}
    </>
  );
};

export default Training;
