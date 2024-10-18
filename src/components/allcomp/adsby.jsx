import React from 'react';

const AdsByLocation = () => {
  return (
    <div className="max-w-[1230px] mx-auto p-4 my-8">
      <h2 className="text-2xl font-bold mb-4">Ads by Location</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* City 1 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/268px-Jinnah_Mausoleum_%28cropped%29.JPG"
            alt="Karachi"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Karachi</div>
        </div>

        {/* City 2 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Badshahi_Mosque%2C_Lahore_I.jpg/1200px-Badshahi_Mosque%2C_Lahore_I.jpg"
            alt="Lahore"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Lahore</div>
        </div>

        {/* City 3 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpmvtnKkImreD40kPG6deOpnXzKEFtyC1lg&s"
            alt="Islamabad"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Islamabad</div>
        </div>

        {/* City 4 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uZMCi4ct1R-SFh17fqlL6EHxwjsdBZPVzA&s"
            alt="Faisalabad"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Faisalabad</div>
        </div>

        {/* City 5 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Charminar_sumeet_photography_3.JPG"
            alt="Hyderabad"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Hyderabad</div>
        </div>
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2b/10/72/khyber-gate.jpg?w=500&h=400&s=1"
            alt="Peshawar"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Peshawar</div>
        </div>

        {/* City 7 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn40IdIBSi1t-4vTzITu1RNtbNu1qcq9Zog&s"
            alt="Quetta"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Quetta</div>
        </div>

        {/* City 8 */}
        <div className="relative h-40 border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbetvobYxM_aHhu65e0UXgkZusgOkvRx55A&s"
            alt="Gilgit"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Gilgit</div>
        </div>
      </div>
    </div>
  );
};

export default AdsByLocation;
