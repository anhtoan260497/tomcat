import React, { lazy } from "react";
import Header from "../components/Header";
import './App.scss'
import Aos from "aos";
import 'aos/dist/aos.css';

const TopPage = lazy(() => import("../components/TopPage"))
const MiddleDescription = lazy(() => import("../components/MiddleDescription"));
const WhyChoose = lazy(() => import("../components/WhyChoose"));
const Tokenomics = lazy(() => import("../components/Tokenomics"));
const Phase = lazy(() => import("../components/Phase"));
const Partner = lazy(() => import("../components/Partners/Partner"));
const Footer = lazy(() => import("../components/Footer"));


const App = () => {
  Aos.init({
    once : true
  })

  return (
    <div>
      <Header />
      <div className="clear"></div>
      <TopPage  />
      <MiddleDescription />
      <WhyChoose />
      <Tokenomics />
      <Phase />
      <Partner />
      <Footer />
    </div>
  )
}

export default App