import { useInView } from "react-intersection-observer";
import ListProjects from "../components/ListProjects";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <section ref={ref}>
      <div
        id="projects"
        className="container mx-auto px-4 pt-16  text-textDark lg:px-16">
        <div className="p-4 md:flex md:justify-between md:p-0">
          <h2
            className={`text-xl font-semibold uppercase text-accentDark transition-all  duration-200 ease-out md:text-center md:text-2xl ${
              inView
                ? "opacity-1 translate-x-0"
                : "-translate-x-[100%] opacity-0"
            }`}>
            Projects
          </h2>
          <ListProjects />
        </div>
      </div>
    </section>
  );
}

export default Projects;
