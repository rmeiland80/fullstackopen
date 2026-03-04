// https://fullstackopen.com/en/part1/java_script

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name}
      {part.exercise}
    </p>
  );
};

const Content = ({ course }) => {
  const { parts } = course;

  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  );
};

const Total = ({ course }) => {
  const { parts } = course;
  const [exercise1, exercise2, exercise3] = parts.map((part) => part.exercise);
  return <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamtentals of React", exercise: 10 },
      { name: "Using props to pass", exercise: 7 },
      { name: "State of a component", exercise: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
