import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/Footer';// Make sure the path is correct

const App = () => {
  return (
    <div>
      <Header /> {/* Header ko yahan include karein */}
      <main className="p-4">
        <Outlet /> {/* Ye component yahan render hoga */}
      </main>
      <Footer/>
    </div>
  );
};

export default App;
