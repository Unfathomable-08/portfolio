export default function PortfolioCTA() {
  return (
    <section className="relative w-full bg-[var(--primary)] px-4! sm:px-8! md:px-20! py-12!">
      <div className="relative mx-auto! max-w-6xl overflow-hidden rounded-2xl border border-[var(--secondary)]/30 bg-gradient-to-br from-[#101920] via-[#0b0e11] to-[#070b0e] p-6! sm:p-10! md:p-14! shadow-[0_0_50px_rgba(0,194,255,0.12)]">

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--secondary)]/15 blur-[80px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[80px]" />
        {/* Top highlight line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent" />

        <div className="relative z-10 grid gap-8! lg:grid-cols-12 lg:items-center">
          {/* Left content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2! rounded-full bg-[var(--secondary)]/10 px-3! py-1! text-xs font-semibold uppercase tracking-wider text-[var(--secondary)] mb-4! border border-[var(--secondary)]/20">
              <i className="fas fa-bolt text-[10px]" />
              <span>Let's Collaborate</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4!">
              Have something
              <br />
              in mind?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mb-6!">
              Web platform, AI pipeline, mobile app, or enterprise system.
              I build it from idea to deployed product.
            </p>
            <div className="flex flex-wrap gap-2.5! text-xs text-gray-300">
              <div className="inline-flex items-center gap-1.5! rounded-md bg-white/5 border border-white/10 px-3! py-1.5!">
                <i className="fas fa-check text-[var(--secondary)]" />
                <span>Rapid &amp; Predictable Delivery</span>
              </div>
              <div className="inline-flex items-center gap-1.5! rounded-md bg-white/5 border border-white/10 px-3! py-1.5!">
                <i className="fas fa-check text-[var(--secondary)]" />
                <span>Direct 1-on-1 Communication</span>
              </div>
              <div className="inline-flex items-center gap-1.5! rounded-md bg-white/5 border border-white/10 px-3! py-1.5!">
                <i className="fas fa-check text-[var(--secondary)]" />
                <span>Clean, Scalable Architecture</span>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4!">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5! px-8! py-3.5! rounded-full font-bold text-sm bg-[var(--secondary)] text-[#071014] shadow-[0_0_30px_rgba(0,194,255,0.4)] hover:bg-[var(--hover)] hover:scale-105 transition-all duration-300"
            >
              <span>Start a Conversation</span>
              <i className="fas fa-arrow-right text-xs" />
            </a>
            <a
              href="https://wa.me/+923282279743"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2! px-6! py-2.5! rounded-full text-xs font-semibold border border-white/20 text-gray-300 hover:border-[var(--secondary)] hover:text-white transition-all duration-300"
            >
              <i className="fab fa-whatsapp text-sm text-green-400" />
              <span>Quick WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
