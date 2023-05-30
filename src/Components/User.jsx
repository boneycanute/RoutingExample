import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function User() {
  const value = useParams();
  console.log("useParams() : ", value);
  const user = useLocation().state;
  console.log("useLocation() : ", user);
  const navigate = useNavigate();
  return (
    <div>
      <p>ID : {user.id}</p>
      <p>ID : {user.name}</p>
      <p>ID : {user.username}</p>
      <p>ID : {user.email}</p>
      <p>ID : {user.phone}</p>
      <p>ID : {user.website}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default User;
