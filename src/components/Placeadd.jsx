import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUpload, faMobileAlt, faHome, faCar, faGraduationCap,faMapMarkerAlt,faLocationDot,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cities from './header/cites';
import { faHouse, faBuilding, faLandmark, faTags,  faWarehouse } from '@fortawesome/free-solid-svg-icons';
        
import { useCallback } from 'react';

const uniqueCities = Array.from(new Set(cities));
const PlaceAdd = () => {
  const [category, setCategory] = useState('Mobiles');
  const [filteredCities, setFilteredCities] = useState(uniqueCities);
  const [toggleform, settoggleform] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [showCities, setshowCities] = useState(false);
  const [isLocationSet, setIsLocationSet] = useState(false);
    const [propertyPurpose, setPropertyPurpose] = useState('');
 
  const [propertyType, setPropertyType] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    titleImage: null,
    additionalImages: [],
    brand: '',
    model: '',
    storage: '',
    condition: 'New',
    propertyType: '',
    carMake: '',
    carYear: '',
    subject: '',
    propertyPurpose: '',
    propertyType: '',
      areaSize: '',
          areaUnit: 'marla'
  });

  const mobileBrands = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'Nokia', 'Others'];
  const defaultImage = 'https://via.placeholder.com/360x240?text=Default+Image';
  const categories = [
    { name: 'Mobiles', icon: faMobileAlt },
    { name: 'Property', icon: faHome },
    { name: 'Cars', icon: faCar },
    { name: 'Academics', icon: faGraduationCap },
  ];

  const propertyTypes = {
    Home: ['House', 'Flat', 'Upper Portion', 'Lower Portion', 'Farm House', 'Room', 'Penthouse'],
    Plots: ['Residential Plot', 'Commercial Plot', 'Agricultural Plot',
      'Industrial Land','Plot File','Plot Form'
    ],
    Commercial: ['Office', 'Shop', 'Warehouse','Factory','Building','Other'],
 
  };

  useEffect(() => {
    resetForm();
  }, [category]);

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

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      location: '',
      titleImage: null,
      additionalImages: [],
      brand: '',
      model: '',
      storage: '',
      condition: 'New',
     propertyPurpose: '',
      propertyType: '',

      carMake: '',
      carYear: '',
      subject: '',
        areaSize: '',
          areaUnit: 'marla'
    });
  };

  const handleCategorySelect = (cat) => {
    if (cat !== category) {
      // Optional: Confirm reset if there's existing data
      resetForm();
    }
    setCategory(cat);
  };
  const handleInputClicks = () => {
    // Check if location has already been set
    if (!isLocationSet) {
      // Get live location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // Set the location in the input field
            const liveLocation = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
            setFormData((prevData) => ({
              ...prevData,
              location: liveLocation, // Add live location to input
            }));

            // Set the flag that location is set
            setIsLocationSet(true);
          },
          (error) => {
            console.error("Error fetching location: ", error);
            alert("Unable to retrieve your location. Please ensure location services are enabled.");
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    } else {
      // Redirect to Google Maps with the saved location
      const googleMapsUrl = `https://www.google.com/maps?q=${formData.location}`;
      window.open(googleMapsUrl, '_blank'); // Open in a new tab
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleInputChanging = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      location: e.target.value, // Allow manual entry of location
    }));
    setIsLocationSet(false); // Reset flag if the user edits the location manually
  };
  useEffect(() => {
    setFilteredCities(uniqueCities);
  }, [uniqueCities]);
  
  const handleInputClicking = () => {
    setShowCities((prev) => !prev);
  };
  
  const handleSearchChanging = useCallback((e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setFilteredCities(term ? uniqueCities.filter(city => city.toLowerCase().includes(term.toLowerCase())) : uniqueCities);
    setShowCities(!!term);
  }, [uniqueCities]);
  
  const handleCityClicki = (city) => {
    setSearchTerm(city);
    setShowCities(false);
  }

  const handleImageChange = (e, isTitleImage = false) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));

    setFormData(prev => ({
      ...prev,
      [isTitleImage ? 'titleImage' : 'additionalImages']: isTitleImage 
        ? imageUrls[0] // For title image, take the first one
        : [...prev.additionalImages, ...imageUrls.slice(0, 4 - prev.additionalImages.length)], // Limit additional images to 4
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if necessary
    alert("Ad posted successfully!");
  };
  const handlePropertyPurposeChange = (e) => {
    const { value } = e.target;
    setPropertyPurpose(value);
    setPropertyType(''); // Reset property type when purpose changes
  };

 
  const renderCategoryFields = () => {
    switch (category) {
      case 'Mobiles':
        return (
          <>
            <form onSubmit={handleSubmit} className="space-y-8 font-roboto">
  {/* Brand Select */}
  <div className="mb-4">
    <label htmlFor="brand" className="block text-lg font-roboto mb-2">Mobile Brand</label>
    <select
      name="brand"
      value={formData.brand}
      onChange={handleInputChange}
      className="input-style font-roboto cursor-pointer w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="">Select Mobile Brand</option>
      {mobileBrands.map(brand => (
        <option key={brand} value={brand}>{brand}</option>
      ))}
    </select>
  </div>

  {/* Mobile Model Input */}
  <div className="mb-4">
    <label htmlFor="model" className="block text-lg font-roboto mb-2">Mobile Model</label>
    <input
      type="text"
      name="model"
      value={formData.model}
      onChange={handleInputChange}
      placeholder="Mobile Model"
      className="input-style font-roboto cursor-pointer w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Storage Select */}
  <div className="mb-4 relative">
    <label htmlFor="storage" className="block text-lg font-roboto mb-2">Storage</label>
    <select
      name="storage"
      value={formData.storage}
      onChange={handleInputChange} // Handle changes when an option is selected
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Storage</option>
      <option value="32GB">32GB</option>
      <option value="64GB">64GB</option>
      <option value="128GB">128GB</option>
      <option value="256GB">256GB</option>
      <option value="512GB">512GB</option>
      <option value="1TB">1TB</option>
    </select>
  </div>

  {/* Condition Select */}
  <div className="mb-4">
    <label htmlFor="condition" className="block text-lg font-roboto mb-2">Condition</label>
    <select
      name="condition"
      value={formData.condition}
      onChange={handleInputChange}
      className="input-style font-roboto cursor-pointer w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="New">New</option>
      <option value="Old">Old</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="ram" className="block text-lg font-roboto mb-2">RAM</label>
    <select
      name="ram"
      value={formData.ram}
      onChange={handleInputChange}
      className="input-style font-roboto cursor-pointer w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select RAM</option>
      <option value="2GB">2GB</option>
      <option value="4GB">4GB</option>
      <option value="6GB">6GB</option>
      <option value="8GB">8GB</option>
      <option value="12GB">12GB</option>
      <option value="16GB">16GB</option>
    </select>
  </div>
</form>

          </>
        );
    
      
        case 'Property':

    if (!formData.purpose) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        purpose: 'Sell',
        propertyCategory: 'Home',
        propertyType: propertyTypes['Home'][0], // Default to first type in 'Home' category
      }));
    }


  return (
    <div className="property-form">
      {/* Select Purpose (Sell or Rent) */}
      <label className="section-label">Purpose:</label>
      <div className="button-group">
        <button
          type="button"
          className={`button-style ${formData.purpose === 'Sell' ? 'selected' : ''} default-sell`}
          onClick={() => setFormData((prevFormData) => ({ ...prevFormData, purpose: 'Sell' }))}
        >
          <FontAwesomeIcon icon={faTags} /> Sell
        </button>
        <button
          type="button"
          className={`button-style ${formData.purpose === 'Rent' ? 'selected' : ''}`}
          onClick={() => setFormData((prevFormData) => ({ ...prevFormData, purpose: 'Rent' }))}
        >
          <FontAwesomeIcon icon={faWarehouse} /> Rent
        </button>
      </div>

      {/* Select Property Category (Home, Plots, Commercial) */}
      <label className="section-label">Property Category:</label>
      <div className="button-group">
        <button
          type="button"
          className={`button-style  ${formData.propertyCategory === 'Home' ? 'selected' : ''} default-home`}
          onClick={() => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              propertyCategory: 'Home',
              propertyType: propertyTypes['Home'][0], // Reset property type to first item in Home
            }));
          }}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </button>
        <button
          type="button"
          className={`button-style ${formData.propertyCategory === 'Plots' ? 'selected' : ''}`}
          onClick={() => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              propertyCategory: 'Plots',
              propertyType: propertyTypes['Plots'][0], // Reset property type to first item in Plots
            }));
          }}
        >
          <FontAwesomeIcon icon={faLandmark} /> Plots
        </button>
        <button
          type="button"
          className={`button-style ${formData.propertyCategory === 'Commercial' ? 'selected' : ''}`}
          onClick={() => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              propertyCategory: 'Commercial',
              propertyType: propertyTypes['Commercial'][0], // Reset property type to first item in Commercial
            }));
          }}
        >
          <FontAwesomeIcon icon={faBuilding} /> Commercial
        </button>
      </div>

      {/* Select Property Type based on Category */}
      <label className="section-label">Property Type:</label>
      <div className="button-group">
        {(propertyTypes[formData.propertyCategory || 'Home'] || []).map((type) => (
          <button
            key={type}
            type="button"
            className={`button-style ${formData.propertyType === type ? 'selected' : ''}`}
            onClick={() => setFormData((prevFormData) => ({ ...prevFormData, propertyType: type }))}
          >
            <FontAwesomeIcon icon={faHouse} /> {type}
          </button>
        ))}
      </div>
      {/* Area Size Input and Unit Selector */}
      <label className="section-label">Enter Area Size:</label>
      <div className="area-size-group">
        <input
          type="number"
          placeholder="Enter units"
          value={formData.areaSize || ''}
          onChange={(e) => setFormData((prevFormData) => ({
            ...prevFormData,
            areaSize: e.target.value,
          }))}
          className="area-input"
        />
        <select
          value={formData.areaUnit || 'marla'}
          onChange={(e) => setFormData((prevFormData) => ({
            ...prevFormData,
            areaUnit: e.target.value,
          }))}
          className="unit-select"
        >
          <option value="marla">Marla</option>
          <option value="sq.ft">Sq. Ft.</option>
          <option value="sq.m">Sq. M</option>
          <option value="sq.yd">Sq. Yd</option>
          <option value="kanal">Kanal</option>
        </select>
      </div>
      <h1 className='section-label'>Feature and Amenities</h1>
      <div class="button-group">
     

  <div class="button-section ">
    <div class="button-section-title " className='font-helveticaLight font-semibold'>Bedrooms</div>
    <div class="button-style">
      <span class="icon" className='font-helveticaLight'>🏠</span> Studio
    </div>
    <div class="button-style">
      <span class="icon">1</span>
    </div>
    <div class="button-style">
      <span class="icon">2</span>
    </div>
    <div class="button-style">
      <span class="icon">3</span>
    </div>
    <div class="button-style">
      <span class="icon">4</span>
    </div>
    <div class="button-style">
      <span class="icon">5</span>
    </div>
    <div class="button-style">
      <span class="icon">6</span>
    </div>
    <div class="button-style">
      <span class="icon">7</span>
    </div>
    <div class="button-style">
      <span class="icon">8</span>
    </div>
    <div class="button-style">
      <span class="icon">9</span> 
    </div>
    <div class="button-style">
      <span class="icon">🔟+</span> 
    </div>
  </div>


  <div class="button-section">
    <div class="button-section-title" className='font-helveticaLight font-semibold'>Bathrooms</div>
    <div class="button-style">
      <span class="icon">🚿</span> 1
    </div>
    <div class="button-style">
      <span class="icon">🚿</span> 2
    </div>
    <div class="button-style">
      <span class="icon">🚿</span> 3
    </div>
    <div class="button-style">
      <span class="icon">🚿</span> 4
    </div>
    <div class="button-style">
      <span class="icon">🚿</span> 5
    </div>
    <div class="button-style">
      <span class="icon">🚿</span> 6
    </div>
    <div class="button-style">
      <span class="icon">🚿</span> 6+
    </div>
  </div>
