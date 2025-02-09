import { useRef, useState, useEffect } from "react";
import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";

const App = () => {

    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const skillRef = useRef(null);
    const contactRef = useRef(null);

    const [active, setActive] = useState('hero');

    const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'skill', ref: skillRef },
        { id: 'contact', ref: contactRef }
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(({ id, ref }) => {
            if (ref.current) {
                const sectionTop = ref.current.offsetTop;
                const sectionHeight = ref.current.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                    setActive(id);
                    
                    const waitingProgressEl = document.getElementsByClassName(`wait-progress-${id}`);
                        for(let i=0; i<waitingProgressEl.length; i++){
                            waitingProgressEl[i].classList.add('progress');
                    };
                
                    const waitingRingEl = document.getElementsByClassName(`wait-ring`);
                        for(let i=0; i<waitingRingEl.length; i++){
                            waitingRingEl[i].classList.add('ring-progress-anim');
                    };
                }
                else {
                    const waitingProgressEl = document.getElementsByClassName(`wait-progress-${id}`);
                        for(let i=0; i<waitingProgressEl.length; i++){
                            waitingProgressEl[i].classList.remove('progress');
                    };
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
            <Contact ref={contactRef} />
        </>
    );
};

export default App;