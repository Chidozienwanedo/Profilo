import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import SectionTitle from './Components/SectionTitle';
import SkillCard from './Components/SkillCard';
import About from './Components/About';
import Projects from './Components/Projects';
import ProjectsCard from './Components/ProjectsCard';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <SkillCard />
      <SectionTitle />
      <About />
      <Projects />
      <ProjectsCard />
    </>
  );
};

export default App;
