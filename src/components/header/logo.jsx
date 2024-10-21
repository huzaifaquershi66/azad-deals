import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
        {/* Logo Icon with 3D effect, neon glow, and hover transformation */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full md:h-16 h-14 md:w-16 w-14 flex items-center justify-center shadow-xl transform hover:scale-110 hover:shadow-[0_0_20px_10px_rgba(59,130,246,0.8)] transition-all duration-300 ease-in-out">
            <span className="text-white md:text-2xl text-xl font-bold">AD</span>
        </div>
        {/* Logo Text with 3D effect, animated shine, and gradient */}
        <div>
            <h1 className="md:text-3xl text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 relative tracking-wide">
                Azad Deals
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out transform hover:translate-x-full"></span>
            </h1>
            <p className="text-md text-gray-600 font-light italic">Freedom in Every Deal</p>
        </div>
    </div>
  )
}

export default Logo
