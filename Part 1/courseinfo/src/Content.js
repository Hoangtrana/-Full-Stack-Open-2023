const Content = ({ data }) => {
  const listCourses = data.map((course) => (
    <li key={course.name}>
      {course.name} {course.exercises}
    </li>
  ));
  return <div>{listCourses}</div>;
};

export default Content;
