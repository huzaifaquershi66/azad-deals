import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faCarSide, faMobileScreenButton, faWarehouse, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <div className='bg-gray-200 w-full'>
      {/* Navbar - Always Visible */}
      <div className='flex justify-between items-center px-5 py-2 lg:px-32 lg:py-1'>
        {/* Left Section - Home, Blogs, Contact Us */}
        <div className='hidden lg:flex space-x-5 text-[14px] font-sans color1'>
          <h3 className='hover:text-red-600 hover:cursor-pointer'>Home</h3>
          <h3 className='hover:text-red-600 hover:cursor-pointer'>Blogs</h3>
          <h3 className='hover:text-red-600 hover:cursor-pointer'>Contact Us</h3>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden'>
          <FontAwesomeIcon
            icon={faBars}
            className='text-[24px] cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
          />
        </div>

        {/* Right Section - Icons for Desktop */}
        <div className='hidden lg:flex space-x-4'>
          <span className='group flex items-center px-3 hover:cursor-pointer hover:bg-white'>
            <FontAwesomeIcon icon={faHouse} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1 group-hover:text-red-600'>Home</h3>
          </span>
          <span className='group flex items-center px-3 hover:cursor-pointer hover:bg-white'>
            <FontAwesomeIcon icon={faCarSide} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1 group-hover:text-red-600'>Cars</h3>
          </span>
          <span className='group flex items-center px-3 hover:cursor-pointer hover:bg-white'>
            <FontAwesomeIcon icon={faMobileScreenButton} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1 group-hover:text-red-600'>Mobile</h3>
          </span>
          <span className='group flex items-center px-3 hover:cursor-pointer hover:bg-white'>
            <FontAwesomeIcon icon={faWarehouse} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1 group-hover:text-red-600'>Property</h3>
          </span>
          <span className='group flex items-center px-3 hover:cursor-pointer hover:bg-white'>
            <FontAwesomeIcon icon={faGraduationCap} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1 group-hover:text-red-600'>Academics</h3>
          </span>
        </div>
      </div>

      {/* Mobile Menu - Shows when menuOpen is true */}
      {menuOpen && (
        <div className='lg:hidden flex flex-col space-y-3 px-5 py-2'>
          <span className='flex items-center space-x-2'>
            <FontAwesomeIcon icon={faHouse} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1'>Home</h3>
          </span>
          <span className='flex items-center space-x-2'>
            <FontAwesomeIcon icon={faCarSide} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1'>Cars</h3>
          </span>
          <span className='flex items-center space-x-2'>
            <FontAwesomeIcon icon={faMobileScreenButton} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1'>Mobile</h3>
          </span>
          <span className='flex items-center space-x-2'>
            <FontAwesomeIcon icon={faWarehouse} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1'>Property</h3>
          </span>
          <span className='flex items-center space-x-2'>
            <FontAwesomeIcon icon={faGraduationCap} className='text-[13px] color2' />
            <h3 className='text-[15px] font-sans color1'>Academics</h3>
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
