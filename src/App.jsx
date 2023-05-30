import React from "react";
import Logo from "./Images/favorite.png";
import "./mystyles.css";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import About from "./Components/About";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Mongo from "./Components/Mongo";
import ExpressJS from "./Components/Express";
import ReactJS from "./Components/ReactJS";
import NodeJS from "./Components/NodeJS";
import NotFound from "./Components/NotFound";
import User from "./Components/User";

function App() {
  const Mystyles = {
    height: "50px",
    width: "50px",
  };
  return (
    <>
      <div className="navBar">
        <img src={Logo} className="logo" style={Mystyles}></img>
        <div className="links">
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "green" } : { color: "red" };
            }}
          >
            Home
          </NavLink>
          <NavLink
            className="link"
            to="/courses"
            style={({ isActive }) => {
              return isActive ? { color: "green" } : { color: "red" };
            }}
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return isActive ? { color: "green" } : { color: "red" };
            }}
          >
            {({ isActive }) => {
              return isActive ? (
                <p>Active About us</p>
              ) : (
                <p>Inactive About us</p>
              );
            }}
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="mongo" element={<Mongo />} />
          <Route path="express" element={<ExpressJS />} />
          <Route path="react" element={<ReactJS />} />
          <Route path="node" element={<NodeJS />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
