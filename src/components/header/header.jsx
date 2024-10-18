import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faHouse,faMobileScreenButton,faWarehouse,faGraduationCap,faMessage, faHeart, faBell,faMagnifyingGlass ,faCirclePlus,faUser,faBars,faXmark,faLocationDot,faTableCellsLarge,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Logo from './logo';
import { useState } from 'react';
import myImage from '../../assets/images/back3.webp'
import { useEffect } from 'react';
import cities from './cites';
import { useCallback } from 'react';
const uniqueCities = Array.from(new Set(cities));
console.log("Unique Cities: ", uniqueCities);
const Header = () => {
  const [toggleform, settoggleform] = useState(false)
  const [searchTerm, setSearchTerm] = useState(''); // Set default city
  const [showCities, setShowCities] = useState(false);
  const [filteredCities, setFilteredCities] = useState(uniqueCities);
  useEffect(() => {
    console.log("Mounting component, setting filteredCities to uniqueCities");
    setFilteredCities(uniqueCities); // Set default cities
    console.log("Filtered Cities after set: ", uniqueCities);
  }, [uniqueCities]);

  const handleInputClick = () => {
    setShowCities(!showCities); // Toggle cities list
  };
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
    console.log("Filtered cities: ", filtered);
    setFilteredCities(filtered);
    // setShowCities(true);
  } else {
    console.log("Search term empty, showing all unique cities");
    setFilteredCities(uniqueCities); // Show all cities if search is empty
    // setShowCities(false);
  }
}, []);

