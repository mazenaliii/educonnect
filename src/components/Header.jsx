import { useLayoutEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLogin(false);
    navigate("/auth/sign-in");
  };

  return (
    <header className="sticky top-0 w-full bg-[#cee2e5] text-[#164863] py-4 min-h-20 flex items-center">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="logo" />
            <h3 className="uppercase font-bold">EduConnect</h3>
          </div>
          <ul className="flex justify-center items-center gap-4">
            <li className={pathname === "/" ? "font-bold underline" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li
              className={pathname === "/courses" ? "font-bold underline" : ""}
            >
              <Link to="/courses">Courses</Link>
            </li>
            <li
              className={pathname === "/resources" ? "font-bold underline" : ""}
            >
              <Link to="/resources">Resources</Link>
            </li>
            <li
              className={pathname === "/chatbot" ? "font-bold underline" : ""}
            >
              <Link to="/chatbot">Chat Bot</Link>
            </li>
          </ul>

          {isLogin ? (
            <div className="flex justify-center items-center gap-4 text-white">
              <button
                type="button"
                className="text-[#164863] font-bold text-xl"
                onClick={handleLogout}
              >
                Logout
              </button>
              <img src="/images/profile.png" alt="profile" />
            </div>
          ) : (
            <div className="flex justify-center items-center gap-8 text-white">
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
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
