import './App.css';
import AboutMe from "./components/about-me/AboutMe";
import BrowserRouter from 'react-router-dom/BrowserRouter'

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AboutMe/>
      </BrowserRouter>

  );
}

export default App;
