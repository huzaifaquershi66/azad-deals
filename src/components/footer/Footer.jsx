import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
  <div className="max-w-[1230px] mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <h1 className="text-3xl font-bold mb-4 md:mb-0">Azad Deals</h1>
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="email"
          placeholder="Subscribe to our newsletter"
          className="p-2 rounded-l-md border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200">
          Subscribe
        </button>
      </div>
    </div>

    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Marketplace Categories:</h2>
      <ul className="flex flex-wrap">
        <li className="mr-6 mb-2 hover:text-blue-400 transition duration-200">Cars</li>
        <li className="mr-6 mb-2 hover:text-blue-400 transition duration-200">Mobiles</li>
        <li className="mr-6 mb-2 hover:text-blue-400 transition duration-200">Academics</li>
        <li className="mr-6 mb-2 hover:text-blue-400 transition duration-200">Property</li>
      </ul>
    </div>

    {/* Contact Information */}
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Contact Us:</h2>
      <p className="text-sm">Dumya, XYZ Street, Karachi</p>
      <p className="text-sm">Phone: +92 123 456 7890</p>
      <p className="text-sm">Email: info@azaddeals.com</p>
    </div>

    <div className="mt-8 text-center border-t border-gray-600 pt-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} Azad Deals. All rights reserved.</p>
    </div>
  </div>
</footer>



  )
}

export default Footer