import './App.css';
import AboutMe from "./components/about-me/AboutMe";
import Skills from "./components/skills/Skills";
import {BrowserRouter} from "react-router-dom";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar/>
          <AboutMe/>
          <Education/>
          <Skills/>
          <Experience/>
      </BrowserRouter>

  );
}

export default App;
