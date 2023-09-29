import { useState, useEffect } from "react";
import CustomLink from "./ui/CustomLink";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset > 20);
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition ease transform duration-300`;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document
        .querySelector('[name="theme-color"]')
        .setAttribute("content", "#12b9e2");
    } else {
      document.body.style.overflow = "visible";
      document
        .querySelector('[name="theme-color"]')
        .setAttribute("content", "#010809");
    }
  }, [open]);

  return (
    <>
      <button
        aria-label="scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-2 right-2 z-[100] text-3xl transition-all duration-500 ease-out md:bottom-5 md:right-5 md:text-5xl ${
          top ? "opacity-1" : "opacity-0"
        }`}>
        ☝️
      </button>

      <nav
        className={`${
          top ? "bg-bgDark" : ""
        } fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ease-out ${
          open ? "h-screen backdrop-blur-xl" : ""
        } `}>
        <div
          className={`flex items-center justify-between p-3  transition-all duration-300 ease-out ${
            open ? "bg-accentDark text-textLight" : "text-textDark"
          }`}>
          <h1 className="font-sans text-3xl font-bold   transition-all duration-300 ease-out">
            nitish.dev
          </h1>

          <button
            aria-label="menu bar"
            className={`flex h-8 w-10 flex-col items-center rounded md:hidden ${
              open ? "justify-top" : "justify-center"
            }`}
            onClick={() => setOpen(!open)}>
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "translate-y-3 -rotate-45 bg-textLight opacity-100"
                  : "bg-textDark opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "translate-y-0 rotate-45 bg-textLight opacity-100"
                  : "bg-textDark opacity-100"
              }`}
            />
          </button>

          <ul
            className={`absolute left-0 z-[-1] w-full pb-12 pl-4 text-4xl font-semibold transition-all duration-300 ease-out md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 md:text-xl ${
              open ? "top-10  bg-accentDark " : "top-[-490px]"
            }`}>
            <li className="mb-5 mt-10 md:m-0">
              <CustomLink
                link="#about"
                className="group mr-5"
                onClick={() => setOpen(false)}>
                About
              </CustomLink>
            </li>

            <li className="mb-5 md:m-0">
              <CustomLink
                link="#projects"
                className="group mr-5"
                onClick={() => setOpen(false)}>
                Projects
              </CustomLink>
            </li>

            <li className="mb-5 md:m-0">
              <CustomLink
                link="#contact"
                className="group mr-5"
                onClick={() => setOpen(false)}>
                Contact
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
