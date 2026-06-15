import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#2a1b0a] rounded-full blur-[120px] opacity-40 z-0"></div>
      <div className="absolute bottom-[-5%] left-[10%] w-[400px] h-[400px] bg-[#1a1a2a] rounded-full blur-[100px] opacity-30 z-0"></div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Perfume" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/80 to-transparent md:w-3/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs mb-2 block">
              The Signature Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-white leading-none mb-4 italic tracking-tight">
              Discover Scents <br className="hidden md:block" />
              <span className="italic text-white">That Define You</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 text-lg max-w-md leading-relaxed font-light italic mb-10"
          >
            Curated perfumes crafted from premium ingredients to match mood, identity, and lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href="#collections" 
              className="px-10 py-5 bg-brand-gold text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#d4af37] transition-all text-center"
            >
              Explore Collections
            </a>
            <a 
              href="#story" 
              className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
