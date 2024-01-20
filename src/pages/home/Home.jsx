import React from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
//import SwitchTabs from '../../components/switchTabs/SwitchTabs';


const Home = () => {
  return (
    <div className="homePage" >
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <SwitchTabs/> */}
    </div>
  );
};

export default Home;
