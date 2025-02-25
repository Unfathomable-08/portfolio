import { forwardRef, useEffect } from "react";
import AOS from 'aos';
import ecom from './images/Ecommerce.JPG';
import visu from './images/Visu.JPG'

const Projects = forwardRef((props, ref) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div
            ref={ref}
            id="projects"
            className="projects bg-primary text-white min-h-screen px-6 sm:px-20 lg:px-28 pt-28"
        >
            <h1 className="text-center text-3xl font-medium mb-10"><span className="text-cyan-500">My </span>Projects</h1>
            <div className="grid gap-x-12 gap-y-0 grid-cols-1 md:grid-cols-2 items-center justify-center">

                <div className="relative h-80 overflow-hidden flex justify-center md:justify-end items-center order-1 lg:order-1" data-aos='flip-left' data-aos-easing="ease-in-out">
                    <a href="http://zyvelo.vercel.app" target="_blank">
                        <img src={ecom} className="aspect-video h-60 object-cover rounded-[15px]" />
                    </a>
                </div>
                <div class="md:h-80 h-48 px-2 flex flex-col md:justify-center md:w-[80%] md:me-[20%] order-2 lg:order-2">
                    <h1 class="text-2xl font-medium mb-3">E-Commerce Platform</h1>
                    <p class="mx-auto">
                        A simple e-commerce platform built using React.js, Node.js, Express.js and MySQL. This project focuses on the frontend, providing a clean and responsive user interface for browsing products and adding them to the cart.
                    </p>
                </div>

                <div class="md:h-80 h-48 flex px-2 lg:px-0 flex-col md:justify-center md:w-[80%] md:me-[20%] lg:ms-[20%] order-4 lg:order-3">
                    <h1 class="text-2xl font-medium mb-3">Data Visualization Tool</h1>
                    <p class="mx-auto">
                        A data visualization tool built with React.js and Chart.js. It allows users to generate dynamic charts and graphs based on their input, making data analysis easy and interactive.
                    </p>
                </div>
                <div className="relative h-80 rounded-[19px] overflow-hidden flex justify-center md:justify-start items-center order-3 lg:order-4" data-aos='flip-left' data-aos-easing="ease-in-out">
                    <a href="http://vizuflect.netlify.app" target="_blank">
                        <img src={visu} className="aspect-video h-60 object-cover rounded-[15px]" />
                    </a>
                </div>

                <div className="relative h-80 rounded-[19px] overflow-hidden flex justify-center md:justify-end items-center order-5 lg:order-5" data-aos='flip-left' data-aos-easing="ease-in-out">
                    <a>
                        <img src="https://st.depositphotos.com/1865899/3854/v/450/depositphotos_38542045-stock-illustration-set-elements-of-info-graphics.jpg" className="aspect-video h-60 object-cover rounded-[15px]" />
                    </a>
                </div>
                <div class="md:h-80 h-48 px-2 flex flex-col md:justify-center md:w-[80%] md:me-[20%] order-6 lg:order-6">
                    <h1 class="text-2xl font-medium mb-3">Learning Management System</h1>
                    <p class="mx-auto">
                        A project management system built for developers, designed to organize tasks, track progress, and manage projects efficiently within an intuitive learning environment.
                    </p>
                </div>

                {/* <div class="md:h-80 h-48 flex px-2 lg:px-0 flex-col md:justify-center md:w-[80%] md:me-[20%] lg:ms-[20%] order-8 lg:order-7">
                    <h1 class="text-2xl font-medium mb-3">E-Commerce Platform</h1>
                    <p class="mx-auto">
                        A simple e-commerce platform built using React.js. This project focuses on the frontend, providing a clean and responsive user interface for browsing products and adding them to the cart.
                    </p>
                </div>
                <div className="relative h-80 rounded-[19px] overflow-hidden flex justify-center md:justify-start items-center order-7 lg:order-8" data-aos='flip-left' data-aos-easing="ease-in-out">
                    <a>
                        <img src="https://st.depositphotos.com/1865899/3854/v/450/depositphotos_38542045-stock-illustration-set-elements-of-info-graphics.jpg" className="aspect-video h-60 object-cover rounded-[15px]" />
                    </a>
                </div> */}

            </div>
        </div>
    )
});

export default Projects;