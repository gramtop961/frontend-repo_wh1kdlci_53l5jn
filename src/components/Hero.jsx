import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,224,255,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow"
            style={{ fontFamily: 'Orbitron, Inter, system-ui, sans-serif' }}
          >
            Designing the Future of Brand Identity & AI Creativity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-white/80 max-w-2xl"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            A portfolio of brand systems, animated storytelling, and intelligent design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="pointer-events-auto group inline-flex items-center justify-center rounded-full bg-cyan-400/20 px-6 py-3 text-cyan-200 ring-1 ring-cyan-400/40 backdrop-blur transition hover:bg-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,224,255,0.35)]"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(0,224,255,0.9)]" />
              View Work
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-cyan-400/40 px-6 py-3 text-white hover:text-cyan-200 hover:border-cyan-300/60 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
