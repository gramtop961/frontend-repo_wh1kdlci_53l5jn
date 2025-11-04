import { motion } from 'framer-motion';

const brandItems = [
  { title: 'Neon Nexus', palette: ['#00E0FF', '#1A1A1A'] },
  { title: 'Quantum Labs', palette: ['#9b5cff', '#0A0A0A'] },
  { title: 'Astra Core', palette: ['#00ffa3', '#0f172a'] },
  { title: 'Circuit Fox', palette: ['#ff8bd1', '#111827'] },
];

const animItems = [
  { title: 'Logo Kinetics' },
  { title: 'Title Sequence' },
  { title: 'Microinteractions' },
];

const aiItems = [
  { title: 'Text-to-Brand Variations' },
  { title: 'Generative Patterns' },
  { title: 'Prompted Storyboards' },
  { title: 'Style Transfer Identities' },
];

function TiltCard({ children }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur hover:border-cyan-400/40 transition will-change-transform">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-cyan-400/10 to-fuchsia-500/10 pointer-events-none" />
      <div className="[perspective:1000px]" style={{ transformStyle: 'preserve-3d' }}>
        <div className="transition-transform duration-300 group-hover:-rotate-x-3 group-hover:rotate-y-3" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  return (
    <section id="work" className="relative bg-[#0A0A0A] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,224,255,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: 'Orbitron, Inter, system-ui, sans-serif' }}
        >
          Featured Work
        </motion.h2>

        <div className="mt-12 space-y-20">
          {/* Brand Identity - horizontal scroll */}
          <section id="brand" className="relative">
            <h3 className="text-xl text-cyan-300 mb-4">Brand Identity</h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max pr-6">
                {brandItems.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className="w-72 flex-shrink-0"
                  >
                    <TiltCard>
                      <div className="h-40 rounded-lg overflow-hidden">
                        <div className="h-1/2" style={{ background: item.palette[0] }} />
                        <div className="h-1/2" style={{ background: item.palette[1] }} />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-white/90">{item.title}</p>
                        <span className="text-[10px] text-cyan-300">hover</span>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="mt-2 text-xs text-white/60">Hover to reveal depth and color interplay.</p>
          </section>

          {/* Animations - cinematic reel style */}
          <section id="experiments" className="relative">
            <h3 className="text-xl text-cyan-300 mb-4">Animations</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {animItems.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <TiltCard>
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <div className="h-full w-full bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-indigo-500/30" />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-white/90">{item.title}</p>
                      <span className="text-[10px] text-white/50">scroll-triggered preview</span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* AI Generation Projects - 3D grid vibe */}
          <section className="relative">
            <h3 className="text-xl text-cyan-300 mb-4">AI Generation Projects</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aiItems.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                >
                  <TiltCard>
                    <div className="h-40 w-full grid grid-cols-3 gap-1 rounded-md overflow-hidden">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-white/5 hover:bg-cyan-400/20 transition"
                          style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}
                        />
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-white/90">{item.title}</p>
                      <span className="text-[10px] text-cyan-300">interactive</span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className="relative">
            <h3 className="text-xl text-cyan-300 mb-4">About Me</h3>
            <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="h-48 rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-white/80">
                  I craft brand systems and motion identities that feel alive—enhanced by AI-driven exploration and immersive interaction design.
                </p>
                <p className="text-white/60 text-sm">
                  From neon-edged minimalism to holographic textures, my work blends visual clarity with experimental technology.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
