import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCarSide,faTableCellsLarge,faCity,faCar,faMobile, faMobileScreenButton, faWarehouse, faGraduationCap,faLocationDot,faAngleDown, faMessage,faBars, faHeart, faBell, faCirclePlus, faUser, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo"


import cities from './cites';
import { Link, useNavigate } from 'react-router-dom';
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

const navigate = useNavigate()
 
if (!toggleform) {
  document.body.style.overflow = 'auto'; // Scroll hide
} else {
  document.body.style.overflow = 'hidden'; // Scroll show
}

const handletoggleform =()=>{
  settoggleform(!toggleform)
}

const handleclick = ()=>{
  navigate("/placeadd")
  settoggleform(!toggleform)
}
  return (
    <>
<div className='xl:flex justify-between hidden items-center xl:px-32 px-14 py-3 bg-gradient-to-r from-indigo-300 via-white to-indigo-300 border border-gray-200 rounded-2xl shadow-2xl h-16 w-full xl:mt-20 mt-4 backdrop-blur-md' style={{ backgroundImage: 'url("https://example.com/elegant-pattern-bg.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
  {/* Left Section - Icons */}
  <div className='flex items-center space-x-6'>
    <span className='group flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer bg-gradient-to-r from-pink-500 to-red-500 border border-transparent hover:bg-gradient-to-l hover:from-red-600 hover:to-pink-600 transition duration-300 shadow-lg'>
      <FontAwesomeIcon icon={faHouse} className='text-[16px] text-white' />
      <h3 className='text-[15px] font-semibold text-white group-hover:text-white'>Home</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-gradient-to-r from-pink-500 to-red-500 transition duration-300 shadow-lg'>
      <FontAwesomeIcon icon={faCarSide} className='text-[16px] text-gray-600 group-hover:text-white' />
      <h3 className='text-[15px] font-semibold text-gray-600 group-hover:text-white'>Cars</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-gradient-to-r from-pink-500 to-red-500 transition duration-300 shadow-lg'>
      <FontAwesomeIcon icon={faMobileScreenButton} className='text-[16px] text-gray-600 group-hover:text-white' />
      <h3 className='text-[15px] font-semibold text-gray-600 group-hover:text-white'>Mobile</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-gradient-to-r from-pink-500 to-red-500 transition duration-300 shadow-lg'>
      <FontAwesomeIcon icon={faWarehouse} className='text-[16px] text-gray-600 group-hover:text-white' />
      <h3 className='text-[15px] font-semibold text-gray-600 group-hover:text-white'>Property</h3>
    </span>

    <span className='group cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-gradient-to-r from-pink-500 to-red-500 transition duration-300 shadow-lg'>
      <FontAwesomeIcon icon={faGraduationCap} className='text-[16px] text-gray-600 group-hover:text-white' />
      <h3 className='text-[15px] font-semibold text-gray-600 group-hover:text-white'>Academics</h3>
    </span>
  </div>

  {/* Right Section - Home, Blogs, Contact Us */}
  <div className='flex items-center space-x-8 text-[15px] font-semibold text-gray-700 tracking-wide'>
    <h3 className='hover:text-red-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>Home</h3>
    <h3 className='hover:text-red-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>Blogs</h3>
    <h3 className='hover:text-red-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>Contact Us</h3>
  </div>
</div>





    <div className='bg-gray-100 w-full h-20 px-2 md:px-10 py-8 xl:hidden flex items-center justify-between'>
    <Logo/>
    <button className='h-10 w-10  rounded border-[1px] border-red-600 hover:bg-red-600 group' onClick={handletoggleform}>
    
    <FontAwesomeIcon icon={faBars} className='text-[18px] text-red-600 group-hover:text-white ' />
    
    </button>
</div>
   {/* Centered Navbar */}
   <div className='bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 z-50 w-full shadow-lg h-20 px-20 py-2 xl:flex items-center hidden justify-center fixed' style={{ top: 0 }}>
  {/* Left Section - Messages, Favourites, Notifications */}
  <div className='flex items-center space-x-10'>
    <span className='flex items-center space-x-2 hover:text-red-600'>
      <FontAwesomeIcon icon={faMessage} className='text-[16px] text-gray-200' />
      <h3 className='text-[15px] font-helveticaLight text-gray-200 hover:text-red-600 cursor-pointer'>Messages</h3>
    </span>
    <span className='flex items-center space-x-2 hover:text-white'>
      <FontAwesomeIcon icon={faHeart} className='text-[16px] text-gray-200' />
      <h3 className='text-[15px] font-helveticaLight text-gray-200 hover:text-red-600 cursor-pointer'>Favourites</h3>
    </span>
    <span className='flex items-center space-x-2 hover:text-white'>
      <FontAwesomeIcon icon={faBell} className='text-[16px] text-gray-200' />
      <h3 className='text-[15px] font-helveticaLight text-gray-200 hover:text-red-600 cursor-pointer'>Notifications</h3>
    </span>
  </div>

  {/* Search Bar */}
  <div className='relative w-[700px] mx-10'>
    <input 
      type='search' 
      className='rounded-full text-gray-700 pl-14 pr-4 border border-gray-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out py-2 w-[500px]' 
      placeholder='Search...'
    />
    <FontAwesomeIcon 
      icon={faMagnifyingGlass} 
      className='absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-[18px]' 
    />
  </div>

  {/* Right Section - Buttons */}
  <Link to={"/placeadd"}>
    <button className='bg-pink-600 hover:bg-pink-500 transition duration-300 ease-in-out text-white font-bold h-12 w-36 py-2 px-4 rounded-full text-[14px] flex items-center space-x-2'>
      <FontAwesomeIcon icon={faCirclePlus} className='text-[18px] text-gray-100' />
      <span className='text-[14px] font-helveticaLight'>Place an Ad</span>
    </button>
  </Link>

  <button className='bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-bold h-12 w-28 mx-4 py-2 px-4 rounded-full text-[14px] flex items-center space-x-2'>
    <FontAwesomeIcon icon={faUser} className='text-[18px] text-gray-100' />
    <span className='text-[14px] font-helveticaLight'>Sign in</span>
  </button>
</div>







<div className={`h-[1200px] visible lg:invisible bg-white absolute overflow-y-hidden -mt-48 border-r-[1px] border-slate-600 z-[9999] backing overflow-x-hidden w-full max-w-[400px] ${toggleform ? 'show mx-0' : ''}`}
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
 
  <button onClick={handleclick} className='bg-[#D50055] hover:bg-[#b3004588] text-white translate-y-[-90px] font-bold h-12 w-[90%] max-w-[350px] text-center py-2 px-4 rounded-2xl text-[14px] flex items-center justify-center space-x-2 mx-auto shadow-lg hover:bg-red-700 transition duration-200'>
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





   
    </>
  )

}
export default Header
