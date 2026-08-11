import { GoArrowUpRight } from "react-icons/go";

const Text = ({ text }) => {
    const highlighted = text.split(/(\s+)/).map((part, index) => {
        if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
            return (
                <span
                    key={index}
                    className="font-semibold italic tracking-wide"
                >
                    {part.slice(1, -1)}
                </span>
            );
        }

        return part;
    });

    return <p className="whitespace-pre-line mb-3!">{highlighted}</p>;
};

export default function Info({ caseStudy }) {
    return (
        <>
            <div id="about" className="grid gap-y-3 sm:gap-y-4 md:grid-cols-[100px_1fr_2fr] px-3! sm:px-8! md:px-20! mb-16! md:mb-20! relative">
                <div className="text-[var(--secondary)]! tracking-tighter text-lg sm:text-xl font-bold">( 01 )</div>
                <div className="font-bold text-lg sm:text-xl drop-shadow-[0_0_10px_var(--secondary)]">About Project</div>
                <div>
                    <div className="leading-relaxed text-xs sm:text-sm text-neutral-300">
                        {caseStudy.text.map((text) => (
                            <Text key={text} text={text} />
                        ))}
                    </div>
                </div>
            </div>

            <div id="features" className="grid gap-y-3 sm:gap-y-4 md:grid-cols-[100px_1fr_2fr] px-3! sm:px-8! md:px-20! mb-16! md:mb-20! relative">
                <div className="text-[var(--secondary)]! tracking-tighter text-lg sm:text-xl font-bold">( 02 )</div>
                <div className="font-bold text-lg sm:text-xl drop-shadow-[0_0_10px_var(--secondary)]">Tech Stack & Features</div>
                <div className="space-y-8! sm:space-y-12!">
                    <div>
                        <h2 className="font-bold text-lg sm:text-xl">Technology Stack</h2>
                        <p className="text-xs sm:text-sm my-3! sm:my-4! text-neutral-400">{caseStudy.stack}</p>
                        <div className="py-4! max-w-md relative">
                            <div className="absolute max-md:hidden w-full h-px bg-[var(--secondary)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                            <div className="flex flex-wrap gap-2 sm:gap-0 justify-between relative z-1">
                                <span className="bg-[var(--secondary)] text-[#071014] font-medium text-xs sm:text-sm rounded-full px-3! py-1! sm:px-4!">{caseStudy.tech[0] || "React.js"}</span>
                                <span className="bg-[var(--secondary)] text-[#071014] font-medium text-xs sm:text-sm rounded-full px-3! py-1! sm:px-4!">{caseStudy.tech[1] || "Node.js"}</span>
                                <span className="bg-[var(--secondary)] text-[#071014] font-medium text-xs sm:text-sm rounded-full px-3! py-1! sm:px-4!">{caseStudy.tech[2] || "Express.js"}</span>
                                <span className="bg-[var(--secondary)] text-[#071014] font-medium text-xs sm:text-sm rounded-full px-3! py-1! sm:px-4!">{caseStudy.tech[3] || "MongoDB"}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4! sm:mb-6!">
                            <h2 className="font-bold text-lg sm:text-xl">Key Features</h2>
                            <p className="text-xs sm:text-sm mt-2! leading-relaxed text-neutral-400">
                                Core features built to support Arabic learning, revision, and practice.
                            </p>
                        </div>

                        <div className="divide-y divide-[var(--secondary)]/40 border-y border-[var(--secondary)]/40">
                            {caseStudy.features?.map((feature, index) => (
                                <div
                                    key={feature}
                                    className="group flex items-center gap-3! sm:gap-4! py-3! transition-all duration-300 hover:pl-2!"
                                >
                                    <span className="text-[11px] sm:text-xs font-bold text-[var(--secondary)] opacity-60">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="flex-1 text-xs sm:text-sm font-medium leading-relaxed">
                                        {feature}
                                    </p>

                                    <span className="text-[var(--secondary)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                                        <GoArrowUpRight />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}