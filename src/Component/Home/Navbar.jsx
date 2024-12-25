import React, { useState, useEffect } from 'react';
import '../../assets/Style/HomeStyle/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect to check for stored user information
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedUserId = localStorage.getItem('userId');

    if (storedName && storedUserId) {
      setUserName(storedName); // Set the username
      setIsAuthenticated(true); // Mark as authenticated
    }
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">YourLogo</div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-item">Home</a>
          <a href="/services" className="navbar-item">Services</a>
          <a href="/about" className="navbar-item">About Us</a>
          <a href="/testimonial" className="navbar-item">Testimonial</a>
        </div>
        {isAuthenticated ? (
          <div className="navbar-buttons">
            <button className="navbar-button sign-in">{userName}</button>
            <button onClick={handleLogout} className="navbar-button logout">
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-buttons">
            <button onClick={() => navigate('/login')} className="navbar-button sign-in">
              Sign In
            </button>
            <button onClick={() => navigate('/signup')} className="navbar-button sign-up">
              Sign Up
            </button>
          </div>
        )}
        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
