import { projects } from "../assets/projects";
import Pill from "./ui/Pill";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ExternalLink, GitHub } from "../assets/svg";
import CustomLink from "./ui/CustomLink";

function ListProjects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div ref={ref}>
      {projects.map((item, id) => {
        return (
          <div
            key={id}
            className={`my-4 flex flex-col items-center rounded-lg border  border-[#d3d3d3]/10 shadow transition-all duration-[1000ms] ease-out md:mx-20  md:mt-0 md:flex-row ${
              inView ? "opacity-1 translate-y-0" : "translate-y-[10%] opacity-0"
            }`}>
            <div>
              <img
                height="800px"
                width="800px"
                className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
                src={item.imgSrc}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl md:font-bold">
                {item.title}
              </h2>
              <time className="py-0.5 text-xs uppercase tracking-wide md:text-sm">
                {item.from} - {item.to}
              </time>
              <div className="my-1 flex flex-wrap">
                {item.tags.map((tag, id) => {
                  return <Pill key={id}>{tag}</Pill>;
                })}
              </div>
              <p className="my-2">{item.description}</p>

              <div className="flex">
                {item.linklink && (
                  <CustomLink
                    href={item.linklink}
                    aria-label="live link"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all duration-100 ease-linear  hover:text-accentDark">
                    <ExternalLink />
                  </CustomLink>
                )}

                {item.githubLink && (
                  <CustomLink
                    href={item.githubLink}
                    aria-label="github link"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all duration-100 ease-linear  hover:text-accentDark">
                    <GitHub />
                  </CustomLink>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <p className="inline-block ">
        <Link
          to="project-archive"
          className="group mx-2 my-12 flex items-center md:mx-20">
          <span className="bg-gradient-to-r  from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
            View Full Project Archive&nbsp;
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 transition-all duration-500 ease-out group-hover:translate-x-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </p>
    </div>
  );
}

export default ListProjects;
