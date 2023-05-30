import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const kuchTohFunction = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      kuchTohFunction("/");
    }, 5000);
  }, []);
  return <div>NotFound</div>;
}

export default NotFound;
