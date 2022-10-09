import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const styles = {
  page: {
    position: "relative",
    "min-height": "100vh",

    background: "#1f141c",
  },
  content: {
    "padding-bottom": "2.5vh",
  },
  footer: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "2.5vh" /* Footer height */,
  },
};

export default function App() {
  return (
    <div style={styles.page}>
      <Navigation />
      <div style={styles.content}>
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
