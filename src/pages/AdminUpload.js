import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const AdminUpload = () => {
  const [formData, setFormData] = useState({
    brand: '',
    modelName: '',
    screenSize: '',
    colour: '',
    hardDiskSize: '',
    cpuModel: '',
    ramMemory: '',
    operatingSystem: '',
    graphicsCard: '',
    graphicsCoprocessor: '',
    price: '',
    category: '',
    isPopular: false,
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    images.forEach((img) => {
      data.append('images', img);
    });

    try {
      const res = await axios.post('http://localhost:5000/api/laptops', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Upload successful!');
      setFormData({
        brand: '', modelName: '', screenSize: '', colour: '', hardDiskSize: '',
        cpuModel: '', ramMemory: '', operatingSystem: '', graphicsCard: '',
        graphicsCoprocessor: '', price: '', category: '', isPopular: false
      });
      setImages([]);
    } catch (err) {
      console.error(err);
      alert('Upload failed!');
    }
  };

  return (
    <>
      <Navbar></Navbar>
    <div className="container mt-5">
      <h2>Admin Laptop Upload</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          {[
            'brand', 'modelName', 'screenSize', 'colour',
            'hardDiskSize', 'cpuModel', 'ramMemory',
            'operatingSystem', 'graphicsCard', 'graphicsCoprocessor',
            'price'
          ].map((field, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <label className="form-label">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          ))}

          {/* Dropdown for Category */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Category</option>
              <option value="gaming">Gaming</option>
              <option value="student">Student Essential</option>
              <option value="pro">Professional</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Popular</label>
            <div className="form-check">
              <input
                type="checkbox"
                name="isPopular"
                checked={formData.isPopular}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Mark as Popular</label>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Images (multiple allowed)</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Upload Product</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default AdminUpload;
