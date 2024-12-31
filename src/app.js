import { useRef, useState, useEffect } from "react";
import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Skills from "./skills";

const App = () => {

    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const skillRef = useRef(null);

    const [active, setActive] = useState('hero');

    const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'skill', ref: skillRef }
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 1.5;

        sections.forEach(({ id, ref }) => {
            if (ref.current) {
                const sectionTop = ref.current.offsetTop;
                const sectionHeight = ref.current.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                    setActive(id);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header active={active} />
            <Hero ref={heroRef} />
            <About ref={aboutRef} />
            <Skills ref={skillRef} />
        </>
    );
};

export default App;