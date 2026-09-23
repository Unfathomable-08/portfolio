import Image from "next/image";

export default function AuthorBio() {
  return (
    <div className="mt-12! p-6! sm:p-8! bg-[#181818] rounded-xl border border-white/10 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
      <Image
        src="/logo.png"
        alt="Dev Muhammad"
        width={72}
        height={72}
        className="rounded-full bg-black/80 p-1! border border-[var(--secondary)]/40 shrink-0"
      />
      <div className="text-center sm:text-left">
        <h4 className="text-base sm:text-lg font-bold text-white mb-1!">
          Written by Dev Muhammad
        </h4>
        <p className="text-xs sm:text-sm text-[var(--tertiary)] leading-relaxed">
          Full-Stack Web &amp; Applied AI Developer based in Karachi, Pakistan. Specialized in React, Next.js, Python, and autonomous AI systems.
        </p>
      </div>
    </div>
  );
}