const handleCityClick = (city) => {
  setSearchTerm(city);
  setFilteredCities([]);
  // setShowCities(false);
};


  return (
    <>
    <div className='lg:flex items-center px-32 py-1 bg-gray-200 h-9 space-x-2 w-full hidden '>
<span className='group space-x-2 flex items-center px-3 hover:cursor-pointer h-10 w-[90px] hover:bg-white '>
<FontAwesomeIcon icon={faHouse} className='text-[13px] color2' />
<h3 className='text-[15px] translate-y-[1px] font-sans color1 group-hover:text-red-600 group-hover:font-semibold '>Home</h3>

</span>
<span className='group space-x-2 flex items-center px-3 hover:cursor-pointer h-10 w-[90px] hover:bg-white '>
<FontAwesomeIcon icon={faCarSide} className='text-[13px] color2' />
<h3 className='text-[15px] translate-y-[1px] font-sans color1 group-hover:text-red-600 group-hover:font-semibold '>Cars</h3>

</span>
<span className='group space-x-2 flex items-center px-3 hover:cursor-pointer h-10 w-[90px] hover:bg-white '>
<FontAwesomeIcon icon={faMobileScreenButton} className='text-[13px] color2' />
<h3 className='text-[15px] translate-y-[1px] font-sans color1 group-hover:text-red-600 group-hover:font-semibold '>Mobile</h3>

</span>
<span className='group space-x-2 flex items-center px-3 hover:cursor-pointer h-10 w-[110px] hover:bg-white '>
<FontAwesomeIcon icon={faWarehouse} className='text-[13px] color2' />
<h3 className='text-[15px] translate-y-[1px] font-sans color1 group-hover:text-red-600 group-hover:font-semibold '>Property</h3>

</span>
<span className='group space-x-2 flex items-center px-3 hover:cursor-pointer h-10 w-[120px] hover:bg-white '>
<FontAwesomeIcon icon={faGraduationCap} className='text-[13px] color2' />
<h3 className='text-[15px] translate-y-[1px] font-sans color1 group-hover:text-red-600 group-hover:font-semibold '>Academics</h3>

</span>
<div className='flex items-center justify-start lg:px-48  px-4 space-x-5 color1 text-[14px] font-sans font-semibold whitespace-nowrap '>
  <h3 className='hover:text-red-600 hover:cursor-pointer'>Home</h3>
  <h3 className='hover:text-red-600 hover:cursor-pointer'>Blogs</h3>
  <h3 className='hover:text-red-600 hover:cursor-pointer'>Contact Us</h3>
</div>



    </div>
    <div className='bg-gray-100 w-full h-20 px-2 md:px-10 py-8 xl:hidden flex items-center justify-between'>
    <Logo/>
    <button className='h-10 w-10  rounded border-[1px] border-red-600' onClick={handletoggleform}>
    
    <FontAwesomeIcon icon={faBars} className='text-[18px] text-red-600  ' />
    
    </button>
</div>
    <div className='bg-gray-100 w-full h-20 px-11 py-8 xl:flex items-center hidden fixed left-0 top-0 z-50  '>
        <div className='flex items-center space-x-8'>
            <span className='flex items-center space-x-1'>
            <FontAwesomeIcon icon={faMessage} className='text-[15px] text-gray-500'/>
            <h3 className='text-[15px] translate-y-[-1px] text-gray-600'>Messages</h3>
            </span>
            <span className='flex items-center space-x-1'>
            <FontAwesomeIcon icon={faHeart} className='text-[15px] text-gray-500'/>
            <h3 className='text-[15px] translate-y-[-1px] text-gray-600'>Favourites</h3>
            </span>
            <span className='flex items-center space-x-1'>
            <FontAwesomeIcon icon={faBell} className='text-[15px] text-gray-500'/>
            <h3 className='text-[15px] translate-y-[-1px] text-gray-600'>Notifications</h3>
            </span>
        </div>
        <div className='relative w-[700px] px-32'>
  <input 
    type='search' 
    className='rounded-3xl pl-10 border-b-2 border-gray-300 focus:outline-none focus:ring-0  py-2 w-[500px]' 
    placeholder='Search...'
  />
  <FontAwesomeIcon 
    icon={faMagnifyingGlass} 
    className='absolute left-36 top-1/2 transform text-[15px]  -translate-y-1/2 text-black' 
  />
</div>
<button className='background2 text-white font-bold h-10 w-36 py-2 px-4 rounded-lg text-[13px] flex items-center space-x-2'>
  <FontAwesomeIcon icon={faCirclePlus} className='text-[17px] text-gray-100' />
  <span className='whitespace-nowrap text-[13px] font-sans'>Place and Ad</span>
</button>
<button className='bg-gray-400 text-white font-bold h-10 w-24 mx-3 py-2 px-4 rounded-lg text-[13px] flex items-center space-x-2'>
  <FontAwesomeIcon icon={faUser} className='text-[17px] text-gray-100' />
  <span className='whitespace-nowrap text-[13px] font-sans'>Sign in</span>
</button>


    </div>
   
 

    <div className={`h-[750px] visible lg:invisible bg-white absolute -mt-48 border-r-[1px] border-slate-600 z-[9999] backing overflow-x-hidden w-full max-w-[400px] ${toggleform ? 'show mx-0' : ''}`}
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
                <h1 className="md:text-2xl text-[18px] font-bold text-blue-600">Azad Deals</h1>
                <p className="text-sm text-gray-500 whitespace-nowrap">Freedom in Every Deal</p>
            </div>
        </div>
      <FontAwesomeIcon
        icon={faXmark}
        className="text-[24px] text-gray-600 cursor-pointer px-10"
        onClick={handletoggleform}
      />
 
    </div>
    <div className='w-full h-[1px] my-5 bg-gray-300'></div>
    


  </div>
  <div className='flex items-center justify-between max-w-[350px] w-full  px-4 mx-auto translate-y-[-110px]'>
  <span className='flex items-center space-x-1 shrink-0'>
    <FontAwesomeIcon icon={faMessage} className='text-[13px] text-gray-500' />
    <h3 className='text-[13px] translate-y-[-1px] color3 whitespace-nowrap'>Messages</h3>
  </span>

  <span className='flex items-center space-x-1 shrink-0'>
    <FontAwesomeIcon icon={faHeart} className='text-[13px] text-gray-500' />
    <h3 className='text-[13px] translate-y-[-1px] color3 whitespace-nowrap'>Favourites</h3>
  </span>

  <span className='flex items-center space-x-1 shrink-0'>
    <FontAwesomeIcon icon={faBell} className='text-[12px] text-gray-500' />
    <h3 className='text-[13px] translate-y-[-1px] color3 whitespace-nowrap'>Notifications</h3>
  </span>
</div>

  <button className='background2 text-white translate-y-[-90px]  font-bold h-12 w-[90%] max-w-[350px] text-center py-2 px-4 rounded-2xl text-[13px] flex items-center justify-center space-x-2 mx-auto'>
      <FontAwesomeIcon icon={faCirclePlus} className='text-[17px] text-gray-100' />
      <span className='whitespace-nowrap text-[13px] font-sans'>Place an Ad</span>
    </button>

    <button className='bg-transparent text-red-500 translate-y-[-100px]  font-bold h-10 w-24 mx-6 py-2 px-4 rounded-lg text-[13px] flex items-center space-x-2'>
  <FontAwesomeIcon icon={faUser} className='text-[16px] text-red-600' />
  <span className='whitespace-nowrap text-[12px] font-sans'>Sign in</span>
</button>
<div className='w-full h-[1px] translate-y-[-100px] bg-gray-300'></div>
</div>



<div className='relative w-full h-[450px] md:px-4 px-0' >
      {/* Background Image */}
      <img
        className='object-cover w-full h-full rounded-lg'
        src='https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg'
        alt='Background'
      />

    
<div className="absolute inset-0 flex  items-center justify-center" style={{ bottom: '48%' }}>
  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
    <div className="absolute inset-0 bg-white rounded-full opacity-30"></div>
    <h1 className="text-3xl md:text-4xl font-bold text-black z-10">AD</h1>
  </div>

  {/* Brand Name */}
  <h1 className="ml-2 text-3xl md:text-5xl font-extrabold text-black z-10 shadow-md mt-2 text-center">
    Azad Deal
  </h1>
</div>

    
    <div className='absolute inset-0 flex items-center justify-center'>
    <div className='flex items-center md:space-x-4 space-x-1 bg-white h-14 md:w-96 w-[276px] md:px-6 px-2 font-sans md:text-[14px] text-[12px] rounded-t-xl z-10'>
    <button c className='h-8 rounded px-3 py-1 border border-transparent bg-red-600 text-white hover:bg-red-600 transition duration-200 hover:border-red-200 hover:text-white'>
  <h3>Mobile</h3>
</button>


    <button className='h-8 rounded px-3 py-1 border border-transparent hover:bg-red-600 transition duration-200 hover:border-red-200 hover:text-white'>
      Cars
    </button>

    <button className='h-8 rounded px-3 py-1 border border-transparent hover:bg-red-600 transition duration-200 hover:border-red-200 hover:text-white'>
      Property
    </button>

    <button className='h-8 rounded px-3 py-1 border border-transparent hover:bg-red-600 transition duration-200 hover:border-red-200 hover:text-white'>
      Academics
    </button>

</div>
    </div>
  

<div className='absolute inset-0 flex items-center justify-center md:mt-28 mt-52 px-4'>
  <div className='flex flex-col md:flex-row items-center  md:h-14 h-40 w-[400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] bg-white rounded p-2'>
    
    <div className='flex items-center mx-2 relative w-full md:w-[45%]'>
      {/* <input
        type='search'
        placeholder='Search Location'
        onClick={handleInputClick}
        className='h-12 w-full rounded pl-10 focus:outline-none focus:ring-0 border-[1px] border-gray-300'
      />
      <FontAwesomeIcon
        icon={faLocationDot}
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
      />
      <FontAwesomeIcon icon={faAngleDown} className='absolute right-3 text-gray-400' /> */}
      <div className='relative w-full'> {/* Wrap the inputs and dropdown in a relative div */}
  <input
    type='search'
    placeholder='Search Location'
    onClick={handleInputClick}
    className='h-12 w-full rounded pl-10 focus:outline-none focus:ring-0 border-[1px] border-gray-300'
  />
  <FontAwesomeIcon
    icon={faLocationDot}
    className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
  />
  <FontAwesomeIcon icon={faAngleDown} className='absolute right-3 text-gray-400 mt-4' />

  {showCities && (
    <div className='absolute inset-0 top-[-240px] border-[1px] border-gray-300 left-0 md:w-[450px] max-w-[400px] h-60  rounded z-50 bg-white p-2'>
      <input
        type='search'
        value={searchTerm}
        onChange={handleSearchChange}
        className='h-12 w-full rounded pl-10 focus:outline-none focus:ring-0 border-[1px] border-gray-300'
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
    
    <div className='flex items-center mx-2 relative w-full md:w-[45%] mt-2 md:mt-0'> {/* Added mt-2 for spacing on mobile */}
      <input
        type='search'
        placeholder='Find phones, cars, properties, and more'
        className='h-12 w-full rounded pl-10 focus:outline-none focus:ring-0 border-[1px] border-gray-300'
      />
      <FontAwesomeIcon
        icon={faTableCellsLarge}
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
      />
    </div>
    
    <button className='md:h-12 h-14 w-full md:w-[60px] rounded color3 bg-red-600 mt-2 md:mt-0'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[16px] text-white' />
    </button>
  </div>
</div>

</div>

 
    </>
  )
}

export default Header