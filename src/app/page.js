"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Navbar from "@/sub-components/Navbar"
import Hero from "@/components/Hero"
import About from "../components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Experience from "@/components/WorkEx"

export default function Home(){
    const pathname = usePathname();

    useEffect(() => {
        if (pathname && pathname !== "/") {
            // Remove the leading slash to get the section id
            const sectionId = pathname.substring(1).toLowerCase();
            const element = document.getElementById(sectionId);
            
            if (element) {
                // Smooth scroll to the element after a short delay to ensure rendering
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Contact />
        </>
    )
}
