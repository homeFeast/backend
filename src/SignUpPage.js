import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Ensure this path matches your project structure
import './AuthPageStyles.css'; // Update the path as necessary for your styling

const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, role, phoneNumber, address } = event.target.elements;
    
    if (!email.value || password.value.length < 6 || !role.value) {
      setError("Please fill all fields correctly and ensure the password is at least 6 characters long.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        email: email.value,
        role: role.value,
        address: address.value,
        number: phoneNumber.value,
      });
      
      console.log("User registered successfully with role:", role.value);
      if (role.value === "customer") {
        navigate("/customer-dashboard");
      } else if (role.value === "seller") {
        navigate("/seller-dashboard");
      } else if (role.value === "delivery") {
        navigate("/delivery-dashboard");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    }
  };

  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required minLength="6" />
        
        <input name="address" type="text" placeholder="Delivery Address" required />
        <input name="phoneNumber" type="number" placeholder="Phone Number" required />
        <select name="role" required defaultValue="">
          <option value="" disabled>Select Role</option>
          <option value="seller">Seller</option>
          <option value="customer">Customer</option>
          <option value="delivery">Delivery Person</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
