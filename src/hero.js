import { forwardRef, useEffect } from "react";
import image1 from "./images/avatar2.jpg";
import cv from "./images/myResume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <div
      ref={ref}
      id="home"
      className="hero bg-primary text-white min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center"
    >
      {/* Text Section */}
      <div className="text-center pt-24 md:pt-0">
        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="text-3xl py-2"
        >
          Hi, I'm <span className="text-cyan-500 font-medium">Muhammad,</span>
        </h1>
        <h1
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="text-3xl py-2"
        >
          A Full-Stack Web Developer
        </h1>
        <h4 className="py-3 pb-10">Building Powerful Websites with Purpose and Precision</h4>

        <a
          href={cv}
          download="resume.pdf"
          data-aos="fade-up"
          data-aos-duration="2500"
          className="hero-btn mx-2 px-3 py-1.5 border-2 border-cyan-600 rounded-3xl bg-cyan-600 hover-shadow"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          data-aos="fade-up"
          data-aos-duration="2500"
          className="hero-btn mx-2 px-3 py-1.5 border-2 border-cyan-600 rounded-3xl hover:bg-cyan-600 hover-shadow"
        >
          Contact Me
        </a>
      </div>

      {/* Image Section */}
      <div
        className="image flex justify-center align-center pb-24 md:pb-0"
        data-aos="flip-right"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        <img
          className="rounded-full w-[50%] sm:w-[65%] md:w-[80%] aspect-square border-4 border-cyan-500"
          src={image1}
          alt=""
        />
      </div>
    </div>
  );
});

export default Hero;