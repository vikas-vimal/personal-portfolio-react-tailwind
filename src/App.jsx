import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from "./components/skills/TechnicalSkills";
import WorkExperience from "./components/experience/WorkExperience";
import Achievements from "./components/achievements/Achievements";
import ProgrammingLanguages from "./components/programming/ProgrammingLanguages";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-blue-100">
      <HeroSection />
      <div className="container flex gap-10 py-24">
        <div className="w-8/12 flex-grow px-4">
          <AboutMe />
          <WorkExperience className="mt-16" />
          <Education className="mt-16" />
          <Projects className="mt-16" />
        </div>
        <div className="w-4/12">
          <ProgrammingLanguages />
          <TechnicalSkills className="mt-20" />
          <Achievements className="mt-20" />
        </div>
      </div>
    </div>
  );
}

export default App;
