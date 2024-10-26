import React from 'react';

const AdsByLocation = () => {
  return (
    <div className=" w-full mx-auto p-4 my-8">
      <h2 className="text-3xl font-extrabold font-roboto text-gray-800 mb-6 text-center">Explore Ads by Location</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* City 1 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/268px-Jinnah_Mausoleum_%28cropped%29.JPG"
            alt="Karachi"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Karachi
          </div>
        </div>

        {/* City 2 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Badshahi_Mosque%2C_Lahore_I.jpg/1200px-Badshahi_Mosque%2C_Lahore_I.jpg"
            alt="Lahore"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Lahore
          </div>
        </div>

        {/* City 3 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpmvtnKkImreD40kPG6deOpnXzKEFtyC1lg&s"
            alt="Islamabad"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Islamabad
          </div>
        </div>

        {/* City 4 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uZMCi4ct1R-SFh17fqlL6EHxwjsdBZPVzA&s"
            alt="Faisalabad"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Faisalabad
          </div>
        </div>

        {/* City 5 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Charminar_sumeet_photography_3.JPG"
            alt="Hyderabad"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Hyderabad
          </div>
        </div>

        {/* City 6 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2b/10/72/khyber-gate.jpg?w=500&h=400&s=1"
            alt="Peshawar"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Peshawar
          </div>
        </div>

        {/* City 7 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn40IdIBSi1t-4vTzITu1RNtbNu1qcq9Zog&s"
            alt="Quetta"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Quetta
          </div>
        </div>

        {/* City 8 - Rawalpindi */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vFQpVNVuGo3FEsMWOENc9uACxlb5uM5rBA&s"
            alt="Rawalpindi"
            className="object-cover w-full h-full brightness-75 transition duration-300 hover:brightness-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg py-2 bg-black bg-opacity-60 transition duration-300 hover:bg-blue-500 hover:text-white">
            Rawalpindi
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsByLocation;
