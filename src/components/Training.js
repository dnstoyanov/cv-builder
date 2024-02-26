import data from "../data/data.json";

const Training = () => {
  return (
    <>
      {data.training.map((course) => (
        <div key={course.id}>
          <div
            style={{ fontSize: "16pt", color: "#268de0", marginTop: "24px" }}
          >
            {course.name}
          </div>
          <div className="text-content">{course.description}</div>
        </div>
      ))}
    </>
  );
};

export default Training;
