import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 pt-16 text-textDark lg:px-16">
      <AboutMe />
      <Skills />
      <Experience />
    </section>
  );
}

export default About;
