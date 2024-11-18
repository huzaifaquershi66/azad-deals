import React, { useState, useEffect,useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUpload, faMobileAlt, faHome, faCar, faGraduationCap,faMapMarkerAlt,faLocationDot,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cities from './header/cites';
import { faHouse, faBuilding, faLandmark, faTags,  faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from 'axios';
// Leaflet marker icon fix for React Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });


import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { useRef } from 'react';

// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
 
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });
const statesWithCities = {
  Punjab: [
    "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sialkot", "Bahawalpur",
    "Sargodha", "Sheikhupura", "Jhang", "Gujrat", "Kasur", "Rahim Yar Khan", "Sahiwal",
    "Okara", "Wah Cantonment", "Dera Ghazi Khan", "Chiniot", "Kamoke", "Hafizabad",
    "Mandi Bahauddin", "Toba Tek Singh", "Jhelum", "Sadiqabad", "Muzaffargarh", "Vehari",
    "Khushab", "Pakpattan", "Narowal", "Khanewal", "Mianwali", "Bhakkar", "Bahawalnagar"
  ],
  Sindh: [
    "Karachi", "Hyderabad", "Sukkur", "Larkana", "Mirpur Khas", "Shaheed Benazirabad",
    "Jacobabad", "Shikarpur", "Dadu", "Thatta", "Badin", "Khairpur", "Umerkot", "Naushero Feroze",
    "Ghotki", "Sanghar", "Mithi", "Kandhkot", "Tando Allahyar", "Tando Muhammad Khan",
    "Moro", "Kotri", "Hala", "Kunri", "Sehwan", "Sakrand"
  ],
  Balochistan: [
    "Quetta", "Gwadar", "Turbat", "Khuzdar", "Sibi", "Zhob", "Loralai", "Chaman",
    "Pishin", "Kalat", "Dera Murad Jamali", "Hub", "Musakhel", "Jafarabad", "Nushki",
    "Panjgur", "Surab", "Barkhan", "Dera Allah Yar", "Usta Muhammad", "Lasbela",
    "Kharan", "Washuk", "Awaran", "Kohlu", "Qila Saifullah", "Qila Abdullah", "Mastung"
  ],
  KhyberPakhtunkhwa: [
    "Peshawar", "Abbottabad", "Mardan", "Swat", "Kohat", "Dera Ismail Khan", "Bannu",
    "Charsadda", "Nowshera", "Swabi", "Haripur", "Mansehra", "Karak", "Lakki Marwat",
    "Buner", "Dir", "Shangla", "Tank", "Battagram", "Lower Dir", "Upper Dir", "Hangu",
    "Mingora", "Timergara", "Parachinar", "Mardan", "Malakand"
  ],
  Islamabad: ["Islamabad"],
  GilgitBaltistan: [
    "Gilgit", "Skardu", "Hunza", "Chilas", "Ghanche", "Ghizer", "Astore", "Kharmang",
    "Shigar", "Nagar"
  ],
  AzadKashmir: [
    "Muzaffarabad", "Mirpur", "Rawalakot", "Bagh", "Kotli", "Bhimber", "Pallandri",
    "Hajira", "Dadyal", "Athmuqam", "Barnala"
  ]
};

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
    const [markerPosition, setMarkerPosition] = useState([51.505, -0.09])
    const [media, setMedia] = useState(Array(10).fill(null));
    const [titleImage, setTitleImage] = useState(null);

  
 
  const [propertyType, setPropertyType] = useState('');
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (event) => {
    const selected = event.target.value;
    setSelectedState(selected);
    setCities(statesWithCities[selected] || []);
  };
 
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

    const handleTitleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        // Update both titleImage and formData with the blob URL
        setTitleImage(objectUrl);
        setFormData({
          ...formData,
          titleImage: objectUrl, // Store blob URL in formData
        });
      }
    };
    
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
  const provider = new OpenStreetMapProvider();

  // Handle input click to fetch live location using Geosearch API
  const handleInputClickss = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
  
          // Set the marker position
          setMarkerPosition([latitude, longitude]);
          setIsLocationSet(true);
  
          // OpenStreetMap Reverse Geocoding API URL
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;
  
          // Fetch address using OpenStreetMap Reverse Geocoding API
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data && data.address) {
                const { city, state, country, suburb, neighbourhood, road, town, village } = data.address; // Extract city, state, country, and area (suburb/neighbourhood)
  
                // Determine the best available area information (street, suburb, town, village)
                const area = road || suburb || neighbourhood || town || village || "Area not available"; // Fallback to a default message if area is not found
                const address = `${area}, ${city}, ${state}, ${country}`; // Construct the full address
  
                // Update the formData state with the formatted address
                setFormData((prevData) => ({ ...prevData, location: `Registered Location: ${address}` }));
              } else {
                alert("Unable to fetch the address.");
              }
            })
            .catch((error) => {
              console.error("Error fetching address:", error);
              alert("An error occurred while fetching the address.");
            });
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to retrieve location.");
        },
        {
          enableHighAccuracy: true,  // This forces a more accurate result
          timeout: 10000,            // Set a timeout to avoid hanging if location is not available
          maximumAge: 0              // Don't use cached location
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  
  const LocationUpdater = () => {
    const map = useMap();
    if (isLocationSet && markerPosition) {
      // Fly to the new location with a smooth zoom effect
      map.flyTo(markerPosition, map.getZoom());
    }
    return null;
  };

 
  
  // JSX for Input Field:

  
  

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

  const handleMediaChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedMedia = [...media];
      updatedMedia[index] = URL.createObjectURL(file);
      setMedia(updatedMedia);
    }
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
      <option value="BMW">BMW</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Audi">Audi</option>
      <option value="Ford">Ford</option>
      <option value="Chevrolet">Chevrolet</option>
      <option value="Hyundai">Hyundai</option>
      <option value="Kia">Kia</option>
      <option value="Volkswagen">Volkswagen</option>
      <option value="Mazda">Mazda</option>
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
          <option value="Hilux">Hilux</option>
          <option value="Camry">Camry</option>
        </>
      )}
      {formData.carMake === "Honda" && (
        <>
          <option value="Civic">Civic</option>
          <option value="City">City</option>
          <option value="BR-V">BR-V</option>
          <option value="Jazz">Jazz</option>
          <option value="CR-V">CR-V</option>
        </>
      )}
      {formData.carMake === "Suzuki" && (
        <>
          <option value="Mehran">Mehran</option>
          <option value="Cultus">Cultus</option>
          <option value="Swift">Swift</option>
          <option value="Wagon R">Wagon R</option>
          <option value="Vitara">Vitara</option>
        </>
      )}
      {formData.carMake === "Nissan" && (
        <>
          <option value="Altima">Altima</option>
          <option value="Sunny">Sunny</option>
          <option value="350Z">350Z</option>
          <option value="Micra">Micra</option>
          <option value="X-Trail">X-Trail</option>
        </>
      )}
      {formData.carMake === "BMW" && (
        <>
          <option value="3 Series">3 Series</option>
          <option value="5 Series">5 Series</option>
          <option value="X5">X5</option>
          <option value="M4">M4</option>
        </>
      )}
      {formData.carMake === "Mercedes" && (
        <>
          <option value="C-Class">C-Class</option>
          <option value="E-Class">E-Class</option>
          <option value="S-Class">S-Class</option>
          <option value="GLA">GLA</option>
        </>
      )}
      {formData.carMake === "Audi" && (
        <>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
          <option value="Q5">Q5</option>
          <option value="A6">A6</option>
        </>
      )}
      {formData.carMake === "Ford" && (
        <>
          <option value="Fiesta">Fiesta</option>
          <option value="Focus">Focus</option>
          <option value="Mustang">Mustang</option>
          <option value="Explorer">Explorer</option>
        </>
      )}
      {formData.carMake === "Chevrolet" && (
        <>
          <option value="Cruze">Cruze</option>
          <option value="Malibu">Malibu</option>
          <option value="Tahoe">Tahoe</option>
          <option value="Camaro">Camaro</option>
        </>
      )}
      {formData.carMake === "Hyundai" && (
        <>
          <option value="Elantra">Elantra</option>
          <option value="Sonata">Sonata</option>
          <option value="Tucson">Tucson</option>
        </>
      )}
      {formData.carMake === "Kia" && (
        <>
          <option value="Seltos">Seltos</option>
          <option value="Sportage">Sportage</option>
          <option value="Forte">Forte</option>
        </>
      )}
      {formData.carMake === "Volkswagen" && (
        <>
          <option value="Golf">Golf</option>
          <option value="Passat">Passat</option>
          <option value="Tiguan">Tiguan</option>
        </>
      )}
      {formData.carMake === "Mazda" && (
        <>
          <option value="Mazda 3">Mazda 3</option>
          <option value="Mazda 6">Mazda 6</option>
          <option value="CX-5">CX-5</option>
        </>
      )}
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
      <option value="Manual">Manual</option>
      <option value="Automatic">Automatic</option>
      <option value="Semi-Automatic">Semi-Automatic</option>
    </select>
  </div>

  {/* Price Input */}
  <div className="mb-4">
    <label htmlFor="price" className="block text-lg font-roboto mb-2">Price</label>
    <input
      type="number"
      name="price"
      value={formData.price}
      onChange={handleInputChange}
      className="input-style w-full font-roboto cursor-pointer p-4 text-lg rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-purple-600 transition duration-300 transform focus:scale-105 shadow-md"
    />
  </div>

  {/* Submit Button */}

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
    <div className="w-full flex flex-col md:flex-grow bg-white shadow-2xl rounded-3xl overflow-hidden md:px-80 px-4">
    {/* Left Side: Ad Form */}
    <div className="w-full  p-8 sm:p-12 text-gray-800 flex flex-col bg-white rounded-3xl shadow-lg border border-gray-200 transition duration-300 transform">
    <h2 className="text-4xl font-montserrat font-extrabold text-center mb-8 text-indigo-900 tracking-wide uppercase shadow-lg">
    Post Your Ad
