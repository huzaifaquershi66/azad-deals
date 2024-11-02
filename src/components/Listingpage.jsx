
import React, { useState, useEffect, useCallback,useRef } from 'react';
import cities from './header/cites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faAngleDown ,faPhone,faComments,faHeart,faTimes} from '@fortawesome/free-solid-svg-icons';

import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'

// Unique and popular cities
const uniqueCities = Array.from(new Set(cities));
const popularCities = ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Rawalpindi', 'Multan'];


const initialProducts = [
  {
    image: 'https://i.ytimg.com/vi/bE_3r_Eu7SU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCU6jEwJ6TB8hqIZ36Lx3AwNYheMg',
    price: 'Rs 3,00,000',
    originalPrice: 'Rs 3,40,000',
    desc:"Experience vibrant visuals on the expansive 6.8-inch Quad HD+ display with a 120Hz refresh rate. Whether you’re streaming your favorite shows or gaming, every detail pops with true-to-life colors and silky smooth scrolling",
    name: 'Iphone 14 Pro Max',
    location: 'Faisalabad',
   },
  {
   image: 'https://cdn.mos.cms.futurecdn.net/BHiwWkpNWGCUmuA5g66Dgi.jpg',
    price: 'Rs 2,00,000',
    originalPrice: 'Rs 2,40,000',
    name: 'Iphone 13 Pro Max',
    location: 'Lahore',
  },
  {
    image: 'https://cdn.mos.cms.futurecdn.net/oNrqmEW2Y5HN8ixWPxLweP.jpg',
    price: 'Rs 4,00,000',
    originalPrice: 'Rs 3,40,000',
    name: 'Samsung S20 Ultra',
    location: 'Faisalabad',
  },
  {
    image: 'https://www.screenfixed.com.au/wp-content/uploads/2020/10/samsung-galaxy-s20-ultra-vs-iphone-12-pro-max.jpg',
    price: 'Rs 2,00,000',
    originalPrice: 'Rs 2,20,000',
    name: 'Samsung S21 Ultra',
    location: 'Jhang',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K-HLmf3U9-cr8EOXZ2En0QsOb26nJbAqPg&s',
    price: 'Rs 2,50,000',
    originalPrice: 'Rs 2,80,000',
    name: 'Iphone 14',
    location: 'Karachi',
  },
  {
    image: 'https://cdn.mos.cms.futurecdn.net/W5nsEqQhWmX3MKgUc8Y4Af.jpg',
    price: 'Rs 1,80,000',
    originalPrice: 'Rs 2,00,000',
    name: 'OnePlus 9',
    location: 'Islamabad',
  },
  {
    image: 'https://www.androidauthority.com/wp-content/uploads/2021/02/Xiaomi-Mi-11-blue-and-pink-hues.jpg',
    price: 'Rs 1,00,000',
    originalPrice: 'Rs 1,20,000',
    name: 'Xiaomi Mi 11',
    location: 'Karachi',
  },
  {
    image: 'https://estorepakistan.com/cdn/shop/products/google-pixel-6-proestore-pakistancloudy-white128gbsim-locked-550350_1024x1024.webp?v=1701694247',
    price: 'Rs 2,20,000',
    originalPrice: 'Rs 2,50,000',
    name: 'Google Pixel 6',
    location: 'Lahore',
  },
  {
    image: 'https://www.androidauthority.com/wp-content/uploads/2021/02/Xiaomi-Mi-11-blue-and-pink-hues.jpg',
    price: 'Rs 1,00,000',
    originalPrice: 'Rs 1,20,000',
    name: 'Xiaomi Mi 11',
    location: 'Karachi',
  },
  {
    image: 'https://estorepakistan.com/cdn/shop/products/google-pixel-6-proestore-pakistancloudy-white128gbsim-locked-550350_1024x1024.webp?v=1701694247',
    price: 'Rs 2,20,000',
    originalPrice: 'Rs 2,50,000',
    name: 'Google Pixel 6',
    location: 'Lahore',
  },
  {
    image: 'https://cdn.mos.cms.futurecdn.net/oNrqmEW2Y5HN8ixWPxLweP.jpg',
    price: 'Rs 4,00,000',
    originalPrice: 'Rs 3,40,000',
    name: 'Samsung S20 Ultra',
    location: 'Faisalabad',
  },
  {
    image: 'https://www.screenfixed.com.au/wp-content/uploads/2020/10/samsung-galaxy-s20-ultra-vs-iphone-12-pro-max.jpg',
    price: 'Rs 2,00,000',
    originalPrice: 'Rs 2,20,000',
    name: 'Samsung S21 Ultra',
    location: 'Jhang',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K-HLmf3U9-cr8EOXZ2En0QsOb26nJbAqPg&s',
    price: 'Rs 2,50,000',
    originalPrice: 'Rs 2,80,000',
    name: 'Iphone 14',
    location: 'Karachi',
  },
  {
    image: 'https://cdn.mos.cms.futurecdn.net/W5nsEqQhWmX3MKgUc8Y4Af.jpg',
    price: 'Rs 1,80,000',
    originalPrice: 'Rs 2,00,000',
    name: 'OnePlus 9',
    location: 'Islamabad',
  },
 ];

