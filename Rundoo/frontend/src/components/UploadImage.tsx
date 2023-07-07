import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

interface ImageUploadProps {
  user_email: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ user_email }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('logo', selectedImage);
      formData.append('email', user_email);
      
      try {
        const response = await axios.post('http://localhost:8000/api/images/', formData);
        console.log(response.data); // Handle the response as needed
        window.alert("Upload successful")
      } catch (error) {
        window.alert("Upload failed")
        console.error(error); // Handle the error
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <Button variant="contained" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default ImageUpload;