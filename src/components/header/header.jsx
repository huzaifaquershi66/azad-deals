import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCarSide,faTableCellsLarge,faCity,faCar,faMobile, faMobileScreenButton, faWarehouse, faGraduationCap,faLocationDot,faAngleDown, faMessage,faBars, faHeart, faBell, faCirclePlus, faUser, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo"


import cities from './cites';
  const uniqueCities = Array.from(new Set(cities));
const Header = ()=>{
  
  

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
  const handletoggleform = ()=>{
    console.log("Toggling form", toggleform);
    settoggleform(!toggleform)
  }
 

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

if (!toggleform) {
  document.body.style.overflow = 'auto'; // Scroll hide
} else {
  document.body.style.overflow = 'hidden'; // Scroll show
}

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
<div className='lg:flex justify-between hidden items-center xl:px-32 px-14 py-2 bg-gradient-to-b from-gray-100 to-gray-300


 border border-gray-400 rounded-md shadow-md h-14 w-full xl:mt-20 mt-0'>
  {/* Left Section - Icons */}
  <div className='flex items-center space-x-4'>
    <span className='group flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer bg-red-600 border border-gray-200 hover:bg-red-600 transition duration-300'>
      <FontAwesomeIcon icon={faHouse} className='text-[14px] text-white hover:text-white' />
      <h3 className='text-[14px] font-semibold text-white group-hover:text-white cursor-pointer'>Home</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-red-600 transition duration-300'>
      <FontAwesomeIcon icon={faCarSide} className='text-[14px] group-hover:text-white color2' />
      <h3 className='text-[14px] font-semibold color1 group-hover:text-white cursor-pointer'>Cars</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-red-600 transition duration-300'>
      <FontAwesomeIcon icon={faMobileScreenButton} className='text-[14px] group-hover:text-white color2' />
      <h3 className='text-[14px] font-semibold color1 group-hover:text-white cursor-pointer'>Mobile</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-red-600 transition duration-300'>
      <FontAwesomeIcon icon={faWarehouse} className='text-[14px] group-hover:text-white color2' />
      <h3 className='text-[14px] font-semibold color1 group-hover:text-white cursor-pointer'>Property</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-red-600 transition duration-300'>
      <FontAwesomeIcon icon={faGraduationCap} className='text-[14px] group-hover:text-white color2' />
      <h3 className='text-[14px] font-semibold color1 group-hover:text-white cursor-pointer'>Academics</h3>
    </span>
  </div>

  {/* Right Section - Home, Blogs, Contact Us */}
  <div className='flex items-center space-x-6 text-[14px] font-semibold color1 whitespace-nowrap'>
    <h3 className='hover:text-red-600 hover:cursor-pointer transition duration-300'>Home</h3>
    <h3 className='hover:text-red-600 hover:cursor-pointer transition duration-300'>Blogs</h3>
    <h3 className='hover:text-red-600 hover:cursor-pointer transition duration-300'>Contact Us</h3>
  </div>
</div>





    <div className='bg-gray-100 w-full h-20 px-2 md:px-10 py-8 xl:hidden flex items-center justify-between'>
    <Logo/>
    <button className='h-10 w-10  rounded border-[1px] border-red-600 hover:bg-red-600 group' onClick={handletoggleform}>
    
    <FontAwesomeIcon icon={faBars} className='text-[18px] text-red-600 group-hover:text-white ' />
    
    </button>
</div>
   {/* Centered Navbar */}
   <div className='bg-gray-100 w-full border-b-2 border-gray-200 h-20 px-20 py-8 xl:flex items-center hidden justify-center fixede  '  style={{ top: 0 }}>
  {/* Left Section - Messages, Favourites, Notifications */}
  <div className='flex items-center space-x-8'>
    <span className='flex items-center space-x-1'>
      <FontAwesomeIcon icon={faMessage} className='text-[15px] text-gray-500' />
      <h3 className='text-[14px] font-helveticaLight translate-y-[-1px] color1 hover:text-red-600 hover:cursor-pointer'>Messages</h3>
    </span>
    <span className='flex items-center space-x-1'>
      <FontAwesomeIcon icon={faHeart} className='text-[15px] text-gray-500' />
      <h3 className='text-[14px] font-helveticaLight translate-y-[-1px] color1 hover:text-red-600 hover:cursor-pointer'>Favourites</h3>
    </span>
    <span className='flex items-center space-x-1'>
      <FontAwesomeIcon icon={faBell} className='text-[15px] text-gray-500' />
      <h3 className='text-[14px] font-helveticaLight translate-y-[-1px] color1 hover:text-red-600 hover:cursor-pointer'>Notifications</h3>
    </span>
  </div>

  {/* Search Bar */}
  <div className='relative w-[700px] px-32'>
    <input 
      type='search' 
      className='rounded-3xl font-helveticaLight xl:pl-14  lg:pl-10 border-b-2 border-gray-300 focus:outline-none focus:ring-0 py-2 w-[500px]' 
      placeholder='Search...'
    />
    <FontAwesomeIcon 
      icon={faMagnifyingGlass} 
      className='absolute left-36 top-1/2 transform text-[15px] -translate-y-1/2 text-black' 
    />
  </div>

  {/* Right Section - Buttons */}
  <button className='bg-[#D50055] hover:bg-[#b3004588] transition duration-300 ease-in-out  text-white font-bold h-10 w-36 py-2 px-4 rounded-lg text-[13px] flex items-center space-x-2'>
    <FontAwesomeIcon icon={faCirclePlus} className='text-[17px] text-gray-100' />
    <span className='whitespace-nowrap text-[13px] font-helveticaLight '>Place an Ad</span>
  </button>

  <button className='bg-[#36454fd3] hover:bg-[#36454f71] text-white font-bold h-10 w-24 mx-3 py-2 px-4 rounded-lg text-[13px] flex items-center space-x-2'>
    <FontAwesomeIcon icon={faUser} className='text-[17px] text-gray-100' />
    <span className='whitespace-nowrap text-[13px] font-helveticaLight'>Sign in</span>
  </button>
</div>



<div className={`h-[950px] visible lg:invisible bg-white absolute overflow-y-hidden -mt-48 border-r-[1px] border-slate-600 z-[9999] backing overflow-x-hidden w-full max-w-[400px] ${toggleform ? 'show mx-0' : ''}`}
     style={{ overflowY: 'auto' }}>
  
  <div className='my-32 mx-4 h-auto w-full saning font-sans '>
    <div className='flex items-center space-x-6 justify-between px-2'>
      <div className="flex items-center space-x-2">
        {/* Logo Icon */}
        <div className="bg-blue-500 rounded-full md:h-16 h-10 md:w-16 w-10 flex items-center justify-center">
          <span className="text-white md:text-2xl text-lg font-bold">AD</span>
        </div>
        {/* Logo Text */}
        <div>
          <h1 className="md:text-2xl text-[20px] font-bold text-blue-600 font-roboto">Azad Deals</h1>
          <p className="text-sm text-gray-500 whitespace-nowrap font-helveticaLight">Freedom in Every Deal</p>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className="text-[24px] text-gray-600 cursor-pointer px-10"
        onClick={handletoggleform}
      />
    </div>
    
    <div className='w-full h-[1px] my-5 bg-gray-300'></div>

    {/* Navigation Options */}
    <div className='flex flex-col space-y-4 my-4 mr-8'>
      {["Mobiles", "Cars", "Properties", "Academics"].map((item) => (
        <button key={item} className='h-10 bg-gradient-to-r from-gray-300 to-gray-200 font-sansing text-black rounded-lg font-semibold transition-all duration-300 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 flex items-center justify-center text-[14px] transform hover:scale-105'>
          {item}
        </button>
      ))}
    </div>

  </div>

  {/* Bottom Section with Icons */}
  <div className='flex items-center justify-between max-w-[350px] w-full px-4 mx-auto translate-y-[-110px]'>
    <span className='flex items-center space-x-1 shrink-0 cursor-pointer'>
      <FontAwesomeIcon icon={faMessage} className='text-[13px] text-gray-500' />
      <h3 className='text-[14px] translate-y-[-1px] text-gray-800 font-sansing whitespace-nowrap hover:bg-red-600 hover:text-white transition duration-200 rounded-md p-1'>Messages</h3>
    </span>

    <span className='flex items-center space-x-1 shrink-0 cursor-pointer'>
      <FontAwesomeIcon icon={faHeart} className='text-[13px] text-gray-500' />
      <h3 className='text-[14px] translate-y-[-1px] font-sansing  text-gray-800 font-medium whitespace-nowrap hover:bg-red-600 hover:text-white transition duration-200 rounded-md p-1'>Favourites</h3>
    </span>

    <span className='flex items-center space-x-1 shrink-0 cursor-pointer'>
      <FontAwesomeIcon icon={faBell} className='text-[12px] text-gray-500' />
      <h3 className='text-[14px] translate-y-[-1px] font-sansing  text-gray-800 font-medium whitespace-nowrap hover:bg-red-600 hover:text-white transition duration-200 rounded-md p-1'>Notifications</h3>
    </span>
  </div>

  {/* Place an Ad Button */}
  <button className='bg-[#D50055] hover:bg-[#b3004588] text-white translate-y-[-90px] font-bold h-12 w-[90%] max-w-[350px] text-center py-2 px-4 rounded-2xl text-[14px] flex items-center justify-center space-x-2 mx-auto shadow-lg hover:bg-red-700 transition duration-200'>
    <FontAwesomeIcon icon={faCirclePlus} className='text-[17px]' />
    <span className='whitespace-nowrap font-sansing'>Place an Ad</span>
  </button>

  {/* Sign in Button */}
  <button className='bg-[#36454fd3] hover:bg-[#36454f71] justify-center  text-white translate-y-[-100px] font-bold h-10 w-24 mx-8 my-6 py-2 px-4  rounded-lg text-[14px] flex  space-x-2'>
    <FontAwesomeIcon icon={faUser} className='text-[16px] text-gray-200' />
    <span className='whitespace-nowrap'>Sign in</span>
  </button>

  <div className='w-full h-[1px] translate-y-[-100px] bg-gray-300'></div>
</div>



<div className='relative w-full h-[450px]  px-0 md:px-4 flex my-[3px] items-center justify-center'>
  {/* Background Image */}
  <img
    className='object-cover w-[1300px] h-full rounded-lg'
    src='https://images.pexels.com/photos/34577/pexels-photo.jpg?cs=srgb&dl=pexels-negativespace-34577.jpg&fm=jpg'
    alt='Background'
  />

    
<div className="absolute inset-0 flex items-center justify-center space-x-4" style={{ bottom: '48%' }}>
  {/* Logo Icon with enhanced shadow, glow, and hover rotation */}
  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-gray-800 to-black flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_15px_rgba(255,0,0,0.7)] transition-transform transform hover:scale-110 hover:rotate-12 border-4 border-white hover:border-opacity-50">
    <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
    <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 z-10 drop-shadow-2xl">
      AD
    </h1>
  </div>

  <h1 className="text-3xl md:text-5xl font-extrabold font-raleway text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-700 z-10 shadow-md drop-shadow-2xl transition-all duration-300 transform hover:scale-105 hover:tracking-wider">
    Azad Deal
</h1>







</div>
<div className='absolute inset-0 flex items-center justify-center'>
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

<div className='absolute inset-0 flex items-center justify-center md:mt-28 mt-52 px-4'>
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
  <div className={`md:mt-[304px] z-50 mt-[400px] p-4 border  border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-2/3 ' : 'w-2/3 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
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
  <div className={`md:mt-[304px] z-50 mt-[400px] p-4 border  border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-2/3 ' : 'w-2/3 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
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
        <div className={`md:mt-[304px] z-50 mt-[400px] p-4 border border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-2/3 ' : 'w-2/3 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
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
                  <option value='first-hand'>1st Hand</option>
                  <option value='second-hand'>2nd Hand</option>
                  <option value='third-hand'>3rd Hand</option>
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
        <div className={`md:mt-[304px] z-50 mt-[400px] p-4 border border-gray-300 ${advancedSearchInput ? 'h-[293px]' : 'h-20'} rounded-lg ${advancedSearchInput ? 'w-3/4 ' : 'w-3/4 '} absolute inset-1 bg-white w-4/5 mx-auto flex flex-col items-center`}>
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




   
    </>
  )

}
export default Header
