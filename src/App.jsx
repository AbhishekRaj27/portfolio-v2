import Navbar from "./components/Navbar";
import Hero from "./screens/Hero";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contacts from "./screens/Contact";
import Footer from "./screens/Footer";
import { Routes, Route } from "react-router-dom";
import ProjectArchive from "./screens/ProjectArchive";
// import ReactGA from "react-ga4";

function App() {
    return (
        <div className="bg-bgDark">
            <Routes>
                <Route
                    path=""
                    element={
                        <main>
                            <Navbar />
                            <Hero />
                            <About />
                            <Projects />
                            <Contacts />
                            <Footer />
                        </main>
                    }
                />
                <Route path="project-archive" element={<ProjectArchive />} />
            </Routes>
        </div>
    );
}

export default App;
