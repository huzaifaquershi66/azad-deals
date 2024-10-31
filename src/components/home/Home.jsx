
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useState } from 'react';
import { faChevronLeft,faChevronRight, faLocationDot,faHeart,faBed,faKitchenSet,faBathtub,faCouch,faHouse, faCarSide,faTableCellsLarge,faCity,faCar,faMobile, faMobileScreenButton, faWarehouse, faGraduationCap,faAngleDown, faMessage,faBars, faBell, faCirclePlus, faUser, faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import AdsByLocation from '../allcomp/adsby';

import products from './mobile';
import cars from './cars';
import properties from './Properties';
import banner from "../../assets/banner.jpg"
import logo from "../../assets/logo2.png"

import { useEffect } from 'react';
import academics from './academics';
import cities from '../header/cites';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
const uniqueCities = Array.from(new Set(cities));
const Home = () => {
  const carouselRef = useRef(null)
  const propertyCarouselRef = useRef(null)
  const carsref = useRef(null)
  const Academicsref = useRef(null)

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isLeftDisabledproperty, setIsLeftDisabledproperty] = useState(true);
  const [isLeftDisabledcars, setIsLeftDisabledcars] = useState(true);
  const [isLeftDisabledacademics, setIsLeftDisabledacademics] = useState(true);
  const [searchCategory, setSearchCategory] = useState('Mobile');
  const [filteredCities, setFilteredCities] = useState(uniqueCities);
  const [toggleform, settoggleform] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [showCities, setshowCities] = useState(false);
  const [toggleAdvancedSearch, setToggleAdvancedSearch] = useState(false);
  const [advancedSearchInput, setAdvancedSearchInput] = useState(false);
  const [rooms, setRooms] = useState("");
  const [baths, setBaths] = useState("");
  const [kitchens, setKitchens] = useState("");
  const [houseType, setHouseType] = useState('');
  const [carColor, setCarColor] = useState('');
  const [ownerType, setOwnerType] = useState('');
  const [assemblyType, setAssemblyType] = useState('');
  const [transmissionType, setTransmissionType] = useState('')
 // State for Yes/No toggle
 const [modelType, setModelType] = useState('');
 const [mobileColor, setMobileColor] = useState('');
 
 const [storageType, setStorageType] = useState('');
 const [degreeType, setDegreeType] = useState('');
 const [majorSubject, setMajorSubject] = useState('');
 const [instituteType, setInstituteType] = useState('');
 const [gradeType, setGradeType] = useState('');


 

 
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
  const handleCategoryClick = (category) => {
    setSearchCategory(category);
    setToggleAdvancedSearch(category === 'Property' || category === 'Cars'||category==="Mobile" ||category==="Academics");

  };

  const handleAdvancedSearchToggle = (e) => {
    setAdvancedSearchInput(e.target.checked);
  };

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

  const getPlaceholderText = () => {
    switch (searchCategory) {
      case 'Mobile':
        return 'Find phones';
      case 'Cars':
        return 'Find cars';
      case 'Property':
        return 'Find properties';
        case 'Academics':
          return 'Find Courses';
      default:
        return 'Find phones, cars, properties, and more';
    }
  };
  
  return (
    <>
    <div className='relative w-full h-[450px]  px-0 md:px-4 flex my-[3px] items-center justify-center'>
  {/* Background Image */}
  <img
    className='object-cover w-full h-full rounded-lg'
    src={banner}
    alt='Background'
  />

    
{/* <div className='absolute inset-0 h-40 w-40 flex items-center z-50 justify-center  md:my-0 md:mx-[630px]'>
  <img src={logo} className='object-cover h-full w-full z-50'/>
</div> */}
<div className='absolute  inset-0 flex items-center justify-center md:mt-[289px] mt-0'>
      <div className='flex items-center md:space-x-4 space-x-2 bg-white h-14 md:w-96 w-[310px] md:px-6 px-2 font-sans md:text-[14px] text-[12px] rounded-t-xl z-10 shadow-lg'>
        
        <button 
          onClick={() => handleCategoryClick('Mobile')} 
          className={`h-8 rounded-lg font-helveticaLight text-[12px] md:text-[14px] px-3 py-1 border border-transparent ${searchCategory === 'Mobile' ? 'bg-red-500 text-white' : 'bg-white text-black'} transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-xl`}
        >
          <h3>Mobile</h3>
        </button>

        <button 
          onClick={() => handleCategoryClick('Cars')} 
          className={`h-8 rounded-lg font-helveticaLight text-[12px] md:text-[14px] px-3 py-1 border border-transparent ${searchCategory === 'Cars' ? 'bg-red-500 text-white' : 'bg-white text-black'} transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-xl`}
        >
          Cars
        </button>

        <button 
          onClick={() => handleCategoryClick('Property')} 
          className={`h-8 rounded-lg font-helveticaLight text-[12px] md:text-[14px] px-3 py-1 border border-transparent ${searchCategory === 'Property' ? 'bg-red-500 text-white' : 'bg-white text-black'} transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-xl`}
        >
          Property
        </button>

        <button 
          onClick={() => handleCategoryClick('Academics')} 
          className={`h-8 rounded-lg font-helveticaLight text-[12px] md:text-[14px] px-3 py-1 border border-transparent ${searchCategory === 'Academics' ? 'bg-red-500 text-white' : 'bg-white text-black'} transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-xl`}
        >
          Academics
        </button>
      </div>
    </div>

<div className='absolute inset-0 flex items-center justify-center md:mt-[400px] mt-52 px-4'>
  <div className='flex flex-col md:flex-row items-center md:h-14 h-40 w-[400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] bg-white rounded-lg shadow-xl p-4 transition-transform duration-300 hover:shadow-2xl bg-opacity-95'>
    
    <div className='flex items-center mx-2 relative w-full md:w-[45%]'>
      <div className='relative w-full'>
        <input
          type='text'
          readOnly
          placeholder='Search Location'
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
    

    <div className='flex items-center mx-2 relative w-full md:w-[45%] mt-2 md:mt-0'>
      <input
        type='search'
        placeholder={getPlaceholderText()} 
        className='h-12 font-helveticaLight w-full rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 border-[1px] border-gray-300 transition duration-200'
      />
      <FontAwesomeIcon
        icon={faTableCellsLarge}
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform duration-300 hover:scale-110'
      />
    </div>
    
    <button className='md:h-12 h-14 w-full md:w-[60px] rounded-lg bg-gradient-to-r from-red-700 to-red-500 mt-2 md:mt-0 shadow-lg hover:scale-105 transition duration-300'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[16px] text-white' />
    </button>
  </div>
</div>




{toggleAdvancedSearch && searchCategory === 'Property' && (
  <div className={`md:mt-[450px] z-50 mt-[400px] p-4 border  border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-2/3 ' : 'w-2/3 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
    <div className='flex items-center space-x-5'>
    <h3 className='font-helveticaLight text-lg '>Advanced Search</h3>
    <label class="switch" >
  <input type="checkbox"  onChange={handleAdvancedSearchToggle}/>
  <span class="slider round"></span>
</label>
<h3 className='font-roboto'>Try Now</h3>
</div>

{advancedSearchInput && (
  <div className='w-full flex flex-wrap justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg'>
    {/* No of Rooms Input */}
    <div className='flex flex-col w-[32%] mb-6'> {/* Increased width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>No of Rooms:</label>
      <select
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled>Select Rooms</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>

    {/* No of Baths Input */}
    <div className='flex flex-col w-[32%] mb-6'> {/* Increased width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>No of Baths:</label>
      <select
        value={baths}
        onChange={(e) => setBaths(e.target.value)}
        className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled>Select Baths</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>

    {/* No of Kitchens Input */}
    <div className='flex flex-col w-[32%] mb-6'> {/* Increased width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>No of Kitchens:</label>
      <select
        value={kitchens}
        onChange={(e) => setKitchens(e.target.value)}
        className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled>Select Kitchens</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>

    {/* House Type Input - Full Width on a New Line */}
    <div className='flex flex-col w-full mb-6 relative'> {/* Full width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>House Type:</label>
      <select
        value={houseType}
        onChange={(e) => setHouseType(e.target.value)}
        className='border border-gray-400 font-montserrat shadow-md cursor-pointer px-8 focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled>Select Type</option>
        <option value='upper portion'>Upper Portion</option>
        <option value='lower portion'>Lower Portion</option>
        <option value='flat'>Flat</option>
        <option value='house'>House</option>
        {/* Add more types as needed */}
      </select>
      <FontAwesomeIcon icon={faCity} className='absolute top-12 left-2 text-pink-600' />
    </div>
  </div>
)}




  </div>
)}

{toggleAdvancedSearch && searchCategory === 'Cars' && (
  <div className={`md:mt-[450px] z-50 mt-[400px] p-4 border  border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-2/3 ' : 'w-2/3 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
    <div className='flex items-center space-x-5'>
    <h3 className='font-helveticaLight text-lg '>Advanced Search</h3>
    <label class="switch" >
  <input type="checkbox"  onChange={handleAdvancedSearchToggle}/>
  <span class="slider round"></span>
</label>
<h3 className='font-roboto'>Try Now</h3>
</div>

{advancedSearchInput && (
  <div className='w-full flex flex-wrap justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg'>
    {/* No of Rooms Input */}
    <div className='flex flex-col w-[32%] mb-6'> {/* Increased width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>Transmission</label>
      <select
        value={transmissionType}
        onChange={(e) => setTransmissionType(e.target.value)}
        className='border border-gray-400 shadow-md font-montserrat cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled >ex.Automative</option>
        {["Manual","Automative"].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>

    {/* No of Baths Input */}
    <div className='flex flex-col w-[32%] mb-6'> {/* Increased width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>Assembly
      </label>
      <select
        value={assemblyType}
        onChange={(e) => setAssemblyType(e.target.value)}
        className='border font-montserrat border-gray-400 shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled>
        Select Option</option>
        {["Imported","Local"].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>

    {/* No of Kitchens Input */}
    <div className='flex flex-col w-[32%] mb-6'> {/* Increased width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
      Color</label>
      <select
        value={carColor}
        onChange={(e) => setCarColor(e.target.value)}
        className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled>Select Option</option>
        {["Black","Brown","White","Red"].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>

    {/* House Type Input - Full Width on a New Line */}
    <div className='flex flex-col w-full mb-6 relative'> {/* Full width */}
      <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>Owner</label>
      <select
        value={ownerType}
        onChange={(e) => setOwnerType(e.target.value)}
        className='border border-gray-400 font-montserrat shadow-md cursor-pointer px-8 focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
      >
        <option value='' disabled>Select Option</option>
        <option value='upper portion'>1st Hand</option>
        <option value='lower portion'>Second Hand</option>
        <option value='flat'>3rd Hand</option>
      
        {/* Add more types as needed */}
      </select>
      <FontAwesomeIcon icon={faCar} className='absolute top-12 left-2 text-pink-600' />
    </div>
  </div>
)}




  </div>
)}
 {toggleAdvancedSearch && searchCategory === 'Mobile' && (
        <div className={`md:mt-[450px] z-50 mt-[400px] p-4 border border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-2/3 ' : 'w-2/3 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
          <div className='flex items-center space-x-5'>
            <h3 className='font-helveticaLight text-lg'>Advanced Search</h3>
            <label className="switch">
              <input type="checkbox" onChange={handleAdvancedSearchToggle} />
              <span className="slider round"></span>
            </label>
            <h3 className='font-roboto'>Try Now</h3>
          </div>

          {advancedSearchInput && (
            <div className='w-full flex flex-wrap justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg'>
              
              {/* Model Input */}
              <div className='flex flex-col w-[32%] mb-6'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Model
                </label>
                <select
                  value={modelType}
                  onChange={(e) => setModelType(e.target.value)}
                  className='border border-gray-400 shadow-md font-montserrat cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Model</option>
                  {["iPhone", "Samsung", "Xiaomi", "Oppo"].map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Input */}
              <div className='flex flex-col w-[32%] mb-6'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Color
                </label>
                <select
                  value={mobileColor}
                  onChange={(e) => setMobileColor(e.target.value)}
                  className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Color</option>
                  {["Black", "White", "Blue", "Red", "Gold"].map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {/* Owner Input */}
              <div className='flex flex-col w-[32%] mb-6'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Owner
                </label>
                <select
                  value={ownerType}
                  onChange={(e) => setOwnerType(e.target.value)}
                  className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Owner</option>
                  <option value='first-hand'>New</option>
                  <option value='second-hand'>Old</option>
                
                </select>
              </div>

              {/* Storage Input */}
              <div className='flex flex-col w-full mb-6 relative'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Storage
                </label>
                <select
                  value={storageType}
                  onChange={(e) => setStorageType(e.target.value)}
                  className='border border-gray-400 font-montserrat shadow-md cursor-pointer px-6 focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Storage</option>
                  {["64GB", "128GB", "256GB", "512GB"].map((storage) => (
                    <option key={storage} value={storage}>
                      {storage}
                    </option>
                  ))}
                </select>
                <FontAwesomeIcon icon={faMobile} className='absolute top-12 left-2 text-[16px] text-pink-600' />
              </div>
            </div>
          )}
        </div>
      )}

{toggleAdvancedSearch && searchCategory === 'Academics' && (
        <div className={`md:mt-[450px] z-50 mt-[400px] p-4 border border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-3/4 ' : 'w-3/4 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
          <div className='flex items-center space-x-5'>
            <h3 className='font-helveticaLight text-lg'>Advanced Search</h3>
            <label className="switch">
              <input type="checkbox" onChange={handleAdvancedSearchToggle} />
              <span className="slider round"></span>
            </label>
            <h3 className='font-roboto'>Try Now</h3>
          </div>

          {advancedSearchInput && (
            <div className='w-full flex flex-wrap justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg'>
              
              {/* Degree Input */}
              <div className='flex flex-col w-[32%] mb-6'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Degree
                </label>
                <select
                  value={degreeType}
                  onChange={(e) => setDegreeType(e.target.value)}
                  className='border border-gray-400 shadow-md font-montserrat cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Degree</option>
                  {["Bachelor's", "Master's", "PhD"].map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>

              {/* Major Input */}
              <div className='flex flex-col w-[32%] mb-6'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Major Subject
                </label>
                <select
                  value={majorSubject}
                  onChange={(e) => setMajorSubject(e.target.value)}
                  className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Major</option>
                  {["Computer Science", "Engineering", "Medicine", "Business"].map((major) => (
                    <option key={major} value={major}>
                      {major}
                    </option>
                  ))}
                </select>
              </div>

              {/* Institute Input */}
              <div className='flex flex-col w-[32%] mb-6'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Institute Type
                </label>
                <select
                  value={instituteType}
                  onChange={(e) => setInstituteType(e.target.value)}
                  className='border border-gray-400 font-montserrat shadow-md cursor-pointer focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Institute</option>
                  <option value='university'>University</option>
                  <option value='college'>College</option>
                  <option value='school'>School</option>
                </select>
              </div>

              {/* Grade Input */}
              <div className='flex flex-col w-full mb-6 relative'>
                <label className='font-helveticaLight text-md mb-1 text-gray-800 transition-transform duration-200 transform hover:translate-y-[-2px]'>
                  Grade
                </label>
                <select
                  value={gradeType}
                  onChange={(e) => setGradeType(e.target.value)}
                  className='border border-gray-400 font-montserrat shadow-md cursor-pointer px-8 focus:outline-none rounded-lg p-3 mt-1 h-12 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:bg-blue-50 hover:shadow-lg'
                >
                  <option value='' disabled>Select Grade</option>
                  {["A", "B", "C", "D"].map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      )}
  
    </div>
<div className='w-full mx-auto p-4 mt-2 md:mt-52 translate-y-[0px] md:translate-y-[-180px]'>
  <div className='text-center mb-12'>
    <h2 className='text-4xl font-bold font-helveticaLight text-gray-900 relative inline-block'>
      <span className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#D50055] to-[#FF4081] transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100' />
      Explore Our Categories
    </h2>
    <p className='mt-2 text-gray-700 text-lg font-sansing'>
      Discover a wide range of products tailored just for you!
    </p>
  </div>

  <div className='flex justify-center'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-20 gap-y-6 gap-x-6 px-4 md:px-0 max-w-7xl'>

    {/* Mobile Card */}
    <div className='relative h-80 sm:h-96 w-full sm:w-72 border border-gray-300 bg-gray-100 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://www.igeeksblog.com/wp-content/uploads/2024/09/Download-iPhone-16-and-16-Pro-Max-Wallpapers.jpg' 
        className='object-cover w-full h-3/5 transition-transform duration-300 ease-in-out group-hover:scale-110' 
        alt='Mobiles'
      />
      <h3 className='absolute left-4 bottom-4 font-raleway font-bold text-[18px] sm:text-[20px] text-white bg-black bg-opacity-80 p-2 rounded-md shadow-lg'>
        Mobiles
      </h3>
      <div className='absolute top-4 right-4 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        Trending
      </div>
    </div>

    {/* Properties Card */}
    <div className='relative h-80 sm:h-96 w-full sm:w-72 border border-gray-300 bg-gray-100 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060_640.jpg' 
        className='object-cover w-full h-3/5 transition-transform duration-300 ease-in-out group-hover:scale-110' 
        alt='Properties'
      />
      <h3 className='absolute left-4 bottom-4 font-raleway font-bold text-[18px] sm:text-[20px] text-white bg-black bg-opacity-80 p-2 rounded-md shadow-lg'>
        Properties
      </h3>
      <div className='absolute top-4 right-4 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        New Arrival
      </div>
    </div>

    {/* Cars Card */}
    <div className='relative h-80 sm:h-96 w-full sm:w-72 border border-gray-300 bg-gray-100 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://www.isharearena.com/wp-content/uploads/2012/11/wallpaper-2426837.jpg' 
        className='object-cover w-full h-3/5 transition-transform duration-300 ease-in-out group-hover:scale-110' 
        alt='Cars'
      />
      <h3 className='absolute left-4 bottom-4 font-raleway font-bold text-[18px] sm:text-[20px] text-white bg-black bg-opacity-80 p-2 rounded-md shadow-lg'>
        Cars
      </h3>
      <div className='absolute top-4 right-4 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        Popular
      </div>
    </div>

    {/* Education Card */}
    <div className='relative h-80 sm:h-96 w-full sm:w-72 border border-gray-300 bg-gray-100 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group'>
      <img 
        src='https://watermark.lovepik.com/photo/50089/0761.jpg_wh1200.jpg' 
        className='object-cover w-full h-3/5 transition-transform duration-300 ease-in-out group-hover:scale-110' 
        alt='Education'
      />
      <h3 className='absolute left-4 bottom-4 font-raleway font-bold text-[18px] sm:text-[20px] text-white bg-black bg-opacity-80 p-2 rounded-md shadow-lg'>
        Azad Education
      </h3>
      <div className='absolute top-4 right-4 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-lg'>
        Recommended
      </div>
    </div>

  </div>
</div>





  {/* Footer Section */}

</div>


<div className='w-full mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
      <div className='md:flex justify-between items-center flex-auto'>
        <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7'>Mobiles on Sale</h1>
        <Link to="listing">
     
        <button className='font-sansing font-bold translate-y-[-30px] md:translate-y-[-0px] text-[14px]'>See More</button>
        </Link>
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
    <div className='w-full mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
  <div className='md:flex justify-between items-center flex-auto'>
    <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7 whitespace-nowrap'>Properties for Sale</h1>
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
            {/* "For Rent" or "For Sale" Label */}
            <div className='absolute top-2 left-2 bg-white bg-opacity-80 text-black font-bold text-sm p-1 rounded'>
              {property.forSale ? 'For Sale' : 'For Rent'}
            </div>
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
              {/* Property Icons */}
              <div className='property-icons flex mt-2'>
                {property.type === 'Bedroom' && (
                  <FontAwesomeIcon icon={faBed} className='text-gray-500 mr-2' title='Bedroom' />
                )}
                {property.type === 'Kitchen' && (
                  <FontAwesomeIcon icon={faKitchenSet} className='text-gray-500 mr-2' title='Kitchen' />
                )}
                {property.type === 'Bathroom' && (
                  <FontAwesomeIcon icon={faBathtub} className='text-gray-500 mr-2' title='Bathroom' />
                )}
                {property.type === 'Living Room' && (
                  <FontAwesomeIcon icon={faCouch} className='text-gray-500 mr-2' title='Living Room' />
                )}
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



    <div className='w-full mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
  <div className='md:flex justify-between items-center flex-auto'>
    <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7 whitespace-nowrap'>Cars for Sale</h1>
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

<div className='w-full mx-auto p-4 md:translate-y-[-130px] translate-y-[-0px]'>
  <div className='md:flex justify-between items-center flex-auto'>
    <h1 className='font-montserrat font-bold color5 text-[22px] my-2 py-7 whitespace-nowrap'>Azad Education</h1>
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