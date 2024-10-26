
import React, { useState, useEffect, useCallback } from 'react';
import cities from './header/cites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
  
  

  return (
    <>
      <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold">Mobile Listings</h1>
        <p className="mt-2 text-lg">Discover the latest and greatest Mobiles by filtering your search!</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:mx-10 mx-0 my-10 w-full'>
        {/* Filter Section */}
        <div className='bg-white shadow-lg rounded-lg p-6 transition-transform duration-200 hover:shadow-xl border border-gray-300 md:col-span-1'>
          <h2 className='font-sans text-2xl font-semibold mb-4 border-b pb-2'>Filters</h2>
          
          {/* Sort Options */}
          <div className="mb-6">
            <label className='font-manrope text-lg font-semibold'>Sort By</label>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="mt-2 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-150"
            >
              <option value="default">Select</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <label className='font-manrope text-lg font-semibold'>Price Range</label>
            <div className='flex items-center mt-4'>
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
          <div className='mb-6'>
            <label className='font-manrope text-lg font-semibold'>Search City</label>
            <div className='relative'>
              <input
                type='text'
                readOnly
                placeholder='Search City'
                onClick={handleInputClick}
                className='h-14 w-full rounded-lg pl-10 pr-10 border border-gray-300 transition duration-200 focus:ring-2 focus:ring-pink-500'
              />
              <FontAwesomeIcon
                icon={faLocationDot}
                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform duration-300 hover:scale-110'
              />
              <FontAwesomeIcon
                icon={faAngleDown}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform duration-300 hover:scale-110'
              />

              {showCities && (
                <div className='absolute left-0 right-0 mt-1 border border-gray-300 rounded-lg bg-white shadow-lg z-50'>
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className='h-14 w-full rounded-lg pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200'
                  />
                  <div className='h-48 overflow-y-auto'>
                    <ul className='px-2 space-y-2'>
                      {filteredCities.map((city, index) => (
                        <li
                          key={index}
                          onClick={() => handleCityClick(city)}
                          className='cursor-pointer hover:bg-gray-100 rounded p-2 transition duration-150'
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
          <div className='mt-6'>
            <h2 className='font-manrope text-lg font-semibold'>Popular Cities</h2>
            <div className='space-y-2 mt-2'>
              {popularCities.map((city) => (
                <label key={city} className='flex items-center'>
                  <input
                    type="checkbox"
                    className='mr-2 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500'
                  />
                  <span className='text-gray-700'>{city}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={resetFilters}
              className="bg-red-500 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-red-600 shadow-lg"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className='bg-white rounded-lg p-6 transition-transform duration-200 hover:shadow-xl md:col-span-3'>
          <h2 className='text-2xl font-semibold mb-4 font-roboto whitespace-nowrap'>Searched Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product) => (
              <div key={product.name} className='bg-white font-roboto rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg border border-gray-200'>
                <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
                <div className='p-4'>
                  <h3 className='font-semibold text-lg text-gray-800'>{product.name}</h3>
                  <p className='text-gray-600 font-semibold'>
                    {product.price} <span className="line-through font-sansing text-gray-500">{product.originalPrice}</span>
                  </p>
                  <p className='text-gray-500 flex items-center'>
                    <FontAwesomeIcon icon={faLocationDot} className='mr-1' />
                    {product.location}
                  </p>
                  <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 w-full'>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className='flex justify-center mt-8'>
            <button
              onClick={loadMoreProducts}
              className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200 shadow-lg'
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
