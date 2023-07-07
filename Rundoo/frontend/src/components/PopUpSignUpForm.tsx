import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Input,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Stack } from "@mui/system";
import { signup } from "../actions/auth";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  country: string;
}

interface PopUpLoginFormProps {
  open: boolean;
  func: any;
}

const PopUpSignUpForm: React.FC<PopUpLoginFormProps> = ({ open, func }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [openLocal, setOpenLocal] = useState(open);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClose = () => {
    setOpenLocal(false);
    navigate(-1);
  };

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setRePasswordError(false);
    setAddressError(false);
    setCityError(false);
    setCountryError(false);

    if (name == "") {
      setNameError(true);
    }

    if (email == "") {
      setEmailError(true);
    }

    if (password == "") {
      setPasswordError(true);
    }

    if (re_password == "") {
      setRePasswordError(true);
    }

    if (address == "") {
      setAddressError(true);
    }

    if (city == "") {
      setCityError(true);
    }

    if (country == "") {
      setCountryError(true);
    }

    if (
      name &&
      email &&
      password &&
      re_password &&
      address &&
      city &&
      country
    ) {
      console.log(
        email,
        name,
        address,
        city,
        country,
        password,
        re_password
      );
      if (password === re_password) {
        const success = await dispatch(
          func(email, name, address, city, country, password, re_password)
        );
        if (!success) {
          window.alert("Sign up failed. Please try again.");
        } else {
          window.alert("Sign up successful. Please log in.");
          setOpenLocal(false);
          navigate("/log-in-popup");
        }
      } else {
        window.alert("Passwords do not match");
      }
    }
  };

  return (
    <Dialog open={openLocal} onClose={onClose}>
      <DialogTitle sx={{ textAlign: "center" }}>Sign up</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="name"
          sx={{ mb: 3 }}
          fullWidth
          value={name}
          error={nameError}
          margin="normal"
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
          margin="normal"
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
          margin="normal"
        />
        <TextField
          label="Re-Password"
          onChange={(e) => setRePassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={re_password}
          error={rePasswordError}
          fullWidth
          sx={{ mb: 3 }}
          margin="normal"
        />
        <TextField
          label="Address"
          onChange={(e) => setAddress(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="address"
          sx={{ mb: 3 }}
          fullWidth
          value={address}
          error={addressError}
          margin="normal"
        />
        <TextField
          label="City"
          onChange={(e) => setCity(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="city"
          sx={{ mb: 3 }}
          fullWidth
          value={city}
          error={cityError}
          margin="normal"
        />
        <TextField
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="country"
          sx={{ mb: 3 }}
          fullWidth
          value={country}
          error={countryError}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={(e) => handleSignUp(e)}>
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(null, { signup })(PopUpSignUpForm);