const ListingPage = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(400000);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCities, setShowCities] = useState(false);
  const [filteredCities, setFilteredCities] = useState(uniqueCities);
  const [sortOption, setSortOption] = useState('default');
  const [products, setProducts] = useState(initialProducts.slice(0, 6)); // Show only 6 products initially
  const [visibleCount, setVisibleCount] = useState(6); // Track number of visible products
  const [isGridView, setIsGridView] = useState(true);
  const [sortOptions, setSortOptions] = useState('newlyListed');
  const [likedProducts, setLikedProducts] = useState({});
  const observerRef = useRef(null);
  // Function to sort products based on selected option
  const sortedProducts = () => {
    let sortedArray = [...products];

    switch (sortOption) {
      case 'newlyListed':
        // Assuming there is a listedDate field in the products, sort by that
        return sortedArray.sort((a, b) => new Date(b.listedDate) - new Date(a.listedDate));
      case 'mostRelevant':
        return sortedArray; // Assuming products are already relevant, sort logic can be added
      case 'lowestPrice':
        return sortedArray.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
      case 'highestPrice':
        return sortedArray.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
      default:
        return sortedArray;
    }
  };

  const toggleHeart = (productName) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };
  useEffect(() => {
    setFilteredCities(uniqueCities);
  }, [uniqueCities]);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, minPrice, maxPrice, sortOption]);

  const handleInputClick = () => {
    setShowCities((prev) => !prev);
  };

  const handleSearchChange = useCallback((e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setFilteredCities(term ? uniqueCities.filter(city => city.toLowerCase().includes(term.toLowerCase())) : uniqueCities);
    setShowCities(!!term);
  }, [uniqueCities]);

  const handleCityClick = (city) => {
    setSearchTerm(city);
    setShowCities(false);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(400000);
    setSearchTerm('');
    setSortOption('default');
    setFilteredCities(uniqueCities);
    setShowCities(false);
    setVisibleCount(6); // Reset to show 6 products
  };

  const loadMoreProducts = () => {
    // Increase visible count and filter products
    setVisibleCount(prevCount => {
      const newCount = prevCount + 6;
      filterProducts(newCount); // Pass the new count to filterProducts
      return newCount; // Return the new count to update state
    });
  };
  
  const filterProducts = (count) => {
    let filteredProducts = initialProducts;
  
    // Apply search and price filters
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => product.location === searchTerm);
    }
  
    filteredProducts = filteredProducts.filter(product => {
      const priceValue = parseInt(product.price.replace(/[^\d]/g, ''));
      return priceValue >= minPrice && priceValue <= maxPrice;
    });
  
    // Sort filtered products
    if (sortOption === 'asc') {
      filteredProducts.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
    } else if (sortOption === 'desc') {
      filteredProducts.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
    }
  
    // Update products to show based on the current count
    setProducts(filteredProducts.slice(0, count)); // Use the passed count
  };
  
  // In the useEffect for filtering products, include visibleCount
  useEffect(() => {
    filterProducts(visibleCount);
  }, [searchTerm, minPrice, maxPrice, sortOption, visibleCount]);
  
  const lastProductElementRef = useCallback((node) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreProducts();
      }
    });
    if (node) observerRef.current.observe(node);
  }, []);


  return (
    <>
    <div className="h-64 w-full px-4 py-2 md:h-80 lg:h-96 lg:px-40">
  <img
    className="object-cover h-full rounded w-full"
    src="https://www.lg.com/levant_en/images/plp-b2c/levanten-mobilephones-hero-1-d.jpg"
    alt="Mobile Image"
  />
</div>

<div className="relative p-10 sm:p-12 md:p-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl mt-8 sm:mt-12 overflow-hidden">
  <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-indigo-700 to-purple-600 blur-2xl animate-gradient-motion"></div>
  <div className="absolute -top-12 -left-12 w-44 h-44 bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 rounded-full opacity-30 blur-2xl animate-pulse"></div>
  <div className="absolute bottom-6 right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-green-300 rounded-full opacity-25 blur-2xl animate-pulse delay-100"></div>

  <div className="relative z-10 flex items-center space-x-4 sm:space-x-6">
    <span className="text-white bg-indigo-700 rounded-full p-4 shadow-lg">
      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
    </span>
    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg leading-tight">Mobile Listings in Pakistan</h1>
  </div>

  <p className="relative z-10 mt-5 sm:mt-6 text-sm sm:text-lg text-gray-200 max-w-md sm:max-w-lg leading-relaxed tracking-wide">
    Discover the latest mobiles with tailored search options to find your perfect match!
  </p>

  <button className="relative z-10 mt-8 sm:mt-10 inline-flex items-center bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-indigo-600 transition duration-300">
    <span>Explore Now</span>
    <svg className="ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
</div>



      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:mx-10 mx-0 my-10 w-full'>
        {/* Filter Section */}
        <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl transition-transform duration-500 hover:shadow-3xl border border-gray-200 border-t-2 border-l-2 md:col-span-1">
  <h2 className="font-sans text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
    Filters
  </h2>

  {/* Sort Options */}
  <div className="mb-6">
    <label className="text-lg font-semibold text-gray-800">Sort By</label>
    <select
      value={sortOption}
      onChange={handleSortChange}
      className="mt-3 p-3 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-md transition-all duration-300 hover:bg-blue-50/90 hover:border-blue-400 hover:shadow-lg"
    >
      <option value="default" disabled>Select</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
      <option value="popular">Most Popular</option>
    </select>
  </div>

  {/* Price Range */}
  <div className="mb-6">
    <label className="text-lg font-semibold text-gray-800">Price Range</label>
    <div className="flex items-center mt-4">
      <input
        type="range"
        min="0"
        max="400000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-full h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{
          backgroundSize: `${(maxPrice / 400000) * 100}% 100%`,
          transition: 'background-size 0.5s ease-in-out',
        }}
      />
      <span className="ml-4 text-lg font-semibold text-blue-600">₨{maxPrice}</span>
    </div>
    <div className="flex justify-between font-semibold text-sm text-gray-500 mt-2">
      <span>₨0</span>
      <span>₨400,000</span>
    </div>
  </div>

  {/* City Search */}
  <div className="mb-6">
    <label className="text-lg font-semibold text-gray-800">Search City</label>
    <div className="relative">
      <input
        type="text"
        readOnly
        placeholder="Search City"
        onClick={handleInputClick}
        className="h-12 w-full rounded-full pl-10 pr-10 border border-gray-300 bg-white/80 shadow-md focus:ring-4 focus:ring-blue-400 hover:bg-blue-50/80 transition-all duration-300"
      />
      <FontAwesomeIcon
        icon={faLocationDot}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-500"
      />
      <FontAwesomeIcon
        icon={faAngleDown}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-500"
      />

      {showCities && (
        <div className="absolute left-0 right-0 mt-2 border border-gray-300 rounded-2xl bg-white/90 shadow-lg z-50 p-4 backdrop-blur-md animate-fadeIn">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-12 w-full rounded-full pl-10 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300"
          />
          <div className="h-48 overflow-y-auto mt-2">
            <ul className="space-y-2">
              {filteredCities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleCityClick(city)}
                  className="cursor-pointer hover:bg-blue-100 rounded-lg p-2 transition duration-200 text-gray-700"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Popular Cities */}
  <div className="mt-6">
    <h2 className="text-lg font-semibold text-gray-800">Popular Cities</h2>
    <div className="space-y-3 mt-3">
      {popularCities.map((city) => (
        <label key={city} className="flex items-center hover:bg-purple-50 rounded-full p-3 transition duration-300 shadow-sm text-gray-800">
          <input
            type="checkbox"
            className="mr-3 h-5 w-5 text-purple-500 border-gray-300 rounded focus:ring-purple-400 transition-transform duration-200 hover:scale-110"
          />
          <span>{city}</span>
        </label>
      ))}
    </div>
  </div>

  {/* Reset Button */}
  <div className="flex justify-center mt-10">
    <button
      onClick={resetFilters}
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:from-purple-500 hover:to-blue-500 focus:outline-none font-semibold"
    >
      <FontAwesomeIcon icon={faTimes} className="mr-2" />
      Reset Filters
    </button>
  </div>
</div>

<div className="bg-white rounded-lg p-8 shadow-xl transition-transform duration-300 hover:shadow-2xl md:col-span-3">
  <div className="flex justify-between items-center mb-6">
    <div className="flex items-center space-x-4">
      {/* Grid View Button - Hidden on Mobile */}
      <button
        onClick={() => setIsGridView(true)}
        className={`hidden md:block p-3 rounded-full transition-all duration-200 ${isGridView ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
      >
        <FontAwesomeIcon icon={faTh} size="lg" />
      </button>
      {/* List View Button - Hidden on Mobile */}
      <button
        onClick={() => setIsGridView(false)}
        className={`hidden md:block p-3 rounded-full transition-all duration-200 ${!isGridView ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      <h2 className="text-4xl font-bold font-roboto text-gray-800 hover:text-green-600 transition duration-300 ml-4">Searched Products</h2>
    </div>
  </div>

  {/* Sort By dropdown */}
  <div className="relative mb-6">
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="p-3 border rounded-md font-roboto shadow-sm bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
    >
      <option value="newlyListed">Sort By: Newly Listed</option>
      <option value="mostRelevant">Most Relevant</option>
      <option value="lowestPrice">Lowest Price</option>
      <option value="highestPrice">Highest Price</option>
    </select>
  </div>

  {/* Product Display */}
  <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid-cols-1'}`}>
    {sortedProducts().map((product) => (
      <div
        ref={lastProductElementRef}
        key={product.name}
        className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl border border-gray-200 ${isGridView ? 'flex flex-col' : 'flex items-center'}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`object-cover ${isGridView ? 'h-64 w-full' : 'h-64 w-72'} transition-transform duration-200`} // Removed hover:scale-110
        />
        <div className={`${isGridView ? 'p-6' : 'p-4 text-center'} space-y-2`}>
          <h3 className="font-semibold text-lg text-gray-800 hover:text-green-600 transition duration-200">{product.name}</h3>
          <p className="text-gray-600 font-bold">
            {product.price} <span className="line-through font-sans text-gray-400">{product.originalPrice}</span>
          </p>
          <p className="text-gray-500 flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
            {product.location}
          </p>
          <div className="flex space-x-2 justify-center">
            <button className="bg-blue-600 text-white font-roboto px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call
            </button>
            <button className="bg-green-600 font-roboto text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center">
              <FontAwesomeIcon icon={faComments} className="mr-2" />
              Chat
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Load More Button */}
  <div className="flex justify-center mt-8">
    {/* Uncomment to use Load More Button */}
    {/* <button
      onClick={loadMoreProducts}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 shadow-lg"
    >
      Load More
    </button> */}
  </div>
</div>











      </div>
    </>
  );
};

export default ListingPage;
