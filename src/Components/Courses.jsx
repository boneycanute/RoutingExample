import React from "react";
import { Link, Outlet } from "react-router-dom";

function Courses() {
  return (
    <div className="page">
      Courses
      <Link to="/courses/mongo" className="Links">
        MongoDb
      </Link>
      <Link to="/courses/express" className="Links">
        Express
      </Link>
      <Link to="/courses/react" className="Links">
        React
      </Link>
      <Link to="/courses/node" className="Links">
        NodeJS
      </Link>
      <h1>Component</h1>
      <Outlet />
    </div>
  );
}

export default Courses;
