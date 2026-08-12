"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero({ caseStudy, device }) {
    const right = caseStudy?.right;
    const isLaptop = device === "laptop";

    return (
        <section
            id="home"
            className="relative flex min-h-svh lg:h-svh items-center overflow-hidden bg-[var(--primary)] px-3! pb-16! pt-28! sm:px-8! md:px-20! md:pt-32!"
        >
            {right && (
                typeof right === "string" ? (
                    <div className="pointer-events-none absolute right-0 top-[15%] select-none text-[clamp(9rem,20vw,25rem)] font-black leading-none tracking-tighter text-white/20! md:text-white!">
                        {right}
                    </div>
                ) : (
                    <div
                        lang={right.lang}
                        dir={right.dir}
                        className={right.className}
                    >
                        {right.text}
                    </div>
                )
            )}

            <div className="relative z-1 mx-auto grid w-full max-w-[1440px] items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
                >
                    <motion.div
                        variants={reveal}
                        transition={{ duration: 0.55 }}
                        className="mb-8! flex items-center gap-3!"
                    >
                        <span className="h-px w-10 bg-[var(--secondary)]" />
                        <span className="text-sm text-[var(--secondary)]">
                            Product case study · {new Date().getFullYear()}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={reveal}
                        transition={{ duration: 0.65 }}
                        className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-[0.85] sm:leading-[0.76] tracking-[-0.075em] text-white"
                    >
                        {caseStudy.name}
                    </motion.h1>

                    <motion.div
                        variants={reveal}
                        transition={{ duration: 0.6 }}
                        className="mt-4! max-w-xl pt-4! sm:pt-6!"
                    >
                        <p className="max-w-xl text-xs leading-6 text-neutral-400 sm:text-sm sm:leading-7 md:text-[15px]">
                            {caseStudy.description}
                        </p>
                    </motion.div>

                    <div className="mt-8! flex flex-wrap gap-3">
                        <motion.a
                            variants={reveal}
                            transition={{ duration: 0.55 }}
                            href="#about"
                            className="inline-flex rounded-full border border-transparent bg-[var(--secondary)] px-4! py-2! text-xs sm:text-sm font-medium text-[#071014] transition-colors hover:border-[var(--secondary)] hover:bg-transparent hover:text-[var(--secondary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--secondary)]"
                        >
                            Explore Case-Study
                        </motion.a>

                        <motion.a
                            variants={reveal}
                            transition={{ duration: 0.55 }}
                            href="/portfolio"
                            className="inline-flex rounded-full border hover:bg-[var(--secondary)] px-4! py-2! text-xs sm:text-sm font-medium text-[#071014] transition-colors border-[var(--secondary)] bg-transparent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--secondary)]"
                        >
                            View Portfolio
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative mx-auto w-full max-w-[520px] ${isLaptop
                        ? "h-[260px] xs:h-[310px] sm:h-[390px] md:h-[470px]"
                        : "h-[360px] xs:h-[420px] sm:h-[490px] md:h-[610px]"
                        }`}
                >
                    <div className={`absolute left-[6%] -rotate-6 overflow-hidden border border-white/10 bg-[#090b0d] p-1.5! opacity-65 shadow-[0_30px_80px_rgba(0,0,0,.5)] ${isLaptop ? "top-[38%] w-[66%] rounded-lg" : "top-[22%] w-[42%] rounded-[1.25rem] sm:rounded-[1.6rem]"}`}>
                        <div className={`relative overflow-hidden ${isLaptop ? "aspect-video rounded-md" : "aspect-[9/16] rounded-[1rem] sm:rounded-[1.25rem]"}`}>
                            <Image
                                src={caseStudy.images?.[0]}
                                alt="Fluentyx vocabulary exercise"
                                fill
                                sizes="(min-width: 768px) 220px, 42vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className={`absolute right-[7%] top-[10%] rotate-3 overflow-hidden bg-[#090b0d] p-1.5! sm:p-2! shadow-[0_35px_100px_rgba(0,0,0,.65)] ${isLaptop ? "w-[76%] rounded-lg" : "w-[52%] rounded-[1.5rem] sm:rounded-[2rem]"}`}>
                        <div className={`relative overflow-hidden ${isLaptop ? "aspect-video rounded-md" : "aspect-[9/16] rounded-[1.15rem] sm:rounded-[1.5rem]"}`}>
                            <Image
                                src={caseStudy.images?.[1]}
                                alt="Fluentyx learning dashboard"
                                fill
                                priority
                                sizes="(min-width: 768px) 270px, 52vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[var(--primary)]" />
        </section>
    );
}
