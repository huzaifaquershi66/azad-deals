import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBookmark } from 'react-icons/fa';



import { 
  faBookmark, 
  faExclamationTriangle, 
  faPhone, 
  faEnvelope,
  faTag ,
  faIdCard,
  faMapMarkerAlt,
  faClock,
  faEye
} from '@fortawesome/free-solid-svg-icons';

const Postdetail = () => {
  return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-8 max-w-full mx-auto bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200">
  {/* Left Section (Product Info) */}
  <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg p-6 sm:p-8">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-gray-800 mb-4 sm:mb-6">
    iPhone 14 Pro Max 256GB – Used But Looks Brand New!
    </h1>

    {/* Product Info with Icons */}
    <div className="flex flex-wrap gap-4 text-xs sm:text-sm lg:text-lg text-gray-600">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faIdCard} className="text-blue-600 text-lg" />
        <p><strong>ID:</strong> 12345</p>
      </div>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 text-lg" />
        <p><strong>Location:</strong> City, Country</p>
      </div>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faClock} className="text-yellow-600 text-lg" />
        <p><strong>Date & Time:</strong> 12/12/2024 12:00 PM</p>
      </div>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faEye} className="text-purple-600 text-lg" />
        <p><strong>Views:</strong> 100</p>
      </div>
    </div>

    {/* Icons (Bookmark, Report) */}
    <div className="flex flex-wrap justify-between mt-6 gap-4">
      <span className="text-lg text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300">
        <FontAwesomeIcon icon={faBookmark} className="text-pink-600" />
        <span className="ml-2 font-bold font-raleway text-gray-700">Bookmark</span>
      </span>
      <span className="text-lg text-gray-600 hover:text-yellow-500 cursor-pointer transition duration-300">
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500" />
        <span className="ml-2 font-bold font-raleway text-gray-700">Report</span>
      </span>
    </div>

    {/* Share Buttons (Facebook, Twitter, LinkedIn) */}
    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6 text-center sm:text-left gap-4">
      <h3 className="text-lg sm:text-xl font-roboto text-gray-800 font-bold">Share:</h3>

      {/* Facebook Button */}
      <button className="bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md flex items-center space-x-2 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
        <FaFacebookF className="text-xl sm:text-2xl" />
        <span className="text-sm sm:text-lg">Facebook</span>
      </button>

      {/* Twitter Button */}
      <button className="bg-blue-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md flex items-center space-x-2 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
        <FaTwitter className="text-xl sm:text-2xl" />
        <span className="text-sm sm:text-lg">Twitter</span>
      </button>

      {/* LinkedIn Button */}
      <button className="bg-blue-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md flex items-center space-x-2 hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
        <FaLinkedinIn className="text-xl sm:text-2xl" />
        <span className="text-sm sm:text-lg">LinkedIn</span>
      </button>
    </div>

    {/* Product Image */}
    <div className="mt-6 sm:mt-8 rounded-lg shadow-xl overflow-hidden">
      <img 
        className="w-full h-auto object-cover"
        src="https://enews.hamariweb.com/wp-content/uploads/2023/06/iphone-14-review-lead-social-1663099148.jpg" 
        alt="Product" 
      />
    </div>
  </div>

  {/* Right Section */}
  <div className="col-span-1 space-y-6 sm:space-y-8">
    {/* Price Section */}
    <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 sm:p-6 rounded-lg shadow-lg flex items-center space-x-4">
      <FontAwesomeIcon icon={faTag} className="text-2xl sm:text-3xl" />
      <div>
        <p className="text-lg sm:text-xl font-bold font-roboto">Price</p>
        <h3 className="text-3xl sm:text-4xl font-bold">${100}</h3>
      </div>
    </div>

    {/* User Details Section */}
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 min-h-[500px] sm:min-h-[600px]">
      <div className="text-center">
        <img 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-gray-300 shadow-lg mb-4 sm:mb-6"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpB-h7Mxvkknm5nzOZ4DNS7ld9fd7pjTLuaA&s" 
          alt="User Profile" 
        />
        <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-roboto">John Doe</p>
        <p className="text-lg sm:text-xl text-gray-600 font-roboto"><strong>Joined:</strong> 01/01/2022</p>

        {/* Contact Info */}
        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-lg text-gray-600">
          <div className="flex items-center bg-gradient-to-r from-pink-200 to-pink-400 rounded-lg p-6 sm:p-8 shadow-lg">
            <FontAwesomeIcon icon={faPhone} className="text-teal-500 mr-4 text-3xl sm:text-4xl" />
            <p className="text-black font-bold font-montserrat text-xl sm:text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center bg-gradient-to-r from-pink-200 to-pink-400 rounded-lg p-6 sm:p-8 shadow-lg">
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-500 mr-4 text-3xl sm:text-4xl" />
            <p className="text-black font-bold font-montserrat text-sm sm:text-2xl">johndoe@example.com</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <button className="bg-gradient-to-r from-pink-700 to-pink-800 font-raleway font-semibold text-white py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-lg hover:bg-pink-900 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
            Send Message
          </button>
          <button className="bg-gradient-to-r from-green-700 to-green-800 text-white py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-lg hover:bg-green-900 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
            Send Offer
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


  
  
  
  
  );
};

export default Postdetail;
