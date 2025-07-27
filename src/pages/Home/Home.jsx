import React from 'react';
import Banner from './Banner';
import AboutBuilding from './AboutBuilding';
import ApartmentLocation from './BuildingLocation';
import CouponSection from './Coupons';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutBuilding></AboutBuilding>
      <CouponSection></CouponSection>
      <ApartmentLocation></ApartmentLocation>
    </div>
  );
};

export default Home;