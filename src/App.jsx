import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import { useState } from 'react';// Make sure the path is correct

const App = () => {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  const handleCheckboxChange = () => {
    setIsAdvancedSearch(!isAdvancedSearch);
  };
  return (
    <div>
      <Header onAdvancedSearchToggle={handleCheckboxChange}/> {/* Header ko yahan include karein */}
      <main className="p-4">
        <Outlet /> {/* Ye component yahan render hoga */}
      </main>
      <Footer/>
    </div>
  );
};

export default App;
