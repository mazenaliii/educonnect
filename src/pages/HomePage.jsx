import { Suspense, useEffect, useState } from "react";
import CoursesList from "../components/courses/CoursesList";
import baseUrl from "../api";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [courses, setCourses] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchCourses = async () => {
    try {
      const { data } = await baseUrl.get("/home");
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      setLoggedIn(true)
    }
  })

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl text-[#164863] text-center">
        Welcome to <span className="text-4xl font-bold">EduConnect</span>
      </h1>
      {
        loggedIn ? <CoursesList courses={courses} /> : (
          <div className="flex justify-center items-center gap-8 text-white mt-[50px]">
              <Link
                to="/auth/sign-in"
                className="py-2 px-4 text-[#164863] rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/auth/sign-up"
                className="py-2 px-4 bg-[#164863] rounded-lg"
              >
                Register
              </Link>
            </div>
        )
      }
    </div>
  );
};

export default HomePage;
