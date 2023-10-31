import "./App.css";
import Layout from './components/layout/Layout.js'
import 'remixicon/fonts/remixicon.css'
import Home from "./screens/home/Home.js";
import AboutMe from "./screens/aboutMe/AboutMe.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./screens/projects/Projects.js";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        rel="stylesheet"
      />

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
