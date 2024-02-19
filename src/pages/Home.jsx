import React from "react";
import Sidebar from "../Component/Sidebar";
import Mainpage from "../Component/Mainpage";


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar></Sidebar>
        <Mainpage></Mainpage>
        
      </div>
    </div>
  );
};

export default Home;
