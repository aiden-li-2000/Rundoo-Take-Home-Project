import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Alert,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { login } from "../actions/auth";

interface PopUpLoginFormProps {
  open: boolean;
  func: any;
  isAuthenticated: boolean | null;
}

const PopUpLoginForm: React.FC<PopUpLoginFormProps> = ({
  open,
  func,
  isAuthenticated,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [openLocal, setOpenLocal] = useState(open);
  const [loginError, setLoginError] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("login");
  // const handleOpen = () => {
  //   setOpenLocal(true);
  // };
  // console.log(open, openLocal);

  useEffect(() => {
    if (isAuthenticated === true) {
      console.log("login success");
      setLoginError(0);
      setOpenLocal(false);
      // navigate("/logged-in");
    } else if (isAuthenticated === false) {
      // console.log("login error");
      setLoginError(2);
    }
  }, [isAuthenticated]);

  const onClose = () => {
    setOpenLocal(false);
    navigate(-1);
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      // console.log(email, password);
      await dispatch(func(email, password));
    }
  };

  return (
    <Dialog open={openLocal} onClose={onClose}>
      {/* {loginError === 0 && (
        <Snackbar
          open
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success">Logged in successfully</Alert>
        </Snackbar>
      )}
      {loginError === 2 && (
        <Snackbar
          open
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="error">Invalid Credentials</Alert>
        </Snackbar>
      )} */}
      <DialogTitle sx={{ textAlign: "center" }}>Log in</DialogTitle>
      <DialogContent>
        {/* <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          required
        /> */}
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
        />
        {/* <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        /> */}
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
          sx={{ mb: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button onClick={onClose}>Cancel</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={(e) => handleLogin(e)}>
              Login
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
      <p className="lf-p1">
        Forgot your Password? <Link to="/reset-password">Reset Password</Link>
      </p>
      <p className="lf-p2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Dialog>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(PopUpLoginForm);
