import { useInView } from "react-intersection-observer";

function AboutMe() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            <div className="p-4 md:flex md:justify-between md:p-0">
                <h2
                    className={`text-xl font-semibold uppercase text-accentDark transition-all  duration-200 ease-out md:text-center md:text-2xl ${
                        inView
                            ? "opacity-1 translate-x-0"
                            : "-translate-x-[100%] opacity-0"
                    }`}
                >
                    About
                </h2>

                <div
                    className={`py-3 transition-all duration-1000 ease-out  md:px-32 md:py-0 ${
                        inView
                            ? "opacity-1 translate-y-0"
                            : "translate-y-[15%] opacity-0"
                    }`}
                >
                    <p className="md:text-xl">
                        As a diligent Software Engineer with a BTech degree from
                        NSUT Delhi, I am deeply motivated and equipped with a
                        formidable skill set. I am dedicated to leveraging my
                        expertise to propel the mission of any organization I
                        join. My objective is to engineer applications that
                        excel in both scalability and efficiency, while
                        providing users with pixel-perfect and engaging
                        experiences.
                    </p>

                    <br />

                    <p className="md:text-xl">
                        When I&#39;m not working, I like to explore new places,
                        relax by watching films, and whip up delicious meals for
                        my loved ones.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
