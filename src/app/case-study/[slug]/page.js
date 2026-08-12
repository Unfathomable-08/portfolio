"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
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
    const caseStudy = caseStudies[slug];

    if (!caseStudy) return null; 

    return (
        <main className="w-screen overflow-x-hidden">
            <Navbar />
            <nav
                aria-label="Breadcrumb"
                className="absolute left-3 top-24 z-20 flex items-center gap-2 text-[11px] text-neutral-500 sm:left-8 md:left-20"
            >
                <Link href="/" className="transition-colors hover:text-[var(--secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--secondary)]">
                    Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/projects" className="transition-colors hover:text-[var(--secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--secondary)]">
                    Projects
                </Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-neutral-300">
                    {caseStudy.hero.name}
                </span>
            </nav>
            <Hero caseStudy={caseStudy.hero} device={caseStudy.device} />
            <section id="mockup" className="bg-[var(--primary)] py-20!">
                <About caseStudy={caseStudy.about} />
                <Mockup device={caseStudy.device} screenshots={caseStudy.screenshots} />
                <FlowMap note={caseStudy.workflowNote} nodes={caseStudy.nodes} connections={caseStudy.connections} />
            </section>
            <CaseStudyCTA />
            <Contact />
        </main>
    );
}
