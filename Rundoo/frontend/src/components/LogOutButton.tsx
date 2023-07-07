import React, { useEffect } from "react";
import { logout } from "../actions/auth";
import { connect, useDispatch } from "react-redux";
import { Alert, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface LogOutButtonProps {
  func: any;
}

const LogOutButton: React.FC<LogOutButtonProps> = ({ func }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  // useEffect(() => {
  //   if (isAuthenticated === false || isAuthenticated === null) {
  //     window.alert("You have been logged out");
  //   } else {
  //     window.alert("Something went wrong. Please contact the Help Desk")
  //   }
  // }, [isAuthenticated]);

  const handleLogout = async () => {
    if (isAuthenticated === false || isAuthenticated === null) {
      window.alert("You are already logged out.");
      return;
    }
    await dispatch(func());
    window.alert("You have been logged out");
    navigate("/");
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
};

export default connect(null, { logout })(LogOutButton);
