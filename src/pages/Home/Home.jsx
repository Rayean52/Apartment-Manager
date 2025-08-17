import React from 'react';
import Banner from './Banner';
import AboutBuilding from './AboutBuilding';
import ApartmentLocation from './BuildingLocation';
import CouponSection from './Coupons';
import Newsletter from './NewsLetter';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ApartmentLocation></ApartmentLocation>
      <AboutBuilding></AboutBuilding>
      <CouponSection></CouponSection>
      <Services></Services>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;