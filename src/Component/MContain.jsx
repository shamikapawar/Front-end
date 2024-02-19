import React from "react";
import Profile from "../pages/Profile";
import Company from "../pages/Company";
import Customer from "../pages/Customer";
import { Route,Routes } from "react-router-dom";


const MContain = () => {
  return (
    <div>
      <Profile/>
      {/* <Company /> */}
      {/* <Routes>
      <Route path="customer" element={<Customer/>}></Route>
      </Routes> */}
      
    </div>
  );
};

export default MContain;
