import React from "react";
import Article from "./Artical/Article";
import Team from "./Team/index";
import Projects from "./Projects/index";
import JoinUs from "./JoinUs/index";
import WhyWeAre from "./WhyWeAre/index";
import ClientReview from "./ClientReview/index";
import Contact from "./Contact/index";
import Feedback from "./FeedBack/index";
import Footer from './Footer/index'

const index = () => {
  return (
    <div>
      <Article />
      <Team />
      <Projects />
      <JoinUs />
      <WhyWeAre />
      <ClientReview />
      <Contact />
      <Feedback />
      <Footer/>
    </div>
  );
};

export default index;
