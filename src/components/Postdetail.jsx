import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaRedditAlien} from 'react-icons/fa';
import { useState } from 'react';
import ImageCarousel from './Imageclaures';

import { faChevronLeft,faStar, faSms, faChevronRight,  faHome, faGraduationCap, faCar,faPhoneAlt,faHeart,faFlag, faDownload, faPrint, faBookmark, faShareAlt ,faCalendar,faIdBadge,faTint,faUserTie,faMobile ,faBoxOpen,faMobileAlt,faPalette,faMemory,faShoppingCart,faCalendarAlt,faPaintBrush } from '@fortawesome/free-solid-svg-icons';


import { 
  // faBookmark, 
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);
  const images = [
    "https://enews.hamariweb.com/wp-content/uploads/2023/06/iphone-14-review-lead-social-1663099148.jpg",
    "https://mir-s3-cdn-cf.behance.net/projects/404/436f7f180145769.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
    "https://static.itavisen.no/wp-content/uploads/2023/08/Screenshot-2023-08-15-at-20.14.57.png",
    // "https://www.wirelesssolutionsny.com/wp-content/uploads/2021/01/banner-image-iPhone-12-pro-max-1280x720.jpg",
  
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bba096180145769.6505ae76221d2.jpg",
    "https://images.ctfassets.net/mmeshd7gafk1/5Ivd3avPhmfwolg1kiWtT6/7354a941e87ea268bdbbd69872963179/iPhone-11-series-5G-banner-thumbnail.png"
  ];
  const mainImage = images[currentImageIndex];
 
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };
  
  const products = [
    {
      image: "https://classiads.designinvento.net/elementor/classiads-wind/wp-content/uploads/elementor/thumbs/8-3-q0w4yxvjnnopcomqg22dp2q3ey8ruwk8pbau6nxs0o.jpg",
      title: "Mobile Phones",
      name: "Samsung Galaxy S",
      description:
        "ClassiAds includes 20+ category templates, making it great for those hoping ...",
      location: "Pakistan",
      author: "DesignInvento",
    },
    {
      image: "https://classiads.designinvento.net/elementor/classiads-wind/wp-content/uploads/elementor/thumbs/7-2-q0w4ixoha7rxnpvown02qm4j9r4rsg0s63e701o3yw.jpg",
      title: "Mobile Phones",
      name: "Samsung Galaxy Note",
      description:
        "ClassiAds includes 20+ category templates, offering flexibility for all categories...",
      location: "Pakistan",
      author: "DesignInvento",
    },
  ];

  return (
    <>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-8 max-w-full mx-auto bg-gray-100">
  {/* Left Section (Product Info) */}
  <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg p-6 sm:p-8">
  <div className="flex items-center gap-8 text-gray-600 text-sm sm:text-base mb-4">
    {/* Date */}
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCalendar} className="text-blue-500" />
      <span>January 17, 2023</span>
    </div>
    {/* Views */}
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faEye} className="text-green-500" />
      <span>Views: 249</span>
    </div>
    {/* ID */}
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faIdBadge} className="text-purple-500" />
      <span>Id: 11080</span>
    </div>
  </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-montserrat text-black mb-4 sm:mb-6">
        iPhone 14 Pro Max 256GB
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
  {/* Report Button */}
  <button className="flex flex-col items-center bg-gray-100 border-2 border-gray-300 hover:bg-blue-500 hover:text-white text-gray-700 rounded-xl p-4 h-16 shadow-lg transform hover:scale-105 transition-all duration-300">
    <FontAwesomeIcon icon={faFlag} className="text-xl mb-1" />
    <span className="text-sm font-medium">Report</span>
  </button>

  {/* Download Button */}
  {/* <button className="flex flex-col items-center bg-gray-100 border-2 border-gray-300 hover:bg-blue-500 hover:text-white text-gray-700 rounded-xl p-4 h-16 shadow-lg transform hover:scale-105 transition-all duration-300">
    <FontAwesomeIcon icon={faDownload} className="text-xl mb-1" />
    <span className="text-sm font-medium">Download</span>
  </button> */}

  {/* Print Button */}
  {/* <button className="flex flex-col items-center bg-gray-100 border-2 border-gray-300 hover:bg-blue-500 hover:text-white text-gray-700 rounded-xl p-4 h-16 shadow-lg transform hover:scale-105 transition-all duration-300">
    <FontAwesomeIcon icon={faPrint} className="text-xl mb-1" />
    <span className="text-sm font-medium">Print</span>
  </button> */}

  {/* Bookmark Button */}
  <button className="flex flex-col items-center bg-gray-100 border-2 border-gray-300 hover:bg-blue-500 hover:text-white text-gray-700 rounded-xl p-4 h-16 shadow-lg transform hover:scale-105 transition-all duration-300">
    <FontAwesomeIcon icon={faBookmark} className="text-xl mb-1" />
    <span className="text-sm font-medium">Bookmark</span>
  </button>

  {/* Share Button */}
  <button className="flex flex-col items-center bg-gray-100 border-2 border-gray-300 hover:bg-blue-500 hover:text-white text-gray-700 rounded-xl p-4 h-16 shadow-lg transform hover:scale-105 transition-all duration-300">
    <FontAwesomeIcon icon={faShareAlt} className="text-xl mb-1" />
    <span className="text-sm font-medium">Share</span>
  </button>
