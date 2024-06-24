import { Suspense, useEffect, useState } from "react";
import CoursesList from "../components/courses/CoursesList";
import baseUrl from "../api";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchCourses = async () => {
    try {
      const { data } = await baseUrl.get("/home", {
        headers: {
          "ngrok-skip-browser-warning": "69420"
        }
      });
      setCourses(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl text-[#164863] text-center">
        Welcome to <span className="text-4xl font-bold">EduConnect</span>
      </h1>
      {loggedIn && <Suspense fallback={<div>Loading courses...</div>}>
        <CoursesList courses={courses} />
      </Suspense>}
    </div>
  );
};

export default HomePage;
