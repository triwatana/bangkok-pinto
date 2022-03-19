import React from "react";

import { AboutUs, Footer, Gallery, Header, Intro } from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;
