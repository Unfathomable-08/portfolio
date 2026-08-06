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

export default function Info() {
    return (
        <>
            <div id="about" className="grid md:grid-cols-[100px_1fr_2fr] px-5! md:px-20! mb-20! relative">
                <div className="text-[var(--secondary)]! tracking-tighter text-xl font-bold">( 01 )</div>
                <div className="font-bold text-xl drop-shadow-[0_0_10px_var(--secondary)]">About Project</div>
                <div>
                    <div className="leading-relaxed">
                        <Text text="_Fluentyx_ is an Arabic learning platform that helps beginners learn Arabic through _English_ or _Urdu/Hindi_ . The platform is designed to take users from learning the Arabic alphabet to building vocabulary and improving reading skills through interactive lessons and practice exercises." />
                        <Text text="Instead of relying on passive reading, Fluentyx includes multiple exercise types that reinforce newly learned words through repetition and active recall, making it easier to remember vocabulary over time. For complete beginners, it offers a dedicated letters section where users can learn the Arabic alphabet, practice pronunciation, and improve handwriting using a _CNN-based_ handwritten character recognition model built with PyTorch that provides instant feedback on written letters." />
                        <Text text="The platform also includes an _AI_ _tutor_ that answers questions, explains concepts, and assists learners whenever they get stuck. To keep learning engaging, Fluentyx features a _weekly_ _leaderboard_ and progress tracking, encouraging users to stay consistent and compete with others while improving their Arabic skills." />
                    </div>
                </div>
            </div>

            <div id="features" className="grid md:grid-cols-[100px_1fr_2fr] px-5! md:px-20! mb-20! relative">
                <div className="text-[var(--secondary)]! tracking-tighter text-xl font-bold">( 02 )</div>
                <div className="font-bold text-xl drop-shadow-[0_0_10px_var(--secondary)]">Tech Stack & Features</div>
                <div className="space-y-12!">
                    <div>
                        <h2 className="font-bold text-xl">Technology Stack</h2>
                        <p className="text-sm my-4!">This project was built using React and Node.js. It uses MongoDB as the database and Express as the framework.</p>
                        <div className="py-4! max-w-md relative">
                            <div className="absolute w-full h-px bg-[var(--secondary)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                            <div className="flex justify-between relative z-1">
                                <span className="bg-[var(--secondary)] rounded-full px-4! py-1!">React</span>
                                <span className="bg-[var(--secondary)] rounded-full px-4! py-1!">Next.js</span>
                                <span className="bg-[var(--secondary)] rounded-full px-4! py-1!">Node.js</span>
                                <span className="bg-[var(--secondary)] rounded-full px-4! py-1!">MongoDB</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6!">
                            <h2 className="font-bold text-xl">Key Features</h2>
                            <p className="text-sm mt-2! leading-relaxed">
                                Core features built to support Arabic learning, revision, and practice.
                            </p>
                        </div>

                        <div className="divide-y divide-[var(--secondary)]/40 border-y border-[var(--secondary)]/40">
                            {[
                                "Arabic learning through English, Urdu, and Hindi",
                                "Multiple vocabulary and memorization exercises",
                                "Personalized lesson revision system",
                                "Arabic alphabet lessons for complete beginners",
                                "CNN-powered handwritten letter recognition",
                                "AI tutor for explanations and learning support",
                                "Intelligent translation marking system",
                                "Weekly leaderboard and progress tracking",
                            ].map((feature, index) => (
                                <div
                                    key={feature}
                                    className="group flex items-center gap-4! py-3! transition-all duration-300 hover:pl-2!"
                                >
                                    <span className="text-xs font-bold text-[var(--secondary)] opacity-60">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="flex-1 text-sm font-medium leading-relaxed">
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