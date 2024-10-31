
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
    src="https://static.vecteezy.com/system/resources/previews/001/925/528/non_2x/black-friday-sale-banner-or-promotion-on-dark-background-online-shopping-store-with-mobile-credit-cards-and-shop-elements-illustration-vector.jpg"
    alt="Mobile Image"
  />
</div>

<div className="relative p-6 sm:p-8 md:p-12 bg-gradient-to-tr from-purple-800 via-indigo-700 to-pink-600 text-white rounded-2xl md:rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl mt-6 sm:mt-8 md:mt-10 overflow-hidden">
  <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-pink-400 via-purple-600 to-indigo-500 blur-lg animate-gradient-motion"></div>
  <div className="relative z-10 flex items-center space-x-2 sm:space-x-4">
    <span className="text-white bg-pink-700 rounded-full p-2 sm:p-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
    </span>
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Mobile Listings in Pakistan</h1>
  </div>
  <p className="relative z-10 mt-3 sm:mt-4 text-sm sm:text-lg md:text-lg text-gray-200 max-w-xs sm:max-w-md md:max-w-lg leading-relaxed tracking-wide">
    Discover cutting-edge mobile technology with advanced filtering options to find exactly what you need!
  </p>
  <button className="relative z-10 mt-4 sm:mt-6 inline-flex items-center bg-gradient-to-r from-white/20 via-purple-300/40 to-pink-400/20 text-purple-50 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 transition duration-200">
    <span>Explore Now</span>
    <svg className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
</div>


      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:mx-10 mx-0 my-10 w-full'>
        {/* Filter Section */}
        <div className="space-y-4">
  {/* Heading */}
  <h1 className="text-3xl font-bold font-raleway text-gray-800 text-center md:text-left mb-2">Mobiles in Pakistan</h1>
  
  {/* Filters Section */}
  <div className="bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 hover:shadow-2xl border border-gray-300 md:col-span-1">
  <h2 className="font-sans text-3xl font-bold mb-6 border-b pb-3 text-gray-800">Filters</h2>

  {/* Sort Options */}
  <div className="mb-6">
    <label className="font-manrope text-lg font-semibold text-gray-700">Sort By</label>
    <select
      value={sortOption}
      onChange={handleSortChange}
      className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150 hover:shadow-md"
    >
      <option value="default" disabled>Select</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
      <option value="popular">Most Popular</option>
    </select>
  </div>

  {/* Price Range */}
  <div className="mb-6">
    <label className="font-manrope text-lg font-semibold text-gray-700">Price Range</label>
    <div className="flex items-center mt-4">
      <input
        type="range"
        min="0"
        max="400000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-full h-2 bg-gradient-to-r from-[#e40046] to-[#e40088] rounded-lg cursor-pointer focus:outline-none"
        style={{
          backgroundSize: `${(maxPrice / 400000) * 100}% 100%`,
          transition: 'background-size 0.3s ease-in-out',
        }}
      />
      <span className="ml-4 text-lg font-semibold text-[#e40046]">₨{maxPrice}</span>
    </div>
    <div className="flex justify-between font-semibold font-roboto text-sm text-gray-600 mt-2">
      <span>₨0</span>
      <span>₨400,000</span>
    </div>
  </div>

  {/* City Search */}
  <div className="mb-6">
    <label className="font-manrope text-lg font-semibold text-gray-700">Search City</label>
    <div className="relative">
      <input
        type="text"
        readOnly
        placeholder="Search City"
        onClick={handleInputClick}
        className="h-14 w-full rounded-lg pl-10 pr-10 border border-gray-300 transition duration-200 focus:ring-2 focus:ring-pink-500 focus:outline-none hover:shadow-md"
      />
      <FontAwesomeIcon
        icon={faLocationDot}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform duration-300 hover:scale-110"
      />
      <FontAwesomeIcon
        icon={faAngleDown}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform duration-300 hover:scale-110"
      />

      {showCities && (
        <div className="absolute left-0 right-0 mt-1 border border-gray-300 rounded-lg bg-white shadow-lg z-50">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-14 w-full rounded-lg pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
          />
          <div className="h-48 overflow-y-auto">
            <ul className="px-2 space-y-2">
              {filteredCities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleCityClick(city)}
                  className="cursor-pointer hover:bg-gray-100 rounded p-2 transition duration-150"
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

  {/* Popular Cities Checkbox Section */}
  <div className="mt-6">
    <h2 className="font-manrope text-lg font-semibold text-gray-700">Popular Cities</h2>
    <div className="space-y-2 mt-2">
      {popularCities.map((city) => (
        <label key={city} className="flex items-center hover:bg-gray-100 rounded p-2 transition duration-150">
          <input
            type="checkbox"
            className="mr-2 h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="text-gray-700">{city}</span>
        </label>
      ))}
    </div>
  </div>

  {/* Reset Filters Button */}
  <div className="flex justify-center mt-6">
    <button
      onClick={resetFilters}
      className="bg-red-500 text-white px-6 py-3 rounded-lg transition duration-200 hover:bg-red-600 shadow-lg font-semibold focus:outline-none flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faTimes} className="mr-2" />
      Reset Filters
    </button>
  </div>
</div>




</div>

<div className="bg-white rounded-lg p-6 transition-transform duration-200 hover:shadow-xl md:col-span-3">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          {/* Grid View Button - Hidden on Mobile */}
          <button
            onClick={() => setIsGridView(true)}
            className={`hidden md:block p-3 rounded-full ${isGridView ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <FontAwesomeIcon icon={faTh} size="lg" />
          </button>
          {/* List View Button - Hidden on Mobile */}
          <button
            onClick={() => setIsGridView(false)}
            className={`hidden md:block p-3 rounded-full ${!isGridView ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <h2 className="text-2xl font-semibold font-roboto ml-4">Searched Products</h2>
        </div>
      </div>

      {/* Move the Sort By dropdown here */}
      <div className="relative mb-6">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-md font-roboto"
        >
          <option value="newlyListed">Sort By: Newly Listed</option>
          <option value="mostRelevant">Most Relevant</option>
          <option value="lowestPrice">Lowest Price</option>
          <option value="highestPrice">Highest Price</option>
        </select>
      </div>

      <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid-cols-1 gap-4'}`}>
        {sortedProducts().map((product) => (
          <div
          ref={lastProductElementRef}
            key={product.name}
            className={`bg-white font-roboto rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg border border-gray-200 ${
              isGridView ? 'h-96' : 'flex items-center p-4'
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`object-cover ${isGridView ? 'w-full h-52' : 'h-52 w-96 mr-4'}`} // Increased height
            />
            <div className={`${isGridView ? 'p-6' : 'flex-grow'}`}>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg font-helveticaLight text-gray-800">{product.name}</h3>
                <button onClick={() => toggleHeart(product.name)}>
                  <FontAwesomeIcon icon={likedProducts[product.name] ? faHeart : faHeart} className={`text-lg ${likedProducts[product.name] ? 'text-pink-500' : 'text-gray-400'}`} />
                </button>
              </div>
              <p className="text-gray-600 font-semibold">
                {product.price} <span className="line-through font-sans text-gray-500">{product.originalPrice}</span>
              </p>
              <p className="text-gray-500 flex items-center mb-4">
                <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
                {product.location}
              </p>
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white font-roboto px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 w-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 " />
                  Call
                </button>
                <button className="bg-green-500 font-roboto text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 w-full flex items-center justify-center">
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
        {/* <button
          onClick={loadMoreProducts}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200 shadow-lg"
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
