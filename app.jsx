import React from "react";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {
  return (
    <main>
      <Header/>
      <Hero />
      <Project />
      <Certificates/>
      <Contact />
    </main>
  )
}

export default App;
