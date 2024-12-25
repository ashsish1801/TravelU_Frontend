import React, { useState } from 'react';
import axios from 'axios';

const TourForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    price: '',
    rating: '',
    reviews: '',
  });
  const [imageFile, setImageFile] = useState(null); // Separate state for file

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Store the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(); // Create FormData object
    // Append fields to FormData
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('duration', formData.duration);
    data.append('price', formData.price);
    data.append('rating', formData.rating);
    data.append('reviews', formData.reviews);
    data.append('image', imageFile); // Append the file

    try {
      const response = await axios.post('http://localhost:8080/tourismUpload', data, {
        headers: { 'Content-Type': 'multipart/form-data' }, // Required for file uploads
      });
      if (response.status === 200) {
        console.log('Tour created successfully:', response.data);
      }
    } catch (error) {
      console.error('Error creating tour:', error.response?.data || error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Create a Tour</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Title */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image */}
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Other Fields */}
        <div className="form-group">
          <label htmlFor="duration">Duration (days):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (1-5):</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reviews">Reviews:</label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TourForm;
