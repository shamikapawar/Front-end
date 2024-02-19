import React from "react";
import WorkIcon from "@mui/icons-material/Work"; // for workspace
import ApartmentIcon from "@mui/icons-material/Apartment"; // for company
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency"; // customer
import GroupsIcon from "@mui/icons-material/Groups"; // employee
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // profile
import DvrIcon from "@mui/icons-material/Dvr"; // project
import HelpIcon from "@mui/icons-material/Help"; // help
import LogoutIcon from "@mui/icons-material/Logout"; // logout
import { useNavigate } from "react-router-dom";

const Lists = () => {
  const navigate = useNavigate()
  return (
    <div className="lists">
      <ul>
        <li>
          <WorkIcon className="icon" />
          <span>My Workspace</span>
        </li>
        <li>
          <ApartmentIcon className="icon" />
          <span onClick={() => navigate('company')}>Company</span>
        </li>
        <li>
          <ContactEmergencyIcon className="icon" />
          <span onClick={() => navigate('customer')}>Customers</span>
        </li>
        <li>
          <GroupsIcon className="icon" />
          <span>Employee</span>
        </li>
        <li>
          <DvrIcon className="icon" />
          <span>Projects</span>
        </li>
        <li>
          <AccountCircleIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <HelpIcon className="icon" />
          <span>Help</span>
        </li>
        <li>
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Lists;
