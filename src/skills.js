import { forwardRef } from "react";
import gitIcon from "./images/git.png";
import bootstrap from "./images/bootstrap.png";
import tailwind from "./images/tailwing.svg";
import express from "./images/express.png";
import mongodb from "./images/mongodb.png";
import sql from "./images/sql.png";

const Skills = forwardRef((props, ref) => {
    return (
        <>
            <section ref={ref} id="skill" className="min-h-screen py-16 bg-primary text-white">
                <h1 className="text-3xl font-medium py-8 text-center">Skills</h1>
                <div className="grid grid-cols-3">
                    <div className="px-20">
                        <h1 className="text-xl font-medium text-center pb-5">Frontend Skills</h1>
                        <div>
                            <i className="fa-brands fa-html5 text-red-600 text-2xl px-3"></i>
                            <b>HTML</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[90%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <i className="fa-brands fa-css3 text-blue-600 text-xl px-3"></i>
                            <b>CSS</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[80%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <i className="fa-brands fa-js text-yellow-500 text-2xl px-3"></i>
                            <b>JS</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[85%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <img src={gitIcon} alt="git" className="h-8 inline px-3 pb-2"/>
                            <b>Git</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[85%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <i className="fa-brands fa-react text-cyan-500 text-2xl px-3"></i>
                            <b>React.js</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[70%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <img src={bootstrap} alt="git" className="h-7 inline px-3 pb-2"/>
                            <b>Bootstrap</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[80%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <img src={tailwind} alt="git" className="h-6 inline px-3 pb-2"/>
                            <b className="py-4">Tailwind</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[60%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="px-20">
                        <h1 className="text-xl font-medium text-center pb-5">Backend Skills</h1>
                        
                        <div className="">
                            <i className="fa-brands fa-node-js text-green-600 text-2xl px-3"></i>
                            <b>Node.js</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[85%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <i className="fa-brands fa-php text-purple-600 text-xl px-3"></i>
                            <b className="py-4">PHP</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[60%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <img src={express} alt="git" className="h-8 inline px-3 pb-2"/>
                            <b>Express.js</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[80%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <img src={mongodb} alt="git" className="h-8 inline px-3 pb-2"/>
                            <b>MongoDB</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[65%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <img src={sql} alt="git" className="h-8 inline px-3 pb-2"/>
                            <b>MySQL</b>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[70%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
});

export default Skills;