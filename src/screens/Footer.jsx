import { GitHub, Instagram, LinkedIn, Twitter } from "../assets/svg";

function Footer() {
    return (
        <footer className=" mx-auto  w-full bg-bgDark p-4 py-6 text-textDark lg:px-64">
            <hr className="my-6 hidden  border-[#d3d3d3] sm:mx-auto md:block lg:my-8" />
            <div className="md:flex md:flex-row-reverse md:items-center md:justify-between">
                <Socials />
                <p className="text-center text-sm opacity-80 md:text-start md:text-lg">
                    Designed & built by Abhishek Raj 🦁
                </p>
            </div>
        </footer>
    );
}

const Socials = () => {
    return (
        <div className="flex items-center justify-center ">
            <a
                aria-label="instagram"
                href="https://www.instagram.com/abhishek.raj06/"
                target="_blank"
                rel="noreferrer"
                className="mx-3 my-10 transition-all duration-100 ease-linear  hover:text-accentDark md:my-0"
            >
                <Instagram />
            </a>
            <a
                aria-label="twitter"
                href="https://twitter.com/ABHISHE26491750"
                target="_blank"
                rel="noreferrer"
                className="mx-3  my-10 transition-all duration-100 ease-linear  hover:text-accentDark md:my-0"
            >
                <Twitter />
            </a>
            <a
                aria-label="github"
                href="https://github.com/AbhishekRaj27"
                target="_blank"
                rel="noreferrer"
                className="mx-3 my-10 transition-all duration-100 ease-linear  hover:text-accentDark md:my-0"
            >
                <GitHub />
            </a>
            <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/abhishek-raj-52671b1b0/"
                target="_blank"
                rel="noreferrer"
                className="mx-3 my-10 transition-all duration-100 ease-linear hover:text-accentDark md:my-0"
            >
                <LinkedIn />
            </a>
        </div>
    );
};

export default Footer;
