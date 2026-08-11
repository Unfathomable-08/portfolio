"use client";

import { useParams } from "next/navigation";
import Navbar from "@/sub-components/Navbar";
import Hero from "../(components)/Hero";
import About from "../(components)/Info";
import Mockup from "../(components)/Mockup";
import FlowMap from "../(components)/FlowMap";
import CaseStudyCTA from "../(components)/CaseStudyCTA";
import Contact from "@/components/Contact";
import { caseStudies } from "@/data/case-study";

export default function CaseStudyPage() {
    const { slug } = useParams();
    console.log("slug:", slug);
    const caseStudy = caseStudies[slug];

    if (!caseStudy) return null; 

    return (
        <main className="w-screen overflow-x-hidden">
            <Navbar />
            <Hero caseStudy={caseStudy.hero} />
            <section id="mockup" className="bg-[var(--primary)] py-20!">
                <About caseStudy={caseStudy.about} />
                <Mockup screenshots={caseStudy.screenshots} />
                <FlowMap nodes={caseStudy.nodes} connections={caseStudy.connections} />
            </section>
            <CaseStudyCTA />
            <Contact />
        </main>
    );
}
