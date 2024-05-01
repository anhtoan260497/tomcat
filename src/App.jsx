import React from "react";
import Header from "../components/Header";
import './App.scss'
import TopPage from "../components/TopPage";
import MiddleDescription from "../components/MiddleDescription";
import WhyChoose from "../components/WhyChoose";
import Tokenomics from "../components/Tokenomics";
import Phase from "../components/Phase";
import Partner from "../components/Partners/Partner";
import Footer from "../components/Footer";


const App = () => {

  return (
    <div>
      <Header />
      <div className="clear"></div>
      <TopPage />
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