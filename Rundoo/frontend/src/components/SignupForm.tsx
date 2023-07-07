import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { styled } from "@mui/system";
import { Stack } from "@mui/system";

export interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  country: string;
  signUpDate: Date;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const onSubmit = (data: FormData) => {
  axios.post("http://localhost:8000/api/suppliers/", data);
};


const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
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

    if (address == "") {
      setAddressError(true);
    }

    if (city == "") {
      setCityError(true);
    }

    if (country == "") {
      setCountryError(true);
    }

    if (name && email && password && address && city && country) {
      axios.post('http://127.0.0.1:8000/...', {
        name: name,
        email: email,
        password: password,
        address: address,
        city: city,
        country: country,
      })
      
    }
    

  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
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
        />
        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
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
        />
        </Stack>
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
      </form>
      {/* <small>Need an account? <Link to="/">Register here</Link></small> */}
    </React.Fragment>
  );
};

export default SignUpForm;


// const SupplierForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     country: "",
//     signUpDate: new Date(),
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container>
//         <Grid item xs={6}>
//           <TextField variant="outlined" label="name" value={formData.name} />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField variant="outlined" label="email" value={formData.email} />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField variant="outlined" label="email" value={formData.email} />
//         </Grid>
//       </Grid>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };