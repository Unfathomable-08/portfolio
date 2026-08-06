"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/sub-components/Navbar";
import Hero from "../(components)/Hero";
import About from "../(components)/Info";
import Mockup from "../(components)/Mockup";
import FlowMap from "../(components)/FlowMap";
import CaseStudyCTA from "../(components)/CaseStudyCTA";
import Contact from "@/components/Contact";

export default function CaseStudyPage() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    return (
        <main className="w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <section id="mockup" className="bg-[var(--primary)] py-20!">
                <About />
                <Mockup />
                <FlowMap />
            </section>
            <CaseStudyCTA />
            <Contact />
        </main>
    );
}