</h2>




        {/* Category Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
    {categories.map(({ name, icon }) => (
        <button
            key={name}
            onClick={() => handleCategorySelect(name)}
            className={`flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform
                ${category === name 
                    ? `bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl scale-110 hover:scale-110` 
                    : `bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:shadow-lg hover:scale-105`}`}
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
 
  <h1 className='font-manrope font-bold text-[20px]'>Title Image</h1>
  <div className="mb-6 flex flex-col items-center">
      <input
        type="file"
        onChange={handleTitleImageChange}
        className="hidden"
        id="title-image-upload"
        accept="image/*"
      />
      <label
        htmlFor="title-image-upload"
        className="cursor-pointer flex items-center justify-center bg-gradient-to-br from-blue-400 via-cyan-500 to-green-600 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative overflow-hidden"
      >
        {titleImage ? (
          <img
            src={titleImage}
            alt="Title preview"
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <>
            <FontAwesomeIcon icon={faUpload} className="mr-1 text-gray-100 text-2xl sm:text-3xl md:text-4xl" />
            <span className="text-gray-100 font-medium text-sm sm:text-base md:text-lg text-center">
              Upload Image
            </span>
          </>
        )}

        {/* Overlay that will be displayed when the image is hovered */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent rounded-lg opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
      </label>

      {/* If there's a selected image, it will display on top of the previous preview */}
      {titleImage && (
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
          {/* <img
            // src={titleImage}
     
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-70"
          /> */}
        </div>
      )}
    </div>



    <div>
  
</div>


  {/* Title Image Upload */}
  <h1 className='font-manrope font-bold text-[20px]'>Additional Images</h1>
  <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {media.map((item, index) => (
        <div key={index} className="relative">
          <input
            type="file"
            onChange={(e) => handleMediaChange(e, index)}
            className="hidden"
            id={`media-upload-${index}`}
            accept="image/*,video/*"
          />
          <label
            htmlFor={`media-upload-${index}`}
            className="flex items-center justify-center bg-gray-800 rounded-md cursor-pointer shadow-lg hover:bg-gray-700 transition duration-300 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
          >
            {item ? (
              item.includes("video") ? (
                <video
                  src={item}
                  controls
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                <img
                  src={item}
                  alt="Selected media"
                  className="h-full w-full object-cover rounded-md"
                />
              )
            ) : (
              <FontAwesomeIcon icon={faUpload} className="text-white text-xl sm:text-2xl" />
            )}
          </label>
        </div>
      ))}
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
  <div className="p-6 w-full mx-auto bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-700">Select State and City</h2>
      
      {/* State Selector */}
      <label htmlFor="state" className="block mt-4 text-gray-600">State</label>
      <select
        id="state"
        value={selectedState}
        onChange={handleStateChange}
        className="w-full p-2 mt-1 border rounded-md"
      >
        <option value="">Select a State</option>
        {Object.keys(statesWithCities).map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      {/* City Selector */}
      <label htmlFor="city" className="block mt-4 text-gray-600">City</label>
      <select
        id="city"
        className="w-full p-2 mt-1 border rounded-md"
        disabled={!selectedState}
      >
        <option value="">Select a City</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
{/* 
  
    <Marker
      position={[51.505, -0.09]} // Default position, replace with actual coordinates if available
      icon={new L.Icon({
        iconUrl: '/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })}
    />
   */}


  {/* Location Input */}
  <div className="mt-4">
        <label className="text-lg font-semibold text-gray-800">Is Deliverable</label>
        <div className="mt-2 flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="yes"
              name="deliverable"
              // checked={isDeliverable === "yes"}
              // onChange={() => setIsDeliverable("yes")}
              className="h-4 w-4 text-green-600 focus:ring-green-500"
            />
            <label htmlFor="yes" className="ml-2 text-sm text-gray-700">
              Yes
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="no"
              name="deliverable"
              // checked={isDeliverable === "no"}
              // onChange={() => setIsDeliverable("no")}
              className="h-4 w-4 text-red-600 focus:ring-red-500"
            />
            <label htmlFor="no" className="ml-2 text-sm text-gray-700">
              No
            </label>
          </div>
        </div>
        </div>
  

  
 <div className="relative w-full mx-auto">
    <div className="relative">
      <FontAwesomeIcon
        icon={faLocationDot}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-500"
      />
      <input
        type="text"
        placeholder="Click to get your location"
        value={formData.location}  // Bind the input field to formData.location
        onClick={handleInputClickss} // Trigger location fetch on click
        readOnly
        className="h-12 w-full rounded-full pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300"
      />
    </div>

    <MapContainer center={markerPosition} zoom={13} style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {isLocationSet && <Marker position={markerPosition} />}
      <LocationUpdater />
    </MapContainer>
  </div>
  
  {/* Additional Images Upload */}


  {/* Submit Button */}
  <button
  type="submit"
  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full py-4 text-lg font-bold shadow-lg hover:from-purple-600 hover:to-pink-500 hover:shadow-xl transform transition-all duration-300 hover:scale-105"
>
  Post Ad
</button>




</form>

    </div>

    {/* Right Side: Live Preview */}
   
    <div className="h-[650px] relative mt-4   w-full md:max-w-[500px] bg-gradient-to-r from-gray-600 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-3xl border border-gray-300 transform transition-transform duration-300 ease-out hover:shadow-2xl md:mt-20 hover:border-gray-500 md:mx-4 lg:mx-auto">
  {/* Live Preview Badge with Pulse Effect */}
  <span className="absolute top-2 left-1/2 transform -translate-x-1/2 font-helveticaLight text-white font-bold bg-gradient-to-r from-orange-500 to-purple-700 rounded-full px-4 py-2 shadow-lg z-20 transition-transform duration-200 hover:scale-110 animate-pulse">
    Live Preview
  </span>

  {/* Frosted Glass Effect for Content Wrapper */}
  <div className="border border-transparent rounded-xl p-1 animate-gradient backdrop-blur-lg">
    <div className="border border-gray-300 rounded-xl p-6 bg-white bg-opacity-90 shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">

      {/* Image with Overlay and 3D Hover Effect */}
      <div className="relative mb-6 transform transition-transform duration-300 ease-in-out hover:rotate-2 hover:scale-110">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="bg-gray-900 opacity-50 h-full"></div>
        </div>
        <img
          src={formData.titleImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE789NtlOwrGK3Tuby_0mYilvCEZVUmwjfCg&s"}
          alt="Title Preview"
          className="relative w-full h-48 rounded-xl shadow-xl border border-gray-400 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1"
        />
      </div>

      {/* Title */}
      <h4 className="text-3xl font-bold font-roboto mb-2 text-center text-transparent bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text tracking-wide shadow-md">
        {formData.title || 'Your Title'}
      </h4>

      {/* Description */}
      <p className="text-gray-700 font-helveticaLight text-center mb-4 text-lg italic leading-relaxed">
        {formData.description || 'Your Description'}
      </p>

      {/* Price with Gradient and Shadow */}
      <p className="text-xl font-semibold text-center font-montserrat text-transparent bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text shadow-lg">
        {formData.price ? `Price: Rs. ${formData.price}` : 'Price: Rs. 0'}
      </p>

      {/* Location */}
      <p className="text-lg text-gray-600 text-center font-montserrat flex items-center justify-center space-x-2 mt-4">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-xl text-purple-500" />
        <span className="text-lg font-medium">{formData.location || 'Your Location'}</span>
      </p>
      
      {/* Additional Images */}
      {/* <div className="grid grid-cols-2 gap-3 mt-4">
        {formData.additionalImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Additional Preview ${index + 1}`}
            className="w-full h-24 object-cover rounded-lg shadow-md border border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl transform hover:rotate-3"
          />
        ))}
      </div> */}

    </div>
  </div>
 </div> 

 

  </div>










</div>





  

  );
};

export default PlaceAdd;
