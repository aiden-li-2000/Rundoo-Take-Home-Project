import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import rootReducer from "../reducers"
import { Typography, Box } from "@mui/material";
import ImageUpload from "./UploadImage";
import LogoList from "./LogoList";

export const LoggedIn = () => {
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {}, [user]);

  return (
    <>
      {user !== null && (
        <Box sx={{ marginLeft: "300px" }}>
          <Typography variant="h6">Supplier Information:</Typography>
          <Typography>Name: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Address: {user.address}</Typography>
          <Typography>City: {user.city}</Typography>
          <Typography>Country: {user.country}</Typography>
          <ImageUpload user_email={user.email} />
          <LogoList user_email={user.email} />
        </Box>

      )}
      {user === null && (
        <Box sx={{ marginLeft: "300px" }}>
          <Typography variant="h6">Please log in first</Typography>
        </Box>
      )}
    </>
  );
};
