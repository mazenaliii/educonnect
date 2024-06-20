import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  if (location.pathname.startsWith("/auth")) {
    return <div>{children}</div>;
  }

  const showFooter = !location.pathname.startsWith("/chatbot")

  return (
    <html>
      <body>
        <Header />
        <main className="my-14">{children}</main>
      </body>
      {showFooter && <Footer />}
    </html>
  );
};

export default Layout;
