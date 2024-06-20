import React from "react";
import CoursesList from "../components/courses/CoursesList";
import CourseContent from "../components/courses/CourseContent";

const CoursesPage = () => {
  return (
    <div className="container">
      <CoursesList />
      <CourseContent />
    </div>
  );
};

export default CoursesPage;
