import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { AboutMe } from "./Components/AboutMe";
import { SkillTree } from "./Components/SkillTree";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="main-container">
        <AboutMe />
        <SkillTree />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
