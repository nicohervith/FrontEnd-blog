import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Navbar = ({ user }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="navigation">
      <span className="menu-title">Blog</span>
      <div className={`menu-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={36}
          />
          <span className="avatar-name">{`${user.firstName} ${user.lastName} `}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
};

export default Navbar;
