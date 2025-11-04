import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#111] py-24">
      <div className="absolute inset-0 pointer-events-none opacity-70" style={{
        backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,224,255,0.15), transparent 25%),
                          radial-gradient(circle at 80% 30%, rgba(255,0,128,0.12), transparent 30%)`
      }} />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
          style={{ fontFamily: 'Orbitron, Inter, system-ui, sans-serif' }}
        >
          Let’s build something intelligent and beautiful
        </motion.h2>
        <p className="mt-3 text-white/70">
          Tell me about your brand, animation, or AI-driven idea. I’ll get back within 24 hours.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="Your name" />
            <Input name="email" type="email" placeholder="Email" />
          </div>
          <Input name="subject" placeholder="Project / Subject" />
          <Textarea name="message" placeholder="Tell me about your project…" />
          <div className="flex justify-center">
            <button
              type="submit"
              className="group inline-flex items-center justify-center rounded-full bg-cyan-400/20 px-8 py-3 text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,224,255,0.35)] transition"
            >
              Send Message
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Deepti — Brand Identity, Animation, and AI Design</p>
      </div>
    </section>
  );
}

function Input({ name, type = 'text', placeholder }) {
  return (
    <input
      required
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-cyan-400/30 bg-[#0A0A0A] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-300 focus:shadow-[0_0_20px_rgba(0,224,255,0.25)]"
    />
  );
}

function Textarea({ name, placeholder }) {
  return (
    <textarea
      required
      name={name}
      placeholder={placeholder}
      rows={5}
      className="w-full rounded-lg border border-cyan-400/30 bg-[#0A0A0A] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-300 focus:shadow-[0_0_20px_rgba(0,224,255,0.25)]"
    />
  );
}
