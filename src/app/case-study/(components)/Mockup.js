import Image from "next/image";

export default function Mockup({ screenshots }) {
    return (
        <section className="px-3! sm:px-8! md:px-20!">
            <div className="grid gap-y-3 sm:gap-y-4 md:grid-cols-[100px_1fr_2fr]">
                <div className="text-lg sm:text-xl font-bold tracking-tighter text-[var(--secondary)]!">
                    ( 03 )
                </div>

                <h2 className="text-lg sm:text-xl font-bold drop-shadow-[0_0_10px_var(--secondary)]">
                    User Interface Showcase
                </h2>

                <div>
                    <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-neutral-400">
                        A selection of key interfaces from the project, including
                        lessons, exercises, revision tools, and progress tracking.
                    </p>
                </div>
            </div>

            <div className="relative mt-10! sm:mt-14! lg:mt-20!">
                {/* Connector line */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 1440 520"
                    preserveAspectRatio="none"
                    className="pointer-events-none max-w-5xl mx-auto! absolute inset-x-0 top-14 hidden h-[420px] w-full overflow-visible lg:block"
                >
                    <path
                        d="M 0 110 H 360 V 320 H 720 V 110 H 1080 V 320 H 1440"
                        fill="none"
                        stroke="var(--secondary)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div className="max-w-5xl mx-auto! snap-x snap-mandatory overflow-x-auto flex gap-x-4 sm:gap-x-10! px-2! pb-8! sm:px-5! md:px-10! lg:grid lg:grid-cols-4 lg:items-start lg:overflow-visible lg:px-0! lg:pb-28!">
                    {screenshots.map((screenshot, index) => (
                        <figure
                            key={screenshot.src}
                            className={`group relative shrink-0 snap-center w-[75vw] xs:w-[60vw] sm:w-[45vw] md:w-[38vw] lg:w-auto ${index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-28"
                                }`}
                        >
                            <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] border border-white/40 bg-black p-1.5! shadow-[0_24px_65px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="relative aspect-[9/16] overflow-hidden rounded-[1rem] sm:rounded-[1.15rem] bg-black">
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        fill
                                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 75vw"
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>

                            <figcaption className="mt-3! sm:mt-4! grid grid-cols-[1.75rem_1fr] border-t border-white/50 pt-3!">
                                <span className="font-mono text-[10px] text-[var(--secondary)]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="text-xs font-bold text-white">
                                        {screenshot.label}
                                    </h3>
                                    <p className="mt-1! text-[11px] leading-relaxed text-neutral-500">
                                        {screenshot.note}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
