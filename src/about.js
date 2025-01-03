import { forwardRef, useEffect } from "react";

import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import git from "./images/git.png";
import node from "./images/node.png";
import express from "./images/express.png";
import mongodb from "./images/mongodb.png";
import bootstrap from "./images/bootstrap.png";
import tailwind from "./images/tailwing.svg";
import sql from "./images/sql.png";
import php from "./images/php.svg";
import wordpress from "./images/wordpress.png"

const About = forwardRef((props, ref) => {
    useEffect(()=>{
        const hover = document.getElementsByClassName('bg-gradient-to-tr');
        for (let i=0; i<13; i++){
            const el = hover[i];
            el.addEventListener('mouseenter', ()=>{
                el.children[1].classList.remove('invisible');
            });
            el.addEventListener('mouseleave', ()=>{
                el.children[1].classList.add('invisible');
            });
        };
    },[]);
    
    return (
        <>
            <section ref={ref} id="about" className="min-h-screen bg-primary text-white grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 items-center justify-items-center">
                <div className="p-4 sm:p-16 pb-6 md:pb-16 text-md xl:text-lg md:order-2 md:col-span-3 lg:col-span-1">
                    <h1 className="mt-10 md:mt-0 text-3xl font-medium pb-8">About <span className="text-cyan-500">Me</span></h1>
                    <p className=" animate__animated wait-fadeIn-about animate__slower">Hi, I’m Muhammad, a full-stack developer focused on building intuitive, responsive web apps. I specialize in React for dynamic UIs and use Node.js and Express for scalable back-end systems. I’m also experienced with PHP, and work with both MySQL and MongoDB, selecting the right tool for each project. I’m passionate about creating solutions that solve real-world problems and improve user experiences. Whether designing with Tailwind CSS for custom layouts or using Bootstrap for quick, responsive designs, my goal is to create user-friendly applications.
                        Beyond coding, I’m fascinated by physics and mathematics—fields that challenge my problem-solving skills and inspire my work in development
                        If you’re looking for someone who loves to solve complex problems, I’d love to collaborate on your next project!</p>
                </div>
                <div className="sm:w-[50%] md:ps-10 md:w-full lg:w-auto grid grid-cols-3 gap-10 lg:gap-16 items-center  md:col-span-2  lg:col-span-1 md:order-1">
                    <div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower html">
                            <img className="h-full w-full px-[25%] py-2 bg-primary" src={html} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>HTML</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower css">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={css} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>CSS</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower js">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={js} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>JavaScript</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower bootstrap">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={bootstrap} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>Bootstrap</b></div>
                        </div>
                    </div>
                    <div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600  my-6 glow animate__animated wait-fadeIn-about animate__slower tailwind">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={tailwind} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>Tailwind CSS</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower react">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={react} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>React.js</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower git">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={git} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>Git</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower express">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={express} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>Express.JS</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower wordpress">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={wordpress} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>Wordpress</b></div>
                        </div>
                    </div>
                    <div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600  my-6 glow animate__animated wait-fadeIn-about animate__slower node">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={node} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>Node.JS</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower php">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={php} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>PHP</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower mongodb">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={mongodb} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>MongoDB</b></div>
                        </div>
                        <div className="relative h-[50px] lg:h-[70px] w-[100%] p-[2px] rounded bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 my-6 glow animate__animated wait-fadeIn-about animate__slower sql">
                            <img className="h-full  w-full px-[25%] py-2 bg-primary" src={sql} />
                            <div className="text-white absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-cyan-400 to-transparent flex items-end justify-center rounded invisible"><b>MySQL</b></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default About;