
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ContainerLayout } from "./Components/layout/ContainerLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { SkillsAndKnowleges } from "./pages/SkillsAndKnowleges";
import { Contact } from "./pages/Contact";
import { PageNotFoundView } from "./pages/PageNotFoundView";
import './App.css';
function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<ContainerLayout  />}>
          <Route path="" element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skillsandKnowleges" element={<SkillsAndKnowleges  />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFoundView />} />
        </Route>
      </Routes>
    </div>
  );
}






export default App;