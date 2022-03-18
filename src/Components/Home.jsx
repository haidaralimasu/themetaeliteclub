import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Timer from "./Timer";
import SecondSection from "./SecondSection";
import Projects from "./Projects";
import CardSection from "./CardSection";
import Benefits from "./Benefits";
import Team from "./Team";
import Faq from "./Faq";
import Roadmap from "./Roadmap";
import TopSection from "./TopSection";

export default function Home() {
  document.onkeydown = function (e) {
    // disable F12 key
    if (e.keyCode == 123) {
      return false;
    }
  };

  return (
    <>
      <Header style={{ marginBottom: "600px" }} />
      <TopSection />
      <Hero />
      <Timer style={{ display: "none" }} />
      <Projects />
      <SecondSection />
      <CardSection />
      <Roadmap />

      {/* <Benefits /> */}
      <Team />
      <Faq />
      <Footer />
    </>
  );
}
