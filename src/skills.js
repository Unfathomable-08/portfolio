import { forwardRef } from "react";
import gitIcon from "./images/git.png";
import bootstrap from "./images/bootstrap.png";
import tailwind from "./images/tailwing.svg";
import express from "./images/express.png";
import mongodb from "./images/mongodb.png";
import sql from "./images/sql.png";
import wordpress from "./images/wordpress.png";

const Skills = forwardRef((props, ref) => {
    return (
        <>
            <section ref={ref} id="skill" className="min-h-screen py-16 bg-primary text-white">
                <h1 className="text-3xl font-medium py-8 text-center">Skills</h1>
                <div className="grid grid-cols-3">
                    <div className="px-20">
                        <h1 className="text-xl font-medium text-center pb-5">Frontend Skills</h1>
                        <div>
                            <span className="flex justify-between">
                                <span>
                                    <i className="fa-brands fa-html5 text-red-600 text-2xl px-3"></i>
                                    <b>HTML</b>
                                </span>
                                <p className="inline text-right pe-1">90%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[90%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="flex justify-between">
                                <span>
                                    <i className="fa-brands fa-css3 text-blue-600 text-xl px-3"></i>
                                    <b>CSS</b>
                                </span>
                                <p className="inline text-right pe-1">80%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[80%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <i className="fa-brands fa-js text-yellow-500 text-2xl px-3"></i>
                                    <b>JS</b>
                                </span>
                                <p className="inline text-right pe-1">85%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[85%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <img src={gitIcon} alt="git" className="h-8 inline px-3 pb-2"/>
                                    <b>Git</b>
                                </span>
                                <p className="inline text-right pe-1">85%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[85%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="flex justify-between">
                                <span>
                                    <i className="fa-brands fa-react text-cyan-500 text-2xl px-3"></i>
                                    <b>React.js</b>
                                </span>
                                <p className="inline text-right pe-1">70%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[70%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <img src={bootstrap} alt="git" className="h-7 inline px-3 pb-2"/>
                                    <b>Bootstrap</b>
                                </span>
                                <p className="inline text-right pe-1">90%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[90%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <img src={tailwind} alt="git" className="h-6 inline px-3 pb-2"/>
                                    <b className="py-4">Tailwind</b>
                                </span>
                                <p className="inline text-right pe-1">80%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[80%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="px-20">
                        <h1 className="text-xl font-medium text-center pb-5">Backend Skills</h1>
                        
                        <div className="">
                        <span className="flex justify-between">
                                <span>
                                    <i className="fa-brands fa-node-js text-green-600 text-2xl px-3"></i>
                                    <b>Node.js</b>
                                </span>
                                <p className="inline text-right pe-1">85%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[85%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <i className="fa-brands fa-php text-purple-600 text-xl px-3"></i>
                                    <b className="py-4">PHP</b>
                                </span>
                                <p className="inline text-right pe-1">60%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[60%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <img src={express} alt="git" className="h-8 inline px-3 pb-2"/>
                                    <b>Express.js</b>
                                </span>
                                <p className="inline text-right pe-1">80%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[80%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="flex justify-between">
                                <span>
                                    <img src={mongodb} alt="git" className="h-8 inline px-3 pb-2"/>
                                    <b>MongoDB</b>
                                </span>
                                <p className="inline text-right pe-1">65%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[65%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <img src={sql} alt="git" className="h-8 inline px-3 pb-2"/>
                                    <b>MySQL</b>
                                </span>
                                <p className="inline text-right pe-1">70%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[70%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <img src={sql} alt="git" className="h-8 inline px-3 pb-2"/>
                                    <b>WebSocket</b>
                                </span>
                                <p className="inline text-right pe-1">65%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[65%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>

                        <div className="mt-6">
                        <span className="flex justify-between">
                                <span>
                                    <img src={wordpress} alt="git" className="h-8 inline px-3 pb-2"/>
                                    <b>Wordpress</b>
                                </span>
                                <p className="inline text-right pe-1">60%</p>
                            </span>
                            <div className="h-2 ">
                                <div className="h-full border bg-black border-cyan-400 rounded"></div>
                                <div className="h-full bg-cyan-400 rounded w-[60%] z-10 -translate-y-2 progress"></div>
                            </div>
                        </div>
                        
                    </div>

                    <div>
                        <h1 className="text-white text-center text-xl font-medium pb-5">Soft Skills</h1>
                        <div className="grid grid-cols-2 w-[60%] mx-[20%] my-8">
                            <div>
                                <svg className="ring-progress transform -rotate-90" width="120px" height="120px">
                                    <circle className="stroke-secondary" cx="60" cy="60" r="50" fill="none" strokeWidth="10"/>
                                    <circle className="stroke-cyan-400" cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeLinecap="round" strokeDasharray="314" strokeDashoffset={314*20/100}/>
                                </svg>
                                <b>Problem-Solving</b>
                            </div>
                            <div>
                                <svg className="ring-progress transform -rotate-90" width="120px" height="120px">
                                    <circle className="stroke-secondary" cx="60" cy="60" r="50" fill="none" strokeWidth="10"/>
                                    <circle className="stroke-cyan-400" cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeLinecap="round" strokeDasharray="314" strokeDashoffset={314*15/100}/>
                                </svg>
                                <b>Communication</b>
                            </div>
                            <div>
                                <svg className="ring-progress transform -rotate-90" width="120px" height="120px">
                                    <circle className="stroke-secondary" cx="60" cy="60" r="50" fill="none" strokeWidth="10"/>
                                    <circle className="stroke-cyan-400" cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeLinecap="round" strokeDasharray="314" strokeDashoffset={314*30/100}/>
                                </svg>
                                <b>Teamwork</b>
                            </div>
                            <div>
                                <svg className="ring-progress transform -rotate-90" width="120px" height="120px">
                                    <circle className="stroke-secondary" cx="60" cy="60" r="50" fill="none" strokeWidth="10"/>
                                    <circle className="stroke-cyan-400" cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeLinecap="round" strokeDasharray="314" strokeDashoffset={314*25/100}/>
                                </svg>
                                <b>Time Management</b>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
});

export default Skills;