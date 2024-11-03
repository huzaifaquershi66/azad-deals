import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUpload, faMobileAlt, faHome, faCar, faGraduationCap,faMapMarkerAlt,faLocationDot,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cities from './header/cites';
import { useCallback } from 'react';

const uniqueCities = Array.from(new Set(cities));
const PlaceAdd = () => {
  const [category, setCategory] = useState('Mobiles');
  const [filteredCities, setFilteredCities] = useState(uniqueCities);
  const [toggleform, settoggleform] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [showCities, setshowCities] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    titleImage: null,
    additionalImages: [],
    brand: '',
    model: '',
    storage: '',
    condition: 'New',
    propertyType: '',
    carMake: '',
    carYear: '',
    subject: '',
  });

  const mobileBrands = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'Nokia', 'Others'];
  const defaultImage = 'https://via.placeholder.com/360x240?text=Default+Image';
  const categories = [
    { name: 'Mobiles', icon: faMobileAlt },
    { name: 'Property', icon: faHome },
    { name: 'Cars', icon: faCar },
    { name: 'Academics', icon: faGraduationCap },
  ];

  useEffect(() => {
    resetForm();
  }, [category]);

  useEffect(() => {
    console.log("Mounting component, setting filteredCities to uniqueCities");
    setFilteredCities(uniqueCities); // Set default cities
    console.log("Filtered Cities after set: ", uniqueCities);
  }, [uniqueCities]);

  const handleInputClick = () => {
    setshowCities((prev) => !prev);  };

 

  // Handle search input change
 // Handle search input change
 const handleSearchChange = useCallback((e) => {
  const term = e.target.value;
  setSearchTerm(term);
  
  if (term) {
    const filtered = uniqueCities.filter((city) =>
      city.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCities(filtered);
    setshowCities(true);
  } else {
    setFilteredCities(uniqueCities);
    setshowCities(false);
  }
}, [uniqueCities]);

// City select karne ke baad filteredCities reset kar dete hain
const handleCityClick = (city) => {
  setSearchTerm(city);
  setFilteredCities(uniqueCities); 
  setshowCities(false);
};

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      location: '',
      titleImage: null,
      additionalImages: [],
      brand: '',
      model: '',
      storage: '',
      condition: 'New',
      propertyType: '',
      carMake: '',
      carYear: '',
      subject: '',
    });
  };

  const handleCategorySelect = (cat) => {
    if (cat !== category) {
      // Optional: Confirm reset if there's existing data
      resetForm();
    }
    setCategory(cat);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, isTitleImage = false) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));

    setFormData(prev => ({
      ...prev,
      [isTitleImage ? 'titleImage' : 'additionalImages']: isTitleImage 
        ? imageUrls[0] // For title image, take the first one
        : [...prev.additionalImages, ...imageUrls.slice(0, 4 - prev.additionalImages.length)], // Limit additional images to 4
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if necessary
    alert("Ad posted successfully!");
  };

  const renderCategoryFields = () => {
    switch (category) {
      case 'Mobiles':
        return (
          <>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="input-style"
            >
              <option value="">Select Mobile Brand</option>
              {mobileBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              placeholder="Mobile Model"
              className="input-style"
            />
            <input
              type="text"
              name="storage"
              value={formData.storage}
              onChange={handleInputChange}
              placeholder="Storage (e.g., 64GB, 128GB)"
              className="input-style"
            />
            <select
              name="condition"
              value={formData.condition}
              onChange={handleInputChange}
              className="input-style"
            >
              <option value="New">New</option>
              <option value="Old">Old</option>
            </select>
          </>
        );
      case 'Property':
        return (
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            placeholder="Property Type (e.g., Apartment, Villa)"
            className="input-style"
          />
        );
      case 'Cars':
        return (
          <>
            <input
              type="text"
              name="carMake"
              value={formData.carMake}
              onChange={handleInputChange}
              placeholder="Car Make (e.g., Toyota)"
              className="input-style"
            />
            <input
              type="text"
              name="carYear"
              value={formData.carYear}
              onChange={handleInputChange}
              placeholder="Car Year"
              className="input-style"
            />
          </>
        );
      case 'Academics':
        return (
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject (e.g., Mathematics)"
            className="input-style"
          />
        );
      default:
        return null;
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-5 sm:p-10">
<div className="w-full md:px-10 px-0 flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden">

    {/* Left Side: Ad Form */}
    <div className="w-full md:w-2/3 p-8 sm:p-12 text-gray-800 flex flex-col bg-white rounded-3xl shadow-lg border border-gray-200 transition duration-300 transform hover:scale-105">
        <h2 className="text-5xl font-roboto font-extrabold text-center mb-8 text-blue-600 tracking-wide uppercase shadow-md">
            Post Your Ad
        </h2>

        {/* Category Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(({ name, icon }) => (
                <button
                    key={name}
                    onClick={() => handleCategorySelect(name)}
                    className={`flex items-center justify-center px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-transform duration-300 
                        ${category === name 
                            ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-xl transform scale-110' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:text-white hover:shadow-md hover:scale-105'}`}
                    title={`Select ${name}`} // Tooltip for user guidance
                >
                    <FontAwesomeIcon icon={icon} className="mr-3 text-xl" />
                    {name}
                </button>
            ))}
        </div>

        {/* Ad Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title Input */}
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Ad Title"
                className="input-style w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
            />

            {/* Description Input */}
            <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Ad Description"
                rows="4"
                className="input-style w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
            />

            {/* Dynamic Fields */}
            {renderCategoryFields()}

            {/* Price Input */}
            <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price (in Rs)"
                className="input-style w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
            />
<div className='flex items-center bg-gray-50 border-gray-300 relative w-full md:w-[100%]'>
      <div className='relative w-full'>
        <input
          type='text'
          readOnly
          placeholder='Select City'
          onClick={handleInputClick}
          className='h-12 w-full rounded-lg pl-10 font-helveticaLight  cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 border-[1px] border-gray-300 transition duration-200'
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform duration-300 hover:scale-110'
        />
        <FontAwesomeIcon icon={faAngleDown} className='absolute right-3 text-gray-400 mt-4 transition-transform duration-300 hover:scale-110' />

        {showCities && (
          <div className='absolute inset-0 top-[-240px] border-[1px] border-gray-300 left-0 md:w-[450px] max-w-[400px] h-60 rounded-lg z-50 bg-white p-2 shadow-md'>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className='h-12 w-full rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 border-[1px] border-gray-300 transition duration-200'
            />
            <div className='h-[180px] overflow-y-auto'>
              <div className='px-2 space-y-2 color4 font-sans'>
                <ul>
                  {filteredCities.map((city, index) => (
                    <li 
                      key={index} 
                      onClick={() => handleCityClick(city)} 
                      className='cursor-pointer hover:bg-gray-100 rounded p-1'
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
            {/* Location Input */}
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="input-style w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
            />

            {/* Title Image Upload */}
            <div className="mb-6 flex justify-center">
                <input
                    type="file"
                    onChange={(e) => handleImageChange(e, true)}
                    className="hidden"
                    id="title-image-upload"
                    accept="image/*"
                />
                <label
                    htmlFor="title-image-upload"
                    className="flex items-center cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 rounded-full p-4 shadow-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 transform hover:scale-105"
                >
                    <FontAwesomeIcon icon={faCamera} className="mr-2 text-white" />
                    <span className="text-white">Upload Title Image</span>
                </label>
            </div>

            {/* Additional Images Upload */}
            <div className="mb-6 flex justify-center">
                <input
                    type="file"
                    onChange={(e) => handleImageChange(e, false)}
                    className="hidden"
                    id="additional-images-upload"
                    multiple
                    accept="image/*"
                />
                <label
                    htmlFor="additional-images-upload"
                    className="flex items-center cursor-pointer bg-gradient-to-r from-green-500 to-lime-600 rounded-full p-4 shadow-lg hover:from-green-600 hover:to-lime-700 transition duration-300 transform hover:scale-105"
                >
                    <FontAwesomeIcon icon={faUpload} className="mr-2 text-white" />
                    <span className="text-white">Upload Additional Images (Max 4)</span>
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-full py-4 text-lg font-bold shadow-lg hover:from-purple-800 hover:to-purple-900 hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
                Post Ad
            </button>
        </form>
    </div>

    {/* Right Side: Live Preview */}
    <div className="relative w-full md:w-1/3 bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200 transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-3xl hover:border-purple-500/50 md:mx-4 lg:mx-8">
        {/* Live Preview Badge with Pulse Effect */}
        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold bg-gradient-to-r from-purple-700 to-purple-900 rounded-full px-4 py-2 shadow-md z-20 transition-transform duration-200 hover:scale-110 animate-pulse">
            Live Preview
        </span>

        {/* Frosted Glass Effect for Content Wrapper */}
        <div className="border border-transparent rounded-xl p-1 animate-gradient backdrop-blur-lg">
            <div className="border border-gray-300 rounded-xl p-6 bg-white bg-opacity-90 shadow-inner">

                {/* Image with Overlay and 3D Hover Effect */}
                <div className="relative mb-6 transform transition-transform duration-300 ease-in-out hover:-rotate-1 hover:scale-105">
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div className="bg-gray-800 opacity-40 h-full"></div>
                    </div>
                    <img
                        src={formData.titleImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE789NtlOwrGK3Tuby_0mYilvCEZVUmwjfCg&s"}
                        alt="Title Preview"
                        className="relative w-full h-48 rounded-xl shadow-lg border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1" 
                    />
                </div>

                {/* Title */}
                <h4 className="text-3xl font-bold mb-2 text-center text-purple-900 tracking-wide shadow-md">
                    {formData.title || 'Your Title'}
                </h4>

                {/* Description */}
                <p className="text-gray-700 text-center mb-4 text-lg italic">
                    {formData.description || 'Your Description'}
                </p>

                {/* Price with Gradient and Shadow */}
                <p className="text-xl font-semibold text-center text-purple-800 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent shadow-md">
                    {formData.price ? `Price: Rs. ${formData.price}` : 'Price: Rs. 0'}
                </p>

                {/* Location */}
                <p className="text-lg text-gray-600 text-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    {formData.location || 'Your Location'}
                </p>
                
                {/* Additional Images */}
                <div className="grid grid-cols-2 gap-3">
                    {formData.additionalImages.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`Additional Preview ${index + 1}`} 
                            className="w-full h-24 object-cover rounded-lg shadow-md border border-gray-300 transition-transform duration-300 hover:scale-110 hover:shadow-lg transform hover:-rotate-2 hover:shadow-purple-400" 
                        />
                    ))}
                </div>

            </div>
        </div>
    </div>
</div>
</div>




  

  );
};

export default PlaceAdd;
