import React from "react";
import FilterCourses from "../components/courses/FilterCourses";

const ResourcesPage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-[300px_1fr]">
        <FilterCourses />
      </div>
    </div>
  );
};

export default ResourcesPage;
