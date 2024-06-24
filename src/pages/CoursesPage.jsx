import React from "react";
import CoursesList from "../components/courses/CoursesList";
import CourseContent from "../components/courses/CourseContent";
import { useSearchParams } from 'react-router-dom';

const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  
  // Extracting query parameters
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const imgSrc = searchParams.get('imgSrc');
  const materialsURL = searchParams.get('materialsURL');
  const syllabusURL = searchParams.get('syllabusURL');
  const ytURL = searchParams.get('ytURL');
  
  // Checking if there are any query parameters
  const hasQueryParams = title || description || imgSrc || materialsURL || syllabusURL || ytURL;

  return (
    <div className="container">
      {/* <CoursesList /> */}
      {hasQueryParams ? (
        <CourseContent 
          title={title}
          description={description}
          imgSrc={imgSrc}
          materialsURL={materialsURL}
          syllabusURL={syllabusURL}
          ytURL={ytURL}
        />
      ) : <div>Please choose a course from home page.</div>}
    </div>
  );
};

export default CoursesPage;
