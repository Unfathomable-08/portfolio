import { forwardRef, useState, useEffect } from "react";
import image1 from "./images/avatar2.jpg";
import cv from "./images/myResume.pdf";

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
            <div ref={ref} id="home" className="hero bg-primary text-white min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
                <div className="text-center pt-24 md:pt-0">
                    <h1 className="text-3xl py-2 animate__animated animate__slideInLeft animate__slow">Hi, I'm <span className="text-cyan-500 font-medium">Muhammad,</span></h1>
                    <h1 className="text-3xl py-2 animate__animated animate__slideInRight animate__slow">A Full-Stack Web Developer</h1>
                    <h4 className="py-3">Building Powerful Websites with Purpose and Precision</h4>
                    <a href={cv} download="resume.pdf" className={`hero-btn mx-2 my-5 px-3 py-1.5 border-2 border-cyan-600 rounded-3xl bg-cyan-600 ${animationClass}`}>Download Resume</a>
                    <a href="#contact" className={`hero-btn mx-2 my-5 px-3 py-1.5 border-2 border-cyan-600 rounded-3xl hover:bg-cyan-600 ${animationClass}`}>Contact Me</a>
                </div>
                <div className="image flex justify-center align-center pb-24 md:pb-0">
                    <img className="rounded-full w-[50%] sm:w-[65%] md:w-[80%] aspect-square border-4 border-cyan-500" src={image1}/>
                </div>
            </div>
        </>
    );
});

export default Hero;