import React from 'react';
import Banner from './Banner';
import AboutBuilding from './AboutBuilding';
import ApartmentLocation from './BuildingLocation';

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <AboutBuilding></AboutBuilding>
      <ApartmentLocation></ApartmentLocation>
    </div>
  );
};

export default Home;