</div>





      {/* Product Info with Icons */}
      <div className="flex flex-wrap gap-4 text-xs sm:text-sm lg:text-lg text-gray-600">
        {/* Product Info */}
      </div>

      {/* Icons (Bookmark, Report) */}
      <div className="flex flex-wrap justify-between mt-6 gap-4">
        {/* Bookmark & Report Icons */}
      </div>

      {/* Share Buttons (Facebook, Twitter, LinkedIn) */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6 text-center sm:text-left gap-4">
        {/* Share Buttons */}
      </div>

      {/* Main Product Image with Navigation */}
      <div className="mt-6 sm:mt-0 rounded-lg shadow-xl w-full h-[600px] overflow-hidden relative bg-black">
  {/* Left Chevron */}
  <button
    onClick={handlePrevImage}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 z-10"
  >
    <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-gray-800" />
  </button>

  {/* Image with opacity transition */}
  <div className="w-full h-full absolute top-0 left-0 transition-opacity duration-500 ease-in-out">
    {images.map((image, index) => (
      <img
        key={index}
        className={`w-full h-full object-cover absolute transition-opacity duration-500 ease-in-out ${
          index === currentImageIndex ? "opacity-100" : "opacity-0"
        }`}
        src={image}
        alt={`Product ${index}`}
      />
    ))}
  </div>

  {/* Right Chevron */}
  <button
    onClick={handleNextImage}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 z-10"
  >
    <FontAwesomeIcon icon={faChevronRight} className="text-xl text-gray-800" />
  </button>
</div>

{/* Thumbnail Images */}
<div className="flex mt-1 gap-1">
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Thumbnail ${index}`}
      className="w-16 h-16 sm:w-36 sm:h-36 object-cover rounded-lg cursor-pointer transform hover:scale-110 transition-all duration-300"
      onClick={() => setCurrentImageIndex(index)}
    />
  ))}
</div>


      <div className="flex flex-wrap gap-8 text-xs sm:text-sm lg:text-lg font-montserrat bg-white text-gray-600 mt-20">
  {/* Product Info with Icons */}
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faTint} className="text-blue-500" />
    <span className="font-bold">Waterproof</span>
    <span className="ml-auto">Yes</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faUserTie} className="text-blue-500" />
    <span className="font-bold">Seller Type</span>
    <span className="ml-auto">Personal</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faMobile} className="text-blue-500" />
    <span className="font-bold">Brand Name</span>
    <span className="ml-auto">Apple</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faBoxOpen} className="text-blue-500" />
    <span className="font-bold">Condition</span>
    <span className="ml-auto">Brand New</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faMobileAlt} className="text-blue-500" />
    <span className="font-bold">Phone Model</span>
    <span className="ml-auto">14 Pro Max</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faPalette} className="text-blue-500" />
    <span className="font-bold">Color</span>
    <span className="ml-auto">White</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faMemory} className="text-blue-500" />
    <span className="font-bold">Memory</span>
    <span className="ml-auto">256GB</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faShoppingCart} className="text-blue-500" />
    <span className="font-bold">Purpose</span>
    <span className="ml-auto">Sell</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500" />
    <span className="font-bold">Model Year</span>
    <span className="ml-auto">2023</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faPaintBrush} className="text-blue-500" />
    <span className="font-bold">Exterior Color</span>
    <span className="ml-auto">White</span>
  </div>
  <div className="flex items-center gap-2 w-full sm:w-full lg:w-[300px] border p-4 min-h-[60px]">
    <FontAwesomeIcon icon={faPalette} className="text-blue-500" />
    <span className="font-bold">Colors</span>
    <span className="ml-auto">Red</span>
  </div>
</div>





<div className="w-full mx-auto mt-8 p-6 font-roboto  shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description:</h2>
      <p className="text-gray-700 leading-relaxed">
        ClassiAds includes 20+ category templates, making it great for those hoping to create
        specific classified sites. As an admin, simply approve seller applications, and they can
        manage their ads in a front-end panel. The default listing type is free, but you can elect
        to charge users to feature their ads in high-traffic site areas for increased engagement
        and visibility.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        ClassiAds can also integrate with MailChimp, enabling communication between admin and
        sellers and buyers and sellers. You can make additional customizations with Elementor.
      </p>
    </div>



<div className="p-8 bg-gray-100 min-h-screen">
      {/* Ensure products are displayed in a single column */}
      <div className="flex flex-col gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row w-full"
          >
            {/* Product Image */}
            <div className="relative w-full md:w-1/3 h-72">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Featured Label */}
          <div className="absolute top-2 left-2 bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
  Featured
</div>

        </div>
            {/* Product Content */}
            <div className="flex-1 flex flex-col p-4">
              <div className="flex justify-between items-start">
                {/* Left Content */}
                <div>
                  <h3 className="text-[16px]  mb-2 font-roboto">{product.title}</h3>
                  <h4 className="text-black text-xl font-bold font-montserrat  ">{product.name}</h4>
                  <p className="text-gray-600 text-lg font-manrope my-4">
                    {product.description}
                  </p>
                  <p className="text-gray-500 font-helveticaLight flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-gray-500 mr-2"
              />
              {product.location}
            </p>

            <hr className="my-4 border-gray-300" />

{/* Review Score and Stars */}
<div className="flex items-center">
<div className="bg-green-500 text-white text-sm font-semibold  px-2 py-1 mr-2">
                5.0
              </div>
  <div className="flex text-yellow-400">
    {/* Display 5 stars */}
    {[...Array(5)].map((_, i) => (
      <FontAwesomeIcon key={i} icon={faStar} className="mr-1" />
    ))}
  </div>
</div>
{/* </div> */}

           
                </div>
           
<button className="text-gray-500 hover:text-red-500 mr-10">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </button>
   

                {/* Author Details */}
                <div className="flex flex-col items-start gap-4">
        
  <img
    src={"https://classiads.designinvento.net/elementor/classiads-wind/wp-content/uploads/elementor/thumbs/img-02-768x693-1-q0umfwri8654xm1crvz34ck7jptxdrfqvd2syy46ns.jpg"}
    alt="Author Avatar"
    className="w-14 h-14 ml-6 rounded-full border"
  />
  <div>
    <p className="text-gray-700 font-semibold">{product.author}</p>
    <div className="flex flex-col gap-2 text-blue-500 mt-2">
    <button className="text-sm font-sansing  text-blue-500 font-bold hover:underline underline bg-transparent border-none">
  See All Ads
</button>

      <button className="px-4 py-2 font-roboto bg-gray-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition-all duration-300">
  Contacts
</button>

    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>



  {/* Right Section */}
  <div className="col-span-1 space-y-6 sm:space-y-8">
    {/* Price Section */}
    <div className="bg-gradient-to-r from-green-200 to-green-300 text-black p-6 rounded-lg shadow-xl flex items-center space-x-6">
  <FontAwesomeIcon icon={faTag} className="text-5xl sm:text-6xl text-green-600" />
  <div className="flex flex-col space-y-2">
    <h3 className="text-sm sm:text-md font-semibold text-green-700">Price</h3>
    <div className="flex items-center space-x-3">
      <h3 className="text-3xl sm:text-4xl font-bold text-green-800">${100}</h3>
      <span className="bg-green-500 text-white text-xs sm:text-sm font-semibold py-1 px-4 rounded-full shadow-md">Fixed</span>
    </div>
  </div>
</div>






    {/* User Details Section */}
    <div className="bg-white rounded-lg shadow-2xl p-8 sm:p-12 min-h-[500px] sm:min-h-[600px]">
  <div className="text-center">
    <img 
      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-gray-300 shadow-lg mb-6 sm:mb-8"
      src="https://classiads.designinvento.net/elementor/classiads-wind/wp-content/uploads/elementor/thumbs/img-02-768x693-1-q0umfwrj1456lhtmadcgik74mreswbk4cqwm89tya4.jpg" 
      alt="User Profile" 
    />
   <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 font-roboto">DesignInvento</p>
    <p className="text-lg sm:text-xl text-gray-600 font-roboto"><strong>Member since:</strong> Nov 24, 2017</p>
    <div className="mt-4 sm:mt-6">
  <a href="#" className="text-blue-600 underline font-semibold font-sans text-lg sm:text-xl hover:text-blue-800 hover:underline transition duration-300 ease-in-out">
    View all ads
  </a>
</div>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
  {/* Send Message Button */}
 

<div className="flex justify-center mt-4 space-x-6">
    <div className="p-4 border-2 border-blue-600 rounded-full bg-opacity-20 hover:bg-blue-600 hover:bg-opacity-10 transition duration-300 ease-in-out">
      <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
        <FaFacebookF className="text-2xl sm:text-3xl" />
      </a>
    </div>
    <div className="p-4 border-2 border-blue-400 rounded-full bg-opacity-20 hover:bg-blue-400 hover:bg-opacity-10 transition duration-300 ease-in-out">
      <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out">
        <FaTwitter className="text-2xl sm:text-3xl" />
      </a>
    </div>
    <div className="p-4 border-2 border-blue-700 rounded-full bg-opacity-20 hover:bg-blue-700 hover:bg-opacity-10 transition duration-300 ease-in-out">
      <a href="#" className="text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out">
        <FaLinkedinIn className="text-2xl sm:text-3xl" />
      </a>
    </div>
    <div className="p-4 border-2 border-red-600 rounded-full bg-opacity-20 hover:bg-red-600 hover:bg-opacity-10 transition duration-300 ease-in-out">
      <a href="#" className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out">
        <FaRedditAlien className="text-2xl sm:text-3xl" />
      </a>
    </div>
  </div>
</div>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:space-x-6 justify-center">
  {/* Send Message Button */}
  <button className="border-2  border-pink-700 mt-4 sm:mt-0 text-pink-700 font-semibold font-raleway py-4 sm:py-5 px-8 sm:px-10 rounded-full hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
    Send Message
  </button>

  {/* Send Offer Button */}
  <button className="border-2 border-green-700 mt-4 sm:mt-0 text-green-700 font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-full hover:bg-green-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
    Send Offer
  </button>
</div>
<div className="w-full max-w-screen-xl mx-auto mt-8 px-4">
  {/* Div 1 (Blue) */}
  <div className="flex items-center space-x-4 bg-blue-700 border border-blue-600 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full mb-6">
    {/* Phone Icon */}
    <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl text-blue-300" />
    <div>
      {/* Title */}
      <p className="text-lg font-medium text-white">Click to Show Number</p>
      {/* Phone Number */}
      <p className="text-sm text-gray-200 font-mono mt-1">+14 8xxxxxx</p>
    </div>
  </div>
{/* </div> */}

  {/* Div 2 (Green) */}
  <div className="flex items-center space-x-4 bg-green-700 border border-green-600 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full mb-6">
  {/* Phone Icon */}
  <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl text-green-300" />
  <div>
    {/* Title */}
    <p className="text-lg font-medium text-white">Click to Show Number</p>
    {/* Phone Number */}
    <p className="text-sm text-gray-200 font-mono mt-1">+14 8xxxxxx</p>
  </div>
</div>


  {/* Div 3 (Orange) */}
  <div className="flex items-center space-x-4 bg-orange-800 border border-orange-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full mb-6">
      {/* Replace faEnvelope with faSms */}
      <FontAwesomeIcon icon={faSms} className="text-3xl text-orange-400" />
      <div>
        <p className="text-xl font-semibold text-white">Text Now</p>
        
      </div>
    </div>
</div>















    {/* Contact Info */}


    {/* Action Buttons */}
   
  </div>
  
</div>
{/* <div className="w-full   mt-8 px-4"> */}
<ImageCarousel/>
{/* </div> */}











  </div>
  
</div>



</>
  

  
  );
};

export  {Postdetail};
