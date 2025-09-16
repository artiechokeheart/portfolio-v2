import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { AboutMe } from "./Components/AboutMe";
import { SkillTree } from "./Components/SkillTree";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

function App() {
  return (

    <div className="app">
      <header className="site-header">
        <Header />
      </header>

      <main className="main-container">
        <AboutMe />
        <SkillTree />
        <Projects />
      </main>

      <footer className="site-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
