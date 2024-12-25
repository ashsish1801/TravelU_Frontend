import React from 'react';
import "../../assets/Style/HomeStyle/BothComponent.css"
import tourismPhoto from '../../assets/Images/newtoursim.jpg';
import foodPhoto from '../../assets/Images/foodPhoto.jpg'

const TourismShowcase = () => {
  return (
    <div className="tourism-container">
      <div className="tourism-card">
        <div className="image-container culinary">
            <img src={tourismPhoto} alt="" />
          <div className="overlay">
            <h2>Travelling for Travellers</h2>
            <button className="explore-btn">Explore Culinary Tours</button>
          </div>
        </div>
      </div>

      <div className="tourism-card">
        <div className="image-container beach">
            <img src={foodPhoto} alt="" />
          <div className="overlay">
            <h2>Food for Foodies</h2>
            <button className="explore-btn">Discover Beach Getaways</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismShowcase;
