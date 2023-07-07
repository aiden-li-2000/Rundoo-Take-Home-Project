import { Outlet, NavLink } from "react-router-dom";
import Home from "./Home";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { load_user, checkAuthenticated } from "../actions/auth";
import React from "react";
import { connect } from "react-redux";

interface RootLayoutProps {
  func1: any;
  func2: any;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  func1,
  func2,
}) => {
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(func1());
  //   dispatch(func2());
  // }, []);

  return (
    <div className="root-layout">
      <header>
        <Home></Home>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const ConnectedRootLayout = connect(null, { load_user, checkAuthenticated })(
  RootLayout
);
export default ConnectedRootLayout;
