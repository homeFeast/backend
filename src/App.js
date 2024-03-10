import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
// Import the specific dashboard components
import SellerDashboard from './SellerDashboard';
import CustomerDashboard from './CustomerDashboard';
import DeliveryDashboard from './DeliveryDashboard';
import { SellerTemplate } from './SellerTemplate';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Update the dashboard routes */}
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
          <Route path="/seller-template" element={<SellerTemplate/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
