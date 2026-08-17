"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Navbar from "@/components/Navbar"
import Hero from "@/app/(components)/Hero"
import About from "@/app/(components)/About"
import Skills from "@/app/(components)/Skills"
import Projects from "@/app/(components)/Projects"
import Services from "@/app/(components)/Services"
// import Experience from "@/app/(components)/WorkEx"
import Contact from "@/components/Contact"

export default function Home() {
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
        <main className="w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Experience /> */}
            <Services />
            <Contact />
        </main>
    )
}
