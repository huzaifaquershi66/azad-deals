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
  <Link to={"/placeadd"}>
  <button className='bg-[#D50055] hover:bg-[#b3004588] transition duration-300 ease-in-out  text-white font-bold h-10 w-36 py-2 px-4 rounded-lg text-[13px] flex items-center space-x-2'>
    <FontAwesomeIcon icon={faCirclePlus} className='text-[17px] text-gray-100' />
    <span className='whitespace-nowrap text-[13px] font-helveticaLight '>Place an Ad</span>
  </button>
  </Link>

  <button className='bg-[#36454fd3] hover:bg-[#36454f71] text-white font-bold h-10 w-24 mx-3 py-2 px-4 rounded-lg text-[13px] flex items-center space-x-2'>
    <FontAwesomeIcon icon={faUser} className='text-[17px] text-gray-100' />
    <span className='whitespace-nowrap text-[13px] font-helveticaLight'>Sign in</span>
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
