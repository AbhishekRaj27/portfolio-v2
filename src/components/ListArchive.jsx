import { projectsArchive } from "../assets/projectsArchive";
import { useInView } from "react-intersection-observer";
import Pill from "./ui/Pill";
import CustomLink from "./ui/CustomLink";
import { ExternalLink, GitHub } from "../assets/svg";

function ListArchive() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <div
        className={`transition-all duration-1000 ease-out md:duration-500 ${
          inView ? "opacity-1 " : "opacity-0"
        }`}>
        <table className="my-5 w-full text-left md:my-10">
          <thead className="uppercase">
            <tr>
              <th scope="col" className="py-3">
                Title
              </th>
              <th scope="col" className="hidden px-20 py-3 md:inline-block">
                Date
              </th>
              <th scope="col" className="hidden px-10 py-3 md:inline-block">
                Tags
              </th>
              <th scope="col" className="py-3">
                Links
              </th>
            </tr>
          </thead>
          <tbody>
            {projectsArchive.map((item, id) => {
              return (
                <tr key={id} className=" border-b  border-[#d3d3d3]/20">
                  <td className="whitespace-nowrap py-4 font-medium">
                    {item.title}
                  </td>
                  <td className="hidden px-20 py-4 opacity-70  md:inline-block">
                    {item.date}
                  </td>
                  <td className="hidden px-1 py-4  md:inline-block">
                    <div className="flex flex-wrap">
                      {item.tags.map((tag, id) => {
                        return <Pill key={id}>{tag}</Pill>;
                      })}
                    </div>
                  </td>
                  <td className="px-1 py-4">
                    <div className="flex items-center justify-start">
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListArchive;
