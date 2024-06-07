import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import Loader from "./Loader";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    // Simulate async operation (e.g., fetching data)
    const delay = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
      navigate("/about");
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(delay); // Clean up timeout
  }, [navigate]);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div className="container-fluid">
      {/* Render loader if loading */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isMobile ? <SmallHeader /> : <Header />}
          <Outlet />
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
};

export default Home;
