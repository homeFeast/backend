import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { storage } from './firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { realtimedb } from './firebase';
import { ref, push, set } from "firebase/database";

export function SellerTemplate({ userDataItem, onSave }) {
  const [businessInfo, setBusinessInfo] = useState({
    businessName: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setBusinessInfo(prev => ({
        ...prev,
        image: e.target.files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the image to Firebase Storage first
    if (businessInfo.image) {
        const imageRef = storageRef(storage, `images/${businessInfo.image.name}`);
        const snapshot = await uploadBytes(imageRef, businessInfo.image);
        const downloadURL = await getDownloadURL(snapshot.ref);
    
        const newBusinessRef = push(ref(realtimedb, 'businesses'));
        set(newBusinessRef, {
          businessName: businessInfo.businessName,
          description: businessInfo.description,
          imageUrl: downloadURL,
        }).then(() => {
          onSave(); // Handle the post-save logic
        }).catch((error) => {
          console.error("Error saving data: ", error);
        });
      } else {
        console.log("No image selected");
      }
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter business name"
          name="businessName"
          value={businessInfo.businessName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe your business"
          name="description"
          value={businessInfo.description}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Image Upload Field */}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" onChange={handleImageChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}
