import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faHouse,faMobileScreenButton,faWarehouse,faGraduationCap,faMessage, faHeart, faBell,faMagnifyingGlass ,faCirclePlus,faUser,faBars,faXmark,faLocationDot,faTableCellsLarge,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import AdsByLocation from '../allcomp/adsby';
const Home = () => {
  return (
    <>
    <div className='max-w-[1230px] mx-auto p-4 md:translate-y-[-80px] translate-y-[0px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='relative h-56 border-[1px] border-black  bg-gray-300 rounded-xl overflow-hidden'>
          <img 
            src='https://www.pngkit.com/png/detail/253-2538387_mobile-phone-png-transparent-hd-photo-mobile-images.png' 
            className='object-cover w-full h-full' 
            alt='Mobiles'
          />
          <h3 className='absolute left-5  color2 top-0 font-sans font-semibold text-[20px]'>
            Mobiles
          </h3>
        </div>
        <div className='relative h-56 border-[1px] border-black bg-gray-300 rounded-xl overflow-hidden'>
          <img 
            src='https://static.vecteezy.com/system/resources/thumbnails/022/903/424/small/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-ai-generated-artwork-photo.jpg' 
            className='object-cover w-full h-full' 
            alt='Properties'
          />
          <h3 className='absolute left-5 color2 top-0 font-sans font-semibold text-[20px]'>
            Properties
          </h3>
        </div>
        {/* Add more cards as needed */}
        <div className='relative h-56 border-[1px] border-black bg-gray-300 rounded-xl overflow-hidden'>
          <img 
            src='https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-flame-lighted-car-desktop-wallpaper-hd-1920x1080-image_2935337.jpg' 
            className='object-cover w-full h-full' 
            alt='Properties'
          />
          <h3 className='absolute left-5 color2 top-0 font-sans font-semibold text-[20px]'>
            Cars
          </h3>
        </div>
        <div className='relative h-56 border-[1px] border-black bg-gray-300 rounded-xl overflow-hidden'>
          <img 
            src='https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-academic-achievement-3d-render-of-graduation-cap-and-diploma-with-simple-image_3787885.jpg' 
            className='object-cover w-full h-full' 
            alt='Properties'
          />
          <h3 className='absolute left-5 color2 top-0 font-sans font-semibold text-[20px]'>
            Azad Education
          </h3>
        </div>
      </div>
    </div>
    <div className='flex justify-between items-center'>
    <h1 className='font-bold font-sans text-[25px] my-2'> Latest Mobiles on sale</h1>
  <button className='text-blue-500 font-semibold'>See More</button>
</div>
  
  <div className='max-w-[1230px] mx-auto p-4'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
    
    {/* First Product */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202410091733' 
        className='object-cover w-full h-64' 
        alt='Mobiles'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 3,00,000</h3>
        <h3 className='color1 font-sans text-[14px] line-through'>Rs 3,40,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Iphone 14 pro max</h1>
      </div>
      <div className='flex items-center space-x-1 mx-5 my-2'>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Faisalabad</h3>
      </div>
    </div>

    {/* Second Product */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://cdn.mos.cms.futurecdn.net/MKrG7fg28XHPfUKJgYVWT5-1200-80.jpg' 
        className='object-cover w-full h-64' 
        alt='Mobiles'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 2,00,000</h3>
        <h3 className='color1 font-sans text-[14px] line-through'>Rs 2,40,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Iphone 13 pro max</h1>
      </div>
      <div className='flex items-center space-x-1 mx-5 my-2'>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Lahore</h3>
      </div>
    </div>

    {/* Third Product */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://cdn.mos.cms.futurecdn.net/oNrqmEW2Y5HN8ixWPxLweP.jpg' 
        className='object-cover w-full h-64' 
        alt='Mobiles'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 4,00,000</h3>
        <h3 className='color1 font-sans text-[14px] line-through'>Rs 3,40,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Samsung S20 Ultra</h1>
      </div>
      <div className='flex items-center space-x-1 mx-5 my-2'>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Faisalabad</h3>
      </div>
    </div>

    {/* Fourth Product */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://www.screenfixed.com.au/wp-content/uploads/2020/10/samsung-galaxy-s20-ultra-vs-iphone-12-pro-max.jpg' 
        className='object-cover w-full h-64' 
        alt='Mobiles'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 2,00,000</h3>
        <h3 className='color1 font-sans text-[14px] line-through'>Rs 2,20,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Samsung S21 Ultra</h1>
      </div>
      <div className='flex items-center space-x-1 mx-5 my-2'>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Jhang</h3>
      </div>
    </div>

  </div>
</div>
<div className='flex justify-between items-center'>
<h1 className='font-bold font-sans text-[25px] my-2'>Residential and Commercial Properties</h1>
  <button className='text-blue-500 font-semibold'>See More</button>
</div>


<div className='max-w-[1230px] mx-auto p-4'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

    {/* First Property */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://cdn.prod.website-files.com/61d451660d7f41e5024d0b9d/628241160769f34e9ac056e5_ourdomain-amsterdam-south-east-north-and-west-house-1-bedroom-apartment-main-banner.jpg' 
        className='object-cover w-full h-64' 
        alt='Property'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 30,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Luxury Apartment</h1>
        <p className='text-sm text-gray-600'>1 Bed, 1 Bathroom</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Karachi</h3>
      </div>
    </div>

    {/* Second Property */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://apartmentsmidtownhoustontx.com/wp-content/uploads/photo-gallery/imported_from_media_libray/One-Bedroom-Apartment-for-rent-in-Houston-TX-Bedroom-or-Study-with-Closet.jpg?bwg=1655235641' 
        className='object-cover w-full h-64' 
        alt='Property'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 25,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>2-Bedroom House</h1>
        <p className='text-sm text-gray-600'>2 Beds, 2 Bathrooms</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Lahore</h3>
      </div>
    </div>

    {/* Third Property */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://housinganywhere.imgix.net/room/1889967/933ec884-977f-4464-aa0b-d1ed82718ec1.jpg?ixlib=react-9.8.1&auto=format&fit=crop&ar=1%3A1&q=30&h=280&w=280' 
        className='object-cover w-full h-64' 
        alt='Property'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 40,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Farmhouse</h1>
        <p className='text-sm text-gray-600'>3 Beds, 2 Bathrooms</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Islamabad</h3>
      </div>
    </div>

    {/* Fourth Property */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://apartmentsthewoodlandstexas.com/wp-content/uploads/photo-gallery/Photos%20June%202020/Interiors%20-%20June%202020/Interiors%20June%202020/1_Bedroom_Apartments_for_Rent_in_The_Woodlands,_Texas_-_Model_Dining_&_Living_Room.jpg' 
        className='object-cover w-full h-64' 
        alt='Property'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 20,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Commercial Shop</h1>
        <p className='text-sm text-gray-600'>1 Room, 1 Bathroom</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Faisalabad</h3>
      </div>
    </div>

  </div>
</div>
<div className='flex justify-between items-center'>
<h1 className='font-bold font-sans text-[25px]'>Latest Cars on Sale</h1>
  <button className='text-blue-500 font-semibold'>See More</button>
</div>

<div className='max-w-[1230px] mx-auto p-4'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

    {/* First Car */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://www.motortrend.com/uploads/2023/11/2025-Toyota-Camry-hybrid-sedan-13.png?w=768&width=768&q=75&format=webp' 
        className='object-cover w-full h-64' 
        alt='Car'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 40,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Toyota Camry</h1>
        <p className='text-sm text-gray-600'>1.5L, Automatic</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Karachi</h3>
      </div>
    </div>

    {/* Second Car */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254' 
        className='object-cover w-full h-64' 
        alt='Car'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 35,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Honda Civic</h1>
        <p className='text-sm text-gray-600'>1.8L, CVT</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Lahore</h3>
      </div>
    </div>

    {/* Third Car */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://di-uploads-pod35.dealerinspire.com/newtonnissanofgallatin/uploads/2021/02/2021-Nissan-Sentra-S-Model-Left.jpg' 
        className='object-cover w-full h-64' 
        alt='Car'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 30,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Nissan Sentra</h1>
        <p className='text-sm text-gray-600'>2.0L, CVT</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Islamabad</h3>
      </div>
    </div>

    {/* Fourth Car */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://upload.wikimedia.org/wikipedia/commons/7/71/2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg' 
        className='object-cover w-full h-64' 
        alt='Car'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 28,00,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Ford Fusion</h1>
        <p className='text-sm text-gray-600'>2.5L, Automatic</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Faisalabad</h3>
      </div>
    </div>

  </div>
</div>
<div className='flex justify-between items-center'>
  <h1 className='font-bold font-sans text-[25px] my-2'>Latest Academic Programs on Offer</h1>
  <button className='text-blue-500 font-semibold'>See More</button>
</div>

<div className='max-w-[1230px] mx-auto p-4'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

    {/* First Academic Program */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://dcfwfuaf91uza.cloudfront.net/residential/wp-content/uploads/Bachelor-of-Science-in-Biology-Degree.jpg' // Replace with actual image URL
        className='object-cover w-full h-64' 
        alt='Program 1'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 25,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Bachelor of Science</h1>
        <p className='text-sm text-gray-600'>4 Years, Full-Time</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Karachi</h3>
      </div>
    </div>

    {/* Second Academic Program */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://online.yatharthinstitution.com/assets/images/course/1640045725.jpg' // Replace with actual image URL
        className='object-cover w-full h-64' 
        alt='Program 2'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 30,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Master of Arts</h1>
        <p className='text-sm text-gray-600'>2 Years, Evening Classes</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Lahore</h3>
      </div>
    </div>

    {/* Third Academic Program */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://www.sus.edu.in/images/diploma-computer-science-and-engineering-sus.jpeg' // Replace with actual image URL
        className='object-cover w-full h-64' 
        alt='Program 3'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 20,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Diploma in Computer Science</h1>
        <p className='text-sm text-gray-600'>1 Year, Online</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Islamabad</h3>
      </div>
    </div>

    {/* Fourth Academic Program */}
    <div className='relative h-96 w-full sm:w-[80%] md:w-[90%] lg:w-64 border-[1px] border-gray-400 bg-gray-300 rounded-xl overflow-hidden'>
      <img 
        src='https://5.imimg.com/data5/SELLER/Default/2022/10/PG/YF/JS/142640361/certificate-graphic-design-printing-service-500x500.jpeg' // Replace with actual image URL
        className='object-cover w-full h-64' 
        alt='Program 4'
      />
      <div className='flex items-center mx-5 space-x-1 my-4'>
        <h3 className='font-bold font-sans text-[18px]'>Rs 15,000</h3>
      </div>
      <div className='mx-5 font-sans font-semibold'>
        <h1>Certificate in Graphic Design</h1>
        <p className='text-sm text-gray-600'>6 Months, Part-Time</p>
      </div>
      <div className='flex items-center space-x-1 mx-5 '>
        <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-gray-500' />
        <h3 className='font-sans font-semibold color1'>Faisalabad</h3>
      </div>
    </div>

  </div>
</div>
<AdsByLocation/>

</>
    
  );
}

export default Home;
