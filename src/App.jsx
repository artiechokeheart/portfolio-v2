import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { AboutMe } from "./Components/AboutMe";
import { Links } from "./Components/Links";
import { SkillTree } from "./Components/SkillTree";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="container">
      <header>
        <Header />
      </header>
      <main>
        <AboutMe />
        <Links />
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
