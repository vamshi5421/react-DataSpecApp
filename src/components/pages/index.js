import React, { useState } from "react";

import SideBar from "../SideBar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import Services from "../Services";
import { homeObjOne, homeObjThree, homeObjTwo } from "../InfoSection/Data";
import Footer from "../Footer";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services></Services>
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
