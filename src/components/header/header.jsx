import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCarSide,faHome,faAd,faList,faPlus,faBook,faBlog,faEnvelope,faTachometerAlt,faUserCircle,faPen,faClipboard,faBookmark,faComment,faSignOutAlt,faSliders,faCity,faCar,faMobile, faMobileScreenButton, faWarehouse, faGraduationCap,faLocationDot,faAngleDown, faMessage,faBars, faHeart, faBell, faCirclePlus, faUser, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
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
const [activeMenu, setActiveMenu] = useState("mainMenu"); // Default to 'mainMenu'
const [showCategories, setShowCategories] = useState(false);
const [showPages, setShowPages] = useState(false);
const [showBlogs, setShowBlogs] = useState(false);

// Toggles for dropdown menus
const toggleCategories = () => setShowCategories(!showCategories);
const togglePages = () => setShowPages(!showPages);
const toggleBlogs = () => setShowBlogs(!showBlogs);

const handleMainMenuClick = () => {
  setActiveMenu("mainMenu");
};

const handleAuthorMenuClick = () => {
  setActiveMenu("authorMenu");
};

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
const handletoggleformd =()=>{
  settoggleform(!toggleform)
}
const [toggleformd, settoggleformd] = useState(false)
  return (
    <>
{/* <div className='xl:flex justify-between hidden items-center xl:px-32 px-14 py-3 bg-gradient-to-r from-indigo-300 via-white to-indigo-300 border border-gray-200 rounded-2xl shadow-2xl h-16 w-full xl:mt-20 mt-4 backdrop-blur-md' style={{ backgroundImage: 'url("https://example.com/elegant-pattern-bg.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
{/* </div>  */}





    <div className='bg-gray-100 w-full h-20 px-2 md:px-10 py-8 xl:hidden flex items-center justify-between'>
    <Logo/>
    <button className='h-12 w-12   rounded border-[1px] border-red-600 hover:bg-red-600 group' onClick={handletoggleform}>
    
    <FontAwesomeIcon icon={faBars} className='text-[20px] text-red-600 group-hover:text-white ' />
    
    </button>
</div>
   {/* Centered Navbar */}
   <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 z-50 w-full shadow-lg h-24 px-4 py-2 fixed top-0 left-0 right-0 flex items-center justify-between">

{/* Left Section - Menu Button */}
<div
  className="h-12 w-12 cursor-pointer bg-gray-400 border-4 border-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
  onClick={handletoggleform}
>
  <img
    src="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='Menu%20/%20Menu_Alt_03'%3e%3cpath%20id='Vector'%20d='M5%2017H13M5%2012H19M5%207H13'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
    alt="Menu Icon"
    className="h-8 w-8"
  />
</div>

{/* Center Section - Sign In and Search Bar */}
<div className="flex items-center justify-center flex-1 space-x-6">
  {/* User Profile (Sign In) */}
  <div className="flex items-center space-x-2 cursor-pointer">
    <img 
      src="https://mironcoder-classicads.netlify.app/assets/ltr/images/user.png" 
      alt="User" 
      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full"
    />
    <span className="text-gray-100 whitespace-nowrap text-sm md:text-base font-helveticaLight">
      Sign In
    </span>
  </div>

  {/* Search Bar */}
  <div className="relative hidden lg:block">
    <input 
      type="search" 
      className="rounded-lg text-gray-700 pl-14 pr-16 border border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out py-3 w-full sm:w-[350px] md:w-[400px] lg:w-[500px]"
      placeholder="Search..."
    />
    <FontAwesomeIcon 
      icon={faMagnifyingGlass} 
      className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-700 text-[22px]" 
    />
  </div>
</div>

{/* Right Section - Icons (Message, Heart, Bell) */}
<div className="flex items-center space-x-4 sm:space-x-6">
  {/* Message Icon */}
  <span className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full hover:scale-110 transition-all duration-300 ease-in-out shadow-lg">
    <FontAwesomeIcon icon={faMessage} className="text-[28px] text-white" />
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 translate-y-1">
      0
    </span>
  </span>

  {/* Heart Icon */}
  <span className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full hover:scale-110 transition-all duration-300 ease-in-out shadow-lg">
    <FontAwesomeIcon icon={faHeart} className="text-[28px] text-white" />
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 translate-y-1">
      0
    </span>
  </span>

  {/* Bell Icon */}
  <span className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full hover:scale-110 transition-all duration-300 ease-in-out shadow-lg">
    <FontAwesomeIcon icon={faBell} className="text-[28px] text-white" />
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 translate-y-1">
      0
    </span>
  </span>
</div>

</div>











<div
  className={`h-[1140px]  bg-white absolute overflow-y-auto -mt-56 border-r-[1px] border-slate-600 z-[9999] backing overflow-x-hidden w-full max-w-[400px] ${
    toggleform ? 'show mx-0' : ''
  }`}
  style={{ overflowY: 'auto' }}
>
  {/* User Info Section */}
  <div className="flex items-center space-x-4 p-4 mt-40 relative">
    {/* Profile Image */}
    <div className="flex flex-col">
      {/* User Info */}
      {/* <div className="flex items-center space-x-2"> */}
      {/* <p className="text-lg font-semibold font-manrope text-gray-100">PayID: {payID}</p> */}
      {/* <FontAwesomeIcon /> */}
      {/* <p className="text-lg text-white flex items-center space-x-2 mt-2"> */}
      {/* <span>test144</span> */}
      {/* <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" /> */}
      {/* </p> */}

      {/* <div className="bg-green-500 text-white w-14 text-xs px-2 py-1 rounded-full mt-2"> */}
      {/* <p>Verified</p> */}
      {/* </div> */}
      {/* </div> */}
    </div>

    {/* Close Icon */}
    <div className="flex items-center justify-between bg-white p-3 w-[500px] rounded-lg z-50">
      <img
        src="https://mironcoder-classicads.netlify.app/assets/ltr/images/logo.png"
        alt="Logo"
        className="w-[150px] h-[auto]"
      />
      <FontAwesomeIcon
        icon={faXmark}
        className="text-[29px] text-gray-600 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        onClick={handletoggleformd}
      />
    </div>
  </div>

  {/* Profile Section */}
  <div className="flex flex-col items-center p-8 rounded-lg shadow-lg w-[350px] mx-auto">
    <img
      src="https://mironcoder-classicads.netlify.app/assets/ltr/images/avatar/01.jpg"
      alt="Profile Picture"
      className="w-[180px] h-[180px] rounded-full object-cover mb-6 border-[5px] border-blue-500 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
    />

    <h3 className="text-2xl font-semibold font-helveticaLight text-gray-800 mb-6">Jackson Honson</h3>

    <Link to={"/placeadd"}>
  <button className="bg-pink-600 hover:bg-pink-400 transition duration-300 ease-in-out text-white font-bold h-12 w-[200px] py-2 px-4 rounded-lg text-[16px] flex items-center space-x-2">
    <FontAwesomeIcon icon={faCirclePlus} className="text-[16px] text-gray-100" />
    <span className="text-[18px] font-helveticaLight">Post Your AD</span>
  </button>
</Link>

  </div>

  <div className="bg-gray-800 w-full h-[1px]"></div>

  <div className="flex space-x-4 p-4">
      {/* Menu Section */}
      <div className="w-1/2">
        {/* Titles for Main Menu and Author Menu side by side */}
        <div className="flex space-x-8 mb-4">
          {/* Main Menu Title */}
          <h3
            className={`text-xl font-semibold whitespace-nowrap  font-roboto cursor-pointer ${activeMenu === 'mainMenu' ? 'text-blue-500 border-b-4 border-blue-600' : 'text-gray-800'}`}
            onClick={handleMainMenuClick}
          >
            Main Menu
          </h3>
          <div className='h-[1px] w-[500px] bg-gray-500'></div>

          {/* Author Menu Title */}
          <h3
            className={`text-xl font-semibold whitespace-nowrap font-roboto cursor-pointer ${activeMenu === 'authorMenu' ? 'text-blue-500 border-b-4 border-blue-600' : 'text-gray-800'}`}
            onClick={handleAuthorMenuClick}
          >
            Author Menu
          </h3>
        </div>

        {/* Render Main Menu or Author Menu based on activeMenu state */}
        {activeMenu === "mainMenu" && (
          <div className="space-y-4">
            {/* Home Button */}
            <button
              onClick={() => { setActiveMenu('home'); }}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[19px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faHome} className="text-gray-600" />
              <span className="text-gray-600  font-sansing font-semibold">Home</span>
            </button>
            <div className={`h-[1px] w-[500px] bg-gray-300`}></div>
            {/* Categories Button */}
            <button
              onClick={toggleCategories}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faList} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">Categories</span>
              <FontAwesomeIcon icon={faPlus} className="text-gray-500 ml-auto" />
            </button>
            <div className={`h-[1px] w-[500px] ${showCategories ? 'bg-gradient-to-r from-blue-400 to-blue-600 h-[2px]' : 'bg-gray-300'}`}></div>

            {/* Categories Dropdown */}
            {showCategories && (
              <div className="ml-4 space-y-2 mt-2 flex flex-col">
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">Mobiles</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">Cars</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">Properties</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">Academics</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
              </div>
            )}

            {/* Pages Button */}
            <button
              onClick={togglePages}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faBook} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">Pages</span>
              <FontAwesomeIcon icon={faPlus} className="text-gray-500 ml-auto" />
            </button>
            <div className={`h-[1px] w-[500px] ${showPages ? 'bg-gradient-to-r from-blue-400 to-blue-600 h-[2px]' : 'bg-gray-300'}`}></div>

            {/* Pages Dropdown */}
            {showPages && (
              <div className="ml-4 space-y-2 mt-2 flex flex-col">
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">About Us</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">Contact Us</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">Blog List</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
              </div>
            )}

            {/* Blogs Button */}
            <button
              onClick={toggleBlogs}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faBlog} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">Blogs</span>
              <FontAwesomeIcon icon={faPlus} className="text-gray-500 ml-auto" />
            </button>
            <div className={`h-[1px] w-[500px] ${showBlogs ? 'bg-gradient-to-r from-blue-400 to-blue-600 h-[2px]' : 'bg-gray-300'}`}></div>

            {/* Blogs Dropdown */}
            {showBlogs && (
              <div className="ml-4 space-y-2 mt-2 flex flex-col">
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing font-semibold">Latest Blogs</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
                <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200">
                  <span className="text-gray-600 font-sansing whitespace-nowrap font-semibold">Featured Blogs</span>
                </button>
                <div className='h-[1px] w-[500px] translate-x-[-32px] bg-gray-300'></div>
              </div>
            )}

            {/* Contact Button */}
            <button
              onClick={() => { setActiveMenu('contact'); }}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">Contact</span>
            </button>
          </div>
        )}

        {/* Render Author Menu based on activeMenu state */}
        {activeMenu === "authorMenu" && (
          <div className="space-y-4">
            {/* Dashboard Button */}
            <button
              onClick={() => { setActiveMenu('dashboard'); }}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faTachometerAlt} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">Dashboard</span>
            </button>
            <div className='h-[1px] w-[500px] bg-gray-300'></div>
            {/* Profile Button */}
            <button
              onClick={() => { setActiveMenu('profile'); }}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">Profile</span>
            </button>
            <div className='h-[1px] w-[500px] bg-gray-300'></div>
            {/* Ad Post Button */}
            <button
              onClick={() => { setActiveMenu('adPost'); }}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faPen} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">Ad Post</span>
            </button>
            <div className='h-[1px] w-[500px] bg-gray-300'></div>
            {/* My Ads Button */}
            <button
              onClick={() => { setActiveMenu('myAds'); }}
              className="flex items-center space-x-2 p-3 rounded-lg w-full text-[22px] hover:bg-gray-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faAd} className="text-gray-600" />
              <span className="text-gray-600 font-sansing font-semibold">My Ads</span>
            </button>
          </div>
        )}
      </div>
    </div>
</div>




   
    </>
  )

}
export default Header