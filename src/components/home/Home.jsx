
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useState } from 'react';
import { faChevronLeft,faChevronRight, faLocationDot,faHeart} from '@fortawesome/free-solid-svg-icons';
import AdsByLocation from '../allcomp/adsby';
import products from './mobile';
import cars from './cars';
import properties from './Properties';

import { useEffect } from 'react';
import academics from './academics';
const Home = () => {
  const carouselRef = useRef(null)
  const propertyCarouselRef = useRef(null)
  const carsref = useRef(null)
  const Academicsref = useRef(null)

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isLeftDisabledproperty, setIsLeftDisabledproperty] = useState(true);
  const [isLeftDisabledcars, setIsLeftDisabledcars] = useState(true);
  const [isLeftDisabledacademics, setIsLeftDisabledacademics] = useState(true);

 

 
  // State for tracking favorite products
  const [favorites, setFavorites] = useState(new Array(products.length).fill(false));
  const [favoritesproperty, setFavoritesproperty] = useState(new Array(properties.length).fill(false));
  const [favoritescars, setFavoritescars] = useState(new Array(cars.length).fill(false)); 
  const [favoritesacademics, setFavoritesacademics] = useState(new Array(cars.length).fill(false));

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' 
      ? -carouselRef.current.clientWidth / 1
      : carouselRef.current.clientWidth / 1; // Adjust scroll amount as needed
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      checkScrollButtons();
    }
  };
  const scrollproperty = (direction) => {
    if (propertyCarouselRef.current) {
      const scrollAmount = direction === 'left' 
      ? -propertyCarouselRef.current.clientWidth / 1
      : propertyCarouselRef.current.clientWidth / 1; // Adjust scroll amount as needed
      propertyCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      checkScrollButtonspropery();
    }
  };
  const scrollcars = (direction) => {
    if (carsref.current) {
      const scrollAmount = direction === 'left' 
      ? -carsref.current.clientWidth / 1
      : carsref.current.clientWidth / 1; // Adjust scroll amount as needed
      carsref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      checkScrollButtonscars();
    }
  };
  const scrollacademics = (direction) => {
    if (Academicsref.current) {
      const scrollAmount = direction === 'left' 
      ? -Academicsref.current.clientWidth / 1
      : Academicsref.current.clientWidth / 1; // Adjust scroll amount as needed
      Academicsref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      checkScrollButtonsacademics();
    }
  };

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const isAtStart = carouselRef.current.scrollLeft === 0; // Check if at start
      const isAtEnd = carouselRef.current.scrollWidth - carouselRef.current.scrollLeft <= carouselRef.current.clientWidth; // Check if at end

      setIsLeftDisabled(isAtStart); // Enable/disable left button
    }
  };

  const checkScrollButtonspropery = () => {
    if (propertyCarouselRef.current) {
      const isAtStart = propertyCarouselRef.current.scrollLeft === 0; // Check if at start
      const isAtEnd = propertyCarouselRef.current.scrollWidth - propertyCarouselRef.current.scrollLeft <= propertyCarouselRef.current.clientWidth; // Check if at end

      setIsLeftDisabledproperty(isAtStart); // Enable/disable left button
    }
  };
  const checkScrollButtonscars = () => {
    if (carsref.current) {
      const isAtStart = carsref.current.scrollLeft === 0; // Check if at start
      const isAtEnd = carsref.current.scrollWidth - carsref.current.scrollLeft <= carsref.current.clientWidth; // Check if at end

      setIsLeftDisabledcars(isAtStart); // Enable/disable left button
    }
  };
  const checkScrollButtonsacademics = () => {
    if (Academicsref.current) {
      const isAtStart = Academicsref.current.scrollLeft === 0; // Check if at start
      const isAtEnd = carsref.current.scrollWidth - Academicsref.current.scrollLeft <= Academicsref.current.clientWidth; // Check if at end

      setIsLeftDisabledacademics(isAtStart); // Enable/disable left button
    }
  };
  useEffect(() => {
    checkScrollButtons(); // Initial check on mount
    const handleScroll = () => checkScrollButtons(); // Check buttons on scroll
    const currentRef = carouselRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll); // Attach scroll event listener
    }
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll); // Clean up event listener
      }
    };
  }, [products]);
  useEffect(() => {
    checkScrollButtonspropery(); // Initial check on mount
    const handleScroll = () => checkScrollButtonspropery(); // Check buttons on scroll
    const currentRef = propertyCarouselRef.current; // Use the ref correctly
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll); // Corrected the event name
    }
  
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll); // Clean up event listener
      }
    };
  }, [properties]);
  useEffect(() => {
    checkScrollButtonscars(); // Initial check on mount
    const handleScroll = () => checkScrollButtonscars(); // Check buttons on scroll
    const currentRef = carsref.current; // Use the ref correctly
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll); // Corrected the event name
    }
  
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll); // Clean up event listener
      }
    };
  }, [cars]);
  
  useEffect(() => {
    checkScrollButtonsacademics(); // Initial check on mount
    const handleScroll = () => checkScrollButtonsacademics(); // Check buttons on scroll
    const currentRef = Academicsref.current; // Use the ref correctly
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll); // Corrected the event name
    }
  
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll); // Clean up event listener
      }
    };
  }, [Academicsref]);
  

  // Function to handle favorite icon click
  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index]; // Toggle the favorite state
    setFavorites(newFavorites);
  };
  const toggleFavoriteproperty = (index) => {
    const newFavorites = [...favoritesproperty];
    newFavorites[index] = !newFavorites[index]; // Toggle the favorite state
    setFavoritesproperty(newFavorites);
  };
  const toggleFavoritecars = (index) => {
    const newFavorites = [...favoritescars];
    newFavorites[index] = !newFavorites[index]; // Toggle the favorite state
    setFavoritescars(newFavorites);
  };
   const toggleFavoriteacademics = (index) => {
    const newFavorites = [...favoritesacademics];
    newFavorites[index] = !newFavorites[index]; // Toggle the favorite state
    setFavoritesacademics(newFavorites);
  };
  return (
    <>
<div className='max-w-[1230px] mx-auto p-4 mt-2 md:mt-40 translate-y-[0px] md:translate-y-[-180px]'>
  <div className='text-center mb-12'>
    <h2 className='text-4xl font-bold font-helveticaLight text-gray-900 relative inline-block'>
      <span className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#D50055] to-[#FF4081] transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100' />
      Explore Our Categories
    </h2>
    <p className='mt-2 text-gray-700 text-lg font-sansing'>
      Discover a wide range of products tailored just for you!
    </p>
  </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
    
    {/* Mobile Card */}
    <div className='relative h-60 border border-gray-300 bg-gray-100 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://www.igeeksblog.com/wp-content/uploads/2024/09/Download-iPhone-16-and-16-Pro-Max-Wallpapers.jpg' 
        className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-125' 
        alt='Mobiles'
      />
      <h3 className='absolute left-5 bottom-5 font-sans font-bold text-[20px] text-white text-shadow-lg bg-gradient-to-r from-[#D50055] to-[#FF4081] bg-opacity-90 p-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:translate-y-2'>
        Mobiles
      </h3>
      <div className='absolute top-5 right-5 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        Trending
      </div>
      <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-20 transition-opacity duration-300'></div>
    </div>
    
    {/* Properties Card */}
    <div className='relative h-60 border border-gray-300 bg-gray-100 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060_640.jpg' 
        className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-125' 
        alt='Properties'
      />
      <h3 className='absolute left-5 bottom-5 font-sans font-bold text-[20px] text-white text-shadow-lg bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] bg-opacity-90 p-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:translate-y-2'>
        Properties
      </h3>
      <div className='absolute top-5 right-5 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        New Arrival
      </div>
      <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-20 transition-opacity duration-300'></div>
    </div>

    {/* Cars Card */}
    <div className='relative h-60 border border-gray-300 bg-gray-100 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://www.isharearena.com/wp-content/uploads/2012/11/wallpaper-2426837.jpg' 
        className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-125' 
        alt='Cars'
      />
      <h3 className='absolute left-5 bottom-5 font-sans font-bold text-[20px] text-white text-shadow-lg bg-gradient-to-r from-[#FF5722] to-[#FF9800] bg-opacity-90 p-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:translate-y-2'>
        Cars
      </h3>
      <div className='absolute top-5 right-5 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        Popular
      </div>
      <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-20 transition-opacity duration-300'></div>
    </div>

    {/* Education Card */}
    <div className='relative h-60 border border-gray-300 bg-gray-100 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://watermark.lovepik.com/photo/50089/0761.jpg_wh1200.jpg' 
        className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-125' 
        alt='Education'
      />
      <h3 className='absolute left-5 bottom-5 font-sans font-bold text-[20px] text-white text-shadow-lg bg-gradient-to-r from-[#2196F3] to-[#1976D2] bg-opacity-90 p-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:translate-y-2'>
        Azad Education
      </h3>
      <div className='absolute top-5 right-5 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        Recommended
      </div>
      <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-20 transition-opacity duration-300'></div>
    </div>
  </div>

  {/* Footer Section */}

</div>


<div className='max-w-[1230px] mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
      <div className='md:flex justify-between items-center flex-auto'>
        <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7'>Latest Mobiles on Sale</h1>
        <button className='font-sansing font-bold translate-y-[-30px] md:translate-y-[-0px] text-[14px]'>See More</button>
      </div>

      <div className='relative'>
        {/* Left Scroll Button */}
        {!isLeftDisabled && (
          <button
            className='absolute left-4 top-40 transform -translate-y-1/2 z-10 
                       text-black bg-white rounded-full shadow-lg 
                       w-8 h-8 flex items-center justify-center 
                       hover:bg-gray-100 transition duration-300 ease-in-out'
                      onClick={() => scroll('left')}> 
          
            <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
          </button>
        )}

        <div ref={carouselRef} className='product-container flex overflow-x-scroll'>
          {products.map((product, index) => (
            <div key={index} className='product flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-2'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative'>
                <img
                  src={product.image}
                  className='object-cover w-full h-48 cursor-pointer'
                  alt='Mobiles'
                />
                {/* Favorite Icon on top of the image */}
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full group cursor-pointer transition-colors duration-300 
                    ${favorites[index] ? 'bg-red-500' : 'bg-slate-200'} absolute top-2 right-2 shadow hover:bg-red-600`}
                  onClick={() => toggleFavorite(index)}
                >
                  <FontAwesomeIcon icon={faHeart} className={`text-${favorites[index] ? 'white' : 'red-500'} text-[17px] group-hover:text-white`} />
                </div>
                <div className='product-info p-4'>
                  <div className='flex justify-between items-center'>
                    <div className='price-location'>
                      <h3 className='font-bold font-roboto text-[18px]'>{product.price}</h3>
                      <h3 className='font-helveticaLight text-[14px] line-through text-gray-500'>{product.originalPrice}</h3>
                    </div>
                  </div>
                  <div className='font-sans font-semibold my-2'>
                    <h1>{product.name}</h1>
                  </div>
                  <div className='location flex items-center'>
                    <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
                    <h3 className='ml-1'>{product.location}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className='absolute right-4 top-[calc(160px+1px)] transform -translate-y-1/2 z-10 
                     text-black bg-white rounded-full shadow-lg 
                     w-8 h-8 flex items-center justify-center 
                     hover:bg-gray-100 transition duration-300 ease-in-out md:invisible visible'
                  onClick={() => scroll('Right')}>  
        
          <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
        </button>
      </div>
    </div>
    <div className='max-w-[1230px] mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
      <div className='md:flex justify-between items-center flex-auto'>
        <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7 whitespace-nowrap'>Latest Properties for Sale</h1>
        <button className='font-sansing font-bold translate-y-[-30px] md:translate-y-[-0px] text-[14px]'>See More</button>
      </div>

      <div className='relative'>
        {/* Left Scroll Button */}
        {!isLeftDisabledproperty && (
          <button
            className='absolute left-4 top-40 transform -translate-y-1/2 z-10 
                       text-black bg-white rounded-full shadow-lg 
                       w-8 h-8 flex items-center justify-center 
                       hover:bg-gray-100 transition duration-300 ease-in-out'
                      onClick={() => scrollproperty('left')}> 
          
            <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
          </button>
        )}
      
        <div ref={propertyCarouselRef} className='product-container flex overflow-x-scroll'>
          {properties.map((property, index) => (
            <div key={index} className='product flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-2'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative'>
                <img
                  src={property.image}
                  className='object-cover w-full h-48 cursor-pointer'
                  alt='Property'
                />
                {/* Favorite Icon on top of the image */}
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full group cursor-pointer transition-colors duration-300 
                    ${favoritesproperty[index] ? 'bg-red-500' : 'bg-slate-200'} absolute top-2 right-2 shadow hover:bg-red-600`}
                  onClick={() => toggleFavoriteproperty(index)}
                >
                  <FontAwesomeIcon icon={faHeart} className={`text-${favoritesproperty[index] ? 'white' : 'red-500'} text-[17px] group-hover:text-white`} />
                </div>
                <div className='product-info p-4'>
                  <div className='flex justify-between items-center'>
                    <div className='price-location'>
                      <h3 className='font-bold font-roboto text-[18px]'>{property.price}</h3>
                      <h3 className='font-helveticaLight text-[14px] line-through text-gray-500'>{property.originalPrice}</h3>
                    </div>
                  </div>
                  <div className='font-sans font-semibold my-2'>
                    <h1>{property.name}</h1>
                  </div>
                  <div className='location flex items-center'>
                    <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
                    <h3 className='ml-1'>{property.location}</h3>
                  </div>
                  <div className='details font-montserrat text-[14px] text-gray-500'>
                    {property.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className='absolute right-4 top-[calc(160px+1px)] transform -translate-y-1/2 z-10 
                     text-black bg-white rounded-full shadow-lg 
                     w-8 h-8 flex items-center justify-center 
                     hover:bg-gray-100 transition duration-300 ease-in-out md:invisible visible'
                  onClick={() => scrollproperty('Right')}> 
        
          <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
        </button>
      </div>
    </div>

    <div className='max-w-[1230px] mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
  <div className='md:flex justify-between items-center flex-auto'>
    <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7 whitespace-nowrap'>Latest Cars for Sale</h1>
    <button className='font-sansing font-bold translate-y-[-30px] md:translate-y-[-0px] text-[14px]'>See More</button>
  </div>

  <div className='relative'>
    {/* Left Scroll Button */}
    {!isLeftDisabledcars && (
      <button
        className='absolute left-4 top-40 transform -translate-y-1/2 z-10 
                   text-black bg-white rounded-full shadow-lg 
                   w-8 h-8 flex items-center justify-center 
                   hover:bg-gray-100 transition duration-300 ease-in-out'
        onClick={() => scrollcars('left')}> 
      
        <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
      </button>
    )}
  
    <div ref={carsref} className='product-container flex overflow-x-scroll'>
      {cars.map((car, index) => (
        <div key={index} className='product flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-2'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative'>
            <img
              src={car.image}
              className='object-cover w-full h-48 cursor-pointer'
              alt='Car'
            />
            {/* Favorite Icon on top of the image */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full group cursor-pointer transition-colors duration-300 
                ${favoritescars[index] ? 'bg-red-500' : 'bg-slate-200'} absolute top-2 right-2 shadow hover:bg-red-600`}
              onClick={() => toggleFavoritecars(index)}
            >
              <FontAwesomeIcon icon={faHeart} className={`text-${favoritescars[index] ? 'white' : 'red-500'} text-[17px] group-hover:text-white`} />
            </div>
            <div className='product-info p-4'>
              <div className='flex justify-between items-center'>
                <div className='price-location'>
                  <h3 className='font-bold font-roboto text-[18px]'>{car.price}</h3>
                  <h3 className='font-helveticaLight text-[14px] line-through text-gray-500'>{car.originalPrice}</h3>
                </div>
              </div>
              <div className='font-sans font-semibold my-2'>
                <h1>{car.name}</h1>
              </div>
              <div className='location flex items-center'>
                <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
                <h3 className='ml-1'>{car.location}</h3>
              </div>
              <div className='details font-montserrat text-[14px] text-gray-500'>
                {car.details}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Scroll Button */}
    <button
      className='absolute right-4 top-[calc(160px+1px)] transform -translate-y-1/2 z-10 
                 text-black bg-white rounded-full shadow-lg 
                 w-8 h-8 flex items-center justify-center 
                 hover:bg-gray-100 transition duration-300 ease-in-out md:invisible visible'
      onClick={() => scrollcars('right')}> 
        
      <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
    </button>
  </div>
</div>

<div className='max-w-[1230px] mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
  <div className='md:flex justify-between items-center flex-auto'>
    <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7 whitespace-nowrap'>Latest Courses for Sale</h1>
    <button className='font-sansing font-bold translate-y-[-30px] md:translate-y-[-0px] text-[14px]'>See More</button>
  </div>

  <div className='relative'>
    {/* Left Scroll Button */}
    {!isLeftDisabledacademics && (
      <button
        className='absolute left-4 top-40 transform -translate-y-1/2 z-10 
                   text-black bg-white rounded-full shadow-lg 
                   w-8 h-8 flex items-center justify-center 
                   hover:bg-gray-100 transition duration-300 ease-in-out'
        onClick={() => scrollacademics('left')}> 
      
        <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
      </button>
    )}
  
    <div ref={Academicsref} className='product-container flex overflow-x-scroll'>
      {academics.map((car, index) => (
        <div key={index} className='product flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-2'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative'>
            <img
              src={car.image}
              className='object-cover w-full h-48 cursor-pointer'
              alt='Car'
            />
            {/* Favorite Icon on top of the image */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full group cursor-pointer transition-colors duration-300 
                ${favoritesacademics[index] ? 'bg-red-500' : 'bg-slate-200'} absolute top-2 right-2 shadow hover:bg-red-600`}
              onClick={() => toggleFavoriteacademics(index)}
            >
              <FontAwesomeIcon icon={faHeart} className={`text-${favoritesacademics[index] ? 'white' : 'red-500'} text-[17px] group-hover:text-white`} />
            </div>
            <div className='product-info p-4'>
              <div className='flex justify-between items-center'>
                <div className='price-location'>
                  <h3 className='font-bold font-roboto text-[18px]'>{car.price}</h3>
                  <h3 className='font-helveticaLight text-[14px]  text-gray-500'>{car.duration}</h3>
                </div>
              </div>
              <div className='font-sans font-semibold my-2'>
                <h1>{car.title}</h1>
              </div>
              <div className='location flex items-center'>
                <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
                <h3 className='ml-1'>{car.location}</h3>
              </div>
              <div className='details font-montserrat text-[14px] text-gray-500'>
                {car.university}
              </div>
              <div className='details font-montserrat text-[14px] text-gray-500'>
                {car.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Scroll Button */}
    <button
      className='absolute right-4 top-[calc(160px+1px)] transform -translate-y-1/2 z-10 
                 text-black bg-white rounded-full shadow-lg 
                 w-8 h-8 flex items-center justify-center 
                 hover:bg-gray-100 transition duration-300 ease-in-out md:invisible visible'
      onClick={() => scrollacademics('right')}> 
        
      <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
    </button>
  </div>
</div>


<AdsByLocation/>

</>
    
  );
}

export default Home;