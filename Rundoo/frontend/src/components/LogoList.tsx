import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

interface Logo {
  email: string;
  logo: string;
}

interface LogoListProps {
  user_email: string;
}

const LogoList: React.FC<LogoListProps> = ({ user_email }) => {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/images?email=${user_email}`);
        setLogos(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error); // Handle the error
      }
    };

    fetchLogos();
  }, [user_email, show]);

  return (
    <div>
      <h2>Logos for {user_email}</h2>
      {logos.map((logo) => (
        <div key={logo.email}>
          <img src={require(`../../../backend/supplier_sys${logo.logo}`)} alt="Logo" />
        </div>
       
      ))}
    </div>
  );
};

export default LogoList;