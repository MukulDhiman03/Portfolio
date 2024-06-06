import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about");
  }, []);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div className="container-fluid">
      {isMobile ? <SmallHeader /> : <Header />}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
