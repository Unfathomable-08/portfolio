import Image from "next/image";

export default function Mockup({ device = "mobile" }) {
    const isMobile = device === "mobile";

    const screenshots = [
        {
            src: "/case-studies/fluentyx/home.png",
            alt: "Arabic learning dashboard",
        },
        {
            src: "/case-studies/fluentyx/leaderboard.png",
            alt: "Vocabulary exercise screen",
        },
        {
            src: "/case-studies/fluentyx/exercise.png",
            alt: "Lesson revision screen",
        },
        {
            src: "/case-studies/fluentyx/ai.png",
            alt: "Arabic learning activity",
        },
        {
            src: "/case-studies/fluentyx/account.png",
            alt: "Arabic learning activity",
        },
    ];

    return (
        <section className="grid gap-y-8 px-5! md:grid-cols-[100px_1fr_2fr] md:px-20!">
            {/* Section number */}
            <div className="text-xl font-bold tracking-tighter text-[var(--secondary)]">
                ( 03 )
            </div>

            {/* Section title */}
            <div>
                <h2 className="text-xl font-bold drop-shadow-[0_0_10px_var(--secondary)]">
                    User Interface Showcase
                </h2>
            </div>

            {/* Third-column content */}
            <div>
                <p className="mb-8! max-w-xl text-sm leading-relaxed text-neutral-400">
                    A selection of key interfaces from the project, including
                    lessons, exercises, revision tools, and progress-tracking
                    experiences.
                </p>

                <div
                    className={
                        isMobile
                            ? "grid grid-cols-2 gap-4! lg:grid-cols-3"
                            : "grid grid-cols-1 gap-6! lg:grid-cols-2"
                    }
                >
                    {screenshots.map((screenshot, index) => (
                        <div
                            key={screenshot.src}
                            className={[
                                "group relative overflow-hidden rounded-lg",
                                "border border-white/10 bg-white/5",
                                "shadow-[0_15px_50px_rgba(0,0,0,0.25)]",
                                isMobile
                                    ? "aspect-[9/16]"
                                    : "aspect-[16/10]",
                            ].join(" ")}
                        >
                            <Image
                                src={screenshot.src}
                                alt={screenshot.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                priority={index === 0}
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}