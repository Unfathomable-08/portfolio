export default function CaseStudyCTA() {
    return (
        <section className="bg-[var(--primary)] px-5! pt-6! md:px-20!">
            <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0d0e] px-6! py-12! md:px-12! md:py-16! lg:px-16!">
                <div className="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full bg-[var(--secondary)]/15 blur-[90px]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent" />

                <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                    <div>
                        <p className="mb-5! text-sm">
                            Have something in mind?
                        </p>
                        <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
                            Let’s turn your idea into something people want to use.
                        </h2>
                        <p className="mt-6! max-w-xl text-sm leading-7 text-neutral-400">
                            From the first product decision to the final interface,
                            I can help you design and build the complete experience.
                            Either it is website, mobile app or AI based application, 
                            I will design and build it from scratch.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex w-fit shrink-0 rounded-full border border-transparent bg-[var(--secondary)] px-4! py-2! text-sm font-medium text-[#071014] transition-colors hover:border-[var(--secondary)] hover:bg-transparent hover:text-[var(--secondary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--secondary)]"
                    >
                        Start a conversation
                    </a>
                </div>
            </div>
        </section>
    );
}
