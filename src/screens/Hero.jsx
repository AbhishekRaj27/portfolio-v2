import { useInView } from "react-intersection-observer";

function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    return (
        <section ref={ref}>
            <div className="container mx-auto h-screen px-8 py-56  text-textDark  md:py-64">
                <h1 className="text-3xl lg:text-5xl">
                    Hey! <span className="inline-block animate-wave">👋</span>
                </h1>

                <h2 className="mt-8 text-4xl md:text-7xl lg:text-8xl">
                    I&#39;m{" "}
                    <span
                        className={`font-bold text-accentDark transition-all duration-500 ease-out ${
                            inView ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        Abhishek Raj
                    </span>
                </h2>
                <div
                    className={`transition-all duration-1000 ease-out ${
                        inView
                            ? "opacity-1 translate-y-0"
                            : "translate-y-[50%] opacity-0"
                    }`}
                >
                    <p className="mt-3 py-3 text-xl md:text-3xl">
                        I&#39;m a software engineer with a strong focus on
                        functionality and attention to detail who is passionate
                        about creating beautiful code that complements beautiful
                        design🧑‍💻
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
