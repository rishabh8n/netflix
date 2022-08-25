import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [IsScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <div className={IsScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
          />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>Recently Added</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-5-2.jpg"
            alt="profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
