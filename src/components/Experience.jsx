import { experience } from "../assets/experience";
import { useInView } from "react-intersection-observer";
import Pill from "./ui/Pill";

function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="mt-16 p-4 md:flex md:justify-between md:p-0">
        <h2
          className={`text-xl font-semibold uppercase text-accentDark transition-all  duration-200 ease-out md:text-center md:text-2xl ${
            inView ? "opacity-1 translate-x-0" : "-translate-x-[100%] opacity-0"
          }`}>
          Experience
        </h2>

        <div>
          <div className="relative py-4  before:bg-[#d3d3d3] md:col-span-8 md:mx-20 md:space-y-8 md:px-4 md:py-0 md:before:absolute md:before:-left-3 md:before:bottom-0 md:before:top-2 md:before:w-0.5">
            {experience.map((item, id) => {
              return (
                <div
                  key={id}
                  className={`mb-10 flex flex-col transition-all  duration-[1000ms] ease-out  before:bg-accentDark last:mb-0 md:relative md:my-0 md:duration-1000 md:before:absolute md:before:left-[-35px] md:before:top-2 md:before:z-[1] md:before:h-4  md:before:w-4 md:before:rounded-full ${
                    inView
                      ? "opacity-1 translate-y-0"
                      : "translate-y-[10%] opacity-0"
                  } `}>
                  <h3 className="text-xl font-semibold tracking-wide md:text-2xl md:font-bold">
                    {item.designation}
                  </h3>
                  <h4 className="py-0.5 text-lg font-semibold tracking-wide md:text-xl">
                    {item.company}
                  </h4>
                  <time className="py-1 text-xs uppercase tracking-wide md:text-sm">
                    {item.from} - {item.to}
                  </time>
                  <p className="mt-2">{item.description}</p>

                  <div className="my-3 flex flex-wrap">
                    {item.tags.map((tag, id) => {
                      return <Pill key={id}>{tag}</Pill>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="my-4 inline-block md:mx-12 md:my-10 md:px-4">
            <a
              href="#"
              target="_blank"
              aria-label="view my resume"
              className="group flex items-center ">
              <span className="bg-gradient-to-r from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                View my Résumé&nbsp;
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-1 h-4 w-4 transition-all duration-500 ease-out group-hover:translate-y-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
