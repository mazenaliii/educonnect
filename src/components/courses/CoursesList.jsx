import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";

const CoursesList = ({ courses }) => {
  const navigate = useNavigate();

  const onClick = (course) => {
    navigate(`/courses?title=${course.title}&description=${course.description}&imgSrc=${course.image}&materialsURL=${course.materials_url}&ytURL=${course.link}`);
  };

  const renderCourseCards = () => {
    return courses.map((course, index) => (
      <CourseCard
        key={course.id}
        course={course}
        title={course.title}
        description={course.description}
        imgSrc={course.image}
        onClick={() => onClick(course)}
      />
    ));
  };

  return (
    <div className="flex flex-wrap gap-8 mt-[100px] justify-center">
      {renderCourseCards()}
    </div>
  );
};

export default CoursesList;
