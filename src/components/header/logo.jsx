import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
            {/* Logo Icon */}
            <div className="bg-blue-500 rounded-full md:h-16 h-14 md:w-16 w-14 flex items-center justify-center">
                <span className="text-white md:text-2xl text-xl font-bold">AD</span>
            </div>
            {/* Logo Text */}
            <div>
                <h1 className="md:text-2xl text-xl font-bold text-blue-600">Azad Deals</h1>
                <p className="text-sm text-gray-500">Freedom in Every Deal</p>
            </div>
        </div>
  )
}

export default Logo