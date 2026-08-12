import Image from "next/image";

export default function Mockup({ screenshots, device }) {
    const isLaptop = device === "laptop";

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

            <div className={`relative ${isLaptop ? "mt-8! sm:mt-10! lg:mt-12!" : "mt-10! sm:mt-14! lg:mt-20!"}`}>
                {/* Connector line */}
                {!isLaptop && (
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
                )}
                <div className={`max-w-5xl mx-auto! snap-x snap-mandatory overflow-x-auto flex gap-x-4 sm:gap-x-10! px-2! pb-8! sm:px-5! md:px-10! lg:grid lg:items-start lg:overflow-visible lg:px-0! ${isLaptop
                    ? "lg:grid-cols-3 lg:gap-x-6! lg:gap-y-14! lg:pb-10!"
                    : "lg:grid-cols-4 lg:pb-28!"
                    }`}>
                    {screenshots.map((screenshot, index) => (
                        <figure
                            key={screenshot.src}
                            className={`group relative shrink-0 snap-center lg:w-auto ${isLaptop
                                ? "w-[86vw] sm:w-[68vw] md:w-[56vw]"
                                : `w-[75vw] xs:w-[60vw] sm:w-[45vw] md:w-[38vw] ${index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-28"}`
                                }`}
                        >
                            <div className={`relative overflow-hidden border border-white/40 bg-black p-1.5! shadow-[0_24px_65px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:-translate-y-2 ${isLaptop ? "rounded-lg" : "rounded-[1.25rem] sm:rounded-[1.5rem]"}`}>
                                <div className={`relative overflow-hidden bg-black ${isLaptop ? "aspect-video rounded-md" : "aspect-[9/16] rounded-[1rem] sm:rounded-[1.15rem]"}`}>
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        fill
                                        sizes={isLaptop
                                            ? "(min-width: 1024px) 320px, (min-width: 640px) 68vw, 86vw"
                                            : "(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 75vw"
                                        }
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
