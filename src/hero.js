import { forwardRef, useState, useEffect } from "react";
import image1 from "./images/avatar2.jpg";

const Hero = forwardRef((props, ref) => {
    const [animationClass, setClass] = useState("invisible");

  useEffect(() => {
    const timer = setTimeout(() => {
      setClass("animate__animated animate__fadeInUp animate__slow");
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

    return (
        <>
            <div ref={ref} id="home" className="hero bg-primary text-white min-h-screen grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center">
                <div className="text-center py-16 sm:pt-0">
                    <h1 className="text-3xl py-2 animate__animated animate__slideInLeft animate__slow">Hi, I'm <span className="text-cyan-500 font-medium">Muhammad,</span></h1>
                    <h1 className="text-3xl py-2 animate__animated animate__slideInRight animate__slow">A Full-Stack Web Developer</h1>
                    <h4 className="py-3">Building Powerful Websites with Purpose and Precision</h4>
                    <button className={`hero-btn mx-2 my-5 px-3 py-1.5 border-2 border-cyan-600 rounded-3xl bg-cyan-600 ${animationClass}`}>Download Resume</button>
                    <button className={`hero-btn mx-2 my-5 px-3 py-1.5 border-2 border-cyan-600 rounded-3xl hover:bg-cyan-600 ${animationClass}`}>Contact Me</button>
                </div>
                <div className="image">
                    <img className="rounded-full h-[50vh] aspect-square border-4 border-cyan-500" src={image1}/>
                </div>
            </div>
        </>
    );
});

export default Hero;