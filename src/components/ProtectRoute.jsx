import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, []);

  return children;
};

export default ProtectRoute;