</div>

    </div>
  );


        
      case 'Cars':
        return (
          <>
  <form onSubmit={handleSubmit} className="space-y-8 font-roboto">
  {/* Car Make Select */}
  <div className="mb-4">
    <label htmlFor="carMake" className="block text-lg font-roboto mb-2">Car Make</label>
    <select
      name="carMake"
      value={formData.carMake}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Car Make</option>
      <option value="Toyota">Toyota</option>
      <option value="Honda">Honda</option>
      <option value="Suzuki">Suzuki</option>
      <option value="Nissan">Nissan</option>
      {/* Add more car makes as needed */}
    </select>
  </div>

  {/* Car Model Select */}
  <div className="mb-4">
    <label htmlFor="carModel" className="block text-lg font-roboto mb-2">Car Model</label>
    <select
      name="carModel"
      value={formData.carModel}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Car Model</option>
      
      {formData.carMake === "Toyota" && (
        <>
          <option value="Corolla">Corolla</option>
          <option value="Yaris">Yaris</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Land Cruiser">Land Cruiser</option>
        </>
      )}
      {formData.carMake === "Honda" && (
        <>
          <option value="Civic">Civic</option>
          <option value="City">City</option>
          <option value="BR-V">BR-V</option>
        </>
      )}
      {formData.carMake === "Suzuki" && (
        <>
          <option value="Mehran">Mehran</option>
          <option value="Cultus">Cultus</option>
          <option value="Swift">Swift</option>
          <option value="Wagon R">Wagon R</option>
        </>
      )}
      {formData.carMake === "Nissan" && (
        <>
          <option value="Altima">Altima</option>
          <option value="Sunny">Sunny</option>
          <option value="350Z">350Z</option>
        </>
      )}
      {/* Add more models based on the selected car make */}
    </select>
  </div>

  {/* Car Year Select */}
  <div className="mb-4">
    <label htmlFor="carYear" className="block text-lg font-roboto mb-2">Car Year</label>
    <select
      name="carYear"
      value={formData.carYear}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Car Year</option>
      {[...Array(20)].map((_, index) => {
        const year = 2024 - index;
        return (
          <option key={year} value={year}>{year}</option>
        );
      })}
    </select>
  </div>

  {/* Car Color Select */}
  <div className="mb-4">
    <label htmlFor="carColor" className="block text-lg font-roboto mb-2">Car Color</label>
    <select
      name="carColor"
      value={formData.carColor}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Car Color</option>
      <option value="Black">Black</option>
      <option value="White">White</option>
      <option value="Silver">Silver</option>
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      {/* Add more colors as needed */}
    </select>
  </div>

  {/* Transmission Select */}
  <div className="mb-4">
    <label htmlFor="transmission" className="block text-lg font-roboto mb-2">Transmission</label>
    <select
      name="transmission"
      value={formData.transmission}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Transmission</option>
      <option value="Automatic">Automatic</option>
      <option value="Manual">Manual</option>
    </select>
  </div>

  {/* Mileage Select */}
  <div className="mb-4">
    <label htmlFor="mileage" className="block text-lg font-roboto mb-2">Mileage (km)</label>
    <select
      name="mileage"
      value={formData.mileage}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Mileage</option>
      <option value="0-50000">0 - 50,000 km</option>
      <option value="50001-100000">50,001 - 100,000 km</option>
      <option value="100001-150000">100,001 - 150,000 km</option>
      <option value="150001-200000">150,001 - 200,000 km</option>
      <option value="200001+">200,001+ km</option>
    </select>
  </div>

  {/* Condition Select (New/Old) */}
  <div className="mb-4">
    <label htmlFor="condition" className="block text-lg font-roboto mb-2">Condition</label>
    <select
      name="condition"
      value={formData.condition}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="New">New</option>
      <option value="Old">Old</option>
    </select>
  </div>

  {/* Price Input */}

</form>



          </>
        );
      case 'Academics':
        return (
<form onSubmit={handleSubmit} className="space-y-8 font-roboto">
  {/* Subject Select */}
  <div className="mb-4">
    <label htmlFor="subject" className="block text-lg font-roboto mb-2">Subject</label>
    <select
      name="subject"
      value={formData.subject}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Subject</option>
      {/* Add various common subjects/courses offered in an academy */}
      <option value="Mathematics">Mathematics</option>
      <option value="Physics">Physics</option>
      <option value="Chemistry">Chemistry</option>
      <option value="Biology">Biology</option>
      <option value="Computer Science">Computer Science</option>
      <option value="English">English</option>
      <option value="History">History</option>
      <option value="Geography">Geography</option>
      <option value="Economics">Economics</option>
      <option value="Business Studies">Business Studies</option>
      <option value="Psychology">Psychology</option>
      <option value="Law">Law</option>
      <option value="Arts">Arts</option>
      <option value="Music">Music</option>
      <option value="Physical Education">Physical Education</option>
      <option value="Languages">Languages</option>
      <option value="Photography">Photography</option>
      <option value="Engineering">Engineering</option>
      <option value="Architecture">Architecture</option>
      <option value="Design">Design</option>
      <option value="Social Studies">Social Studies</option>
    </select>
  </div>

  {/* Instructor Name */}
  <div className="mb-4">
    <label htmlFor="instructorName" className="block text-lg font-roboto mb-2">Instructor Name</label>
    <input
      type="text"
      name="instructorName"
      value={formData.instructorName}
      onChange={handleInputChange}
      placeholder="Enter instructor name"
      className="input-style w-full font-roboto p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Class Timings */}
  <div className="mb-4">
    <label htmlFor="classTimings" className="block text-lg font-roboto mb-2">Class Timings</label>
    <input
      type="text"
      name="classTimings"
      value={formData.classTimings}
      onChange={handleInputChange}
      placeholder="e.g., Monday and Wednesday, 10:00 AM - 12:00 PM"
      className="input-style w-full font-roboto p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Course Level */}
  <div className="mb-4">
    <label htmlFor="courseLevel" className="block text-lg font-roboto mb-2">Course Level</label>
    <select
      name="courseLevel"
      value={formData.courseLevel}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Level</option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
    </select>
  </div>

  {/* Course Type */}
  <div className="mb-4">
    <label htmlFor="courseType" className="block text-lg font-roboto mb-2">Course Type</label>
    <select
      name="courseType"
      value={formData.courseType}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    >
      <option value="" disabled>Select Course Type</option>
      <option value="Online">Online</option>
      <option value="In-Person">In-Person</option>
      <option value="Hybrid">Hybrid</option>
    </select>
  </div>

  {/* Course Material Upload */}
  {/* <div className="mb-4">
    <label htmlFor="courseMaterial" className="block text-lg font-roboto mb-2">Course Material</label>
    <input
      type="file"
      name="courseMaterial"
      onChange={handleFileChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div> */}

  {/* Max Capacity */}
  <div className="mb-4">
    <label htmlFor="maxCapacity" className="block text-lg font-roboto mb-2">Max Capacity</label>
    <input
      type="number"
      name="maxCapacity"
      value={formData.maxCapacity}
      onChange={handleInputChange}
      placeholder="Enter maximum number of students"
      className="input-style w-full font-roboto p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Prerequisites */}
  <div className="mb-4">
    <label htmlFor="prerequisites" className="block text-lg font-roboto mb-2">Prerequisites</label>
    <textarea
      name="prerequisites"
      value={formData.prerequisites}
      onChange={handleInputChange}
      placeholder="Enter prerequisites for the course (if any)"
      className="input-style w-full font-roboto p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Discount / Offer */}
  <div className="mb-4">
    <label htmlFor="discount" className="block text-lg font-roboto mb-2">Discount / Offer</label>
    <input
      type="text"
      name="discount"
      value={formData.discount}
      onChange={handleInputChange}
      placeholder="Enter discount or offer details"
      className="input-style w-full font-roboto p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Enrollment Deadline */}
  <div className="mb-4">
    <label htmlFor="enrollmentDeadline" className="block text-lg font-roboto mb-2">Enrollment Deadline</label>
    <input
      type="date"
      name="enrollmentDeadline"
      value={formData.enrollmentDeadline}
      onChange={handleInputChange}
      className="input-style w-full font-roboto p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Course Objectives */}
  <div className="mb-4">
    <label htmlFor="courseObjectives" className="block text-lg font-roboto mb-2">Course Objectives</label>
    <textarea
      name="courseObjectives"
      value={formData.courseObjectives}
      onChange={handleInputChange}
      placeholder="List the main objectives of the course"
      className="input-style w-full font-roboto p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Submit Button */}
 
</form>


        );
      default:
        return null;
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-5 sm:p-10">
<div className="w-full md:px-10 px-0 flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden">

    {/* Left Side: Ad Form */}
    <div className="w-full md:w-2/3 p-8 sm:p-12 text-gray-800 flex flex-col bg-white rounded-3xl shadow-lg border border-gray-200 transition duration-300 transform">
        <h2 className="text-4xl font-montserrat font-extrabold text-center mb-8 text-blue-600 tracking-wide uppercase shadow-md">
            Post Your Ad
        </h2>

        {/* Category Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(({ name, icon }) => (
                <button
                    key={name}
                    onClick={() => handleCategorySelect(name)}
                    className={`flex items-center font-sansing justify-center px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-transform duration-300 
                        ${category === name 
                            ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-xl transform scale-110' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:text-white hover:shadow-md hover:scale-105'}`}
                    title={`Select ${name}`} // Tooltip for user guidance
                >
                    <FontAwesomeIcon icon={icon} className="mr-3 text-xl" />
                    {name}
                </button>
            ))}
        </div>

        {/* Ad Form */}
        <form onSubmit={handleSubmit} className="space-y-8 font-helveticaLight">
  {/* Title Input */}
  <div className="flex flex-col">
    <label htmlFor="title" className="text-lg  mb-2">Ad Title</label>
    <input
      id="title"
      type="text"
      name="title"
      value={formData.title}
      onChange={handleInputChange}
      placeholder="Ad Title"
      className="input-style w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Description Input */}
  <div className="flex flex-col">
    <label htmlFor="description" className="text-lg mb-2">Ad Description</label>
    <textarea
      id="description"
      name="description"
      value={formData.description}
      onChange={handleInputChange}
      placeholder="Ad Description"
      rows="4"
      className="input-style w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Dynamic Fields */}
  {renderCategoryFields()}

  {/* Price Input */}
  <div className="flex flex-col">
    <label htmlFor="price" className="text-lg font-helveticaLight  mb-2">Price (in Rs)</label>
    <input
      id="price"
      type="text"
      name="price"
      value={formData.price}
      onChange={handleInputChange}
      placeholder="Price (in Rs)"
      className="input-style w-full p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>
  <div className="mb-6">
    <label className="text-lg font-semibold text-gray-800">Select State</label>
    <select
   
      className="mt-3 p-3 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-md transition-all duration-300 hover:bg-blue-50/90 hover:border-blue-400 hover:shadow-lg"
    >
      <option value="" disabled>Select State</option>
      <option value="punjab">Punjab</option>
      <option value="sindh">Sindh</option>
      <option value="balochistan">Balochistan</option>
      <option value="kpk">Khyber Pakhtunkhwa</option>
      <option value="gilgit-baltistan">Gilgit Baltistan</option>
    </select>
  </div>
  <div className="mb-6">
    <label className="text-lg font-semibold text-gray-800">Search City</label>
    <div className="relative">
      <input
        type="text"
        readOnly
        placeholder="Search City"
        onClick={handleInputClick}
        className="h-12 w-full rounded-full pl-10 pr-10 border border-gray-300 bg-white/80 shadow-md focus:ring-4 focus:ring-blue-400 hover:bg-blue-50/80 transition-all duration-300"
      />
      <FontAwesomeIcon
        icon={faLocationDot}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-500"
      />
      <FontAwesomeIcon
        icon={faAngleDown}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-500"
      />

      {showCities && (
        <div className="absolute left-0 right-0 mt-2 border border-gray-300 rounded-2xl bg-white/90 shadow-lg z-50 p-4 backdrop-blur-md animate-fadeIn">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-12 w-full rounded-full pl-10 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300"
          />
          <div className="h-48 overflow-y-auto mt-2">
            <ul className="space-y-2">
              {filteredCities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleCityClick(city)}
                  className="cursor-pointer hover:bg-blue-100 rounded-lg p-2 transition duration-200 text-gray-700"
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


  {/* Location Input */}
  <div className="relative flex flex-col">
    <label htmlFor="location" className="text-lg  mb-2">Location</label>
    <input
      id="location"
      type="text"
      name="location"
      value={formData.location}
      onChange={handleInputChanging} // Allow manual edits
      onClick={handleInputClicks} // Handle location click
      placeholder="Location"
      className="h-12 w-full rounded-lg pl-10 font-helveticaLight cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 border-[1px] border-gray-300 transition duration-200"
    />
    <FontAwesomeIcon
      icon={faMapMarkerAlt} // Specify the icon
      className="absolute left-4 top-14 transform -translate-y-1/2 text-gray-500"
    />
  </div>
  <div className="mb-6 flex justify-center">
  <input
    type="file"
    onChange={(e) => handleImageChange(e, true)}
    className="hidden"
    id="title-image-upload"
    accept="image/*"
  />
  <label
    htmlFor="title-image-upload"
    className="flex items-center font-roboto cursor-pointer bg-gradient-to-r from-gray-700 to-gray-900 rounded-full p-4 shadow-lg hover:from-gray-800 hover:to-gray-900 transition duration-300 transform hover:scale-105"
  >
    <FontAwesomeIcon icon={faCamera} className="mr-2 text-white" />
    <span className="text-white">Upload Title Image</span>
  </label>
</div>


  {/* Title Image Upload */}
  <div className="mb-6 flex justify-center">
  <input
    type="file"
    onChange={(e) => handleImageChange(e, false)}
    className="hidden"
    id="additional-images-upload"
    multiple
    accept="image/*"
  />
  <label
    htmlFor="additional-images-upload"
    className="flex items-center cursor-pointer bg-gradient-to-r from-gray-800 to-gray-900 rounded-full p-4 shadow-lg hover:from-gray-900 hover:to-gray-800 transition duration-300 transform hover:scale-105"
  >
    <FontAwesomeIcon icon={faUpload} className="mr-2 text-white" />
    <span className="text-white">Upload Additional Images (Max 4)</span>
  </label>
</div>


  {/* Additional Images Upload */}


  {/* Submit Button */}
  <button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-800 to-black text-white rounded-full py-4 text-lg font-bold shadow-lg hover:from-black hover:to-blue-800 hover:shadow-xl transform transition-all duration-300 hover:scale-105"
>
  Post Ad
</button>




</form>

    </div>

    {/* Right Side: Live Preview */}
    <div className="h-[500px] relative mt-4 md:mt-0 w-full md:w-1/4 bg-gradient-to-r from-gray-700 to-gray-800 p-6 sm:p-8 rounded-2xl shadow-3xl border border-gray-200 transform transition-transform duration-300 ease-out hover:shadow-2xl hover:border-gray-600 md:mx-4 lg:mx-32">
  {/* Live Preview Badge with Pulse Effect */}
  <span className="absolute top-2 left-1/2 transform -translate-x-1/2 font-helveticaLight text-white font-bold bg-gradient-to-r from-orange-600 to-purple-800 rounded-full px-4 py-2 shadow-md z-20 transition-transform duration-200 hover:scale-110 animate-pulse">
    Live Preview
  </span>

  {/* Frosted Glass Effect for Content Wrapper */}
  <div className="border border-transparent rounded-xl p-1 animate-gradient backdrop-blur-lg">
    <div className="border border-gray-300 rounded-xl p-6 bg-white bg-opacity-90 shadow-inner transform hover:scale-105 transition duration-500 ease-in-out">

      {/* Image with Overlay and 3D Hover Effect */}
      <div className="relative mb-6 transform transition-transform duration-300 ease-in-out hover:rotate-2 hover:scale-110">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="bg-gray-900 opacity-60 h-full"></div>
        </div>
        <img
          src={formData.titleImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE789NtlOwrGK3Tuby_0mYilvCEZVUmwjfCg&s"}
          alt="Title Preview"
          className="relative w-full h-48 rounded-xl shadow-lg border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1"
        />
      </div>

      {/* Title */}
      <h4 className="text-3xl font-bold font-roboto mb-2 text-center text-transparent bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text tracking-wide shadow-md">
        {formData.title || 'Your Title'}
      </h4>

      {/* Description */}
      <p className="text-gray-700 font-helveticaLight text-center mb-4 text-lg italic leading-relaxed">
        {formData.description || 'Your Description'}
      </p>

      {/* Price with Gradient and Shadow */}
      <p className="text-xl font-semibold text-center font-montserrat text-transparent bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text shadow-md">
        {formData.price ? `Price: Rs. ${formData.price}` : 'Price: Rs. 0'}
      </p>

      {/* Location */}
      <p className="text-lg text-gray-600 text-center font-montserrat flex items-center justify-center space-x-2 mt-4">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-xl text-purple-500" />
        <span className="text-lg font-medium">{formData.location || 'Your Location'}</span>
      </p>
      
      {/* Additional Images */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {formData.additionalImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Additional Preview ${index + 1}`}
            className="w-full h-24 object-cover rounded-lg shadow-md border border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl transform hover:rotate-3"
          />
        ))}
      </div>

    </div>
  </div>
</div>









</div>
</div>




  

  );
};

export default PlaceAdd;
