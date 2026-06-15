import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section id="story" className="py-24 bg-[#050505] relative overflow-hidden px-6 md:px-12">
      {/* Background Lighting Effect */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2a1b0a] rounded-full blur-[120px] opacity-30 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Images */}
        <div className="w-full lg:w-1/2 relative h-[600px]">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-0 right-10 w-3/4 h-3/4 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
              alt="Perfume Craftsmanship" 
              className="w-full h-full object-cover border border-white/5"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 w-2/3 h-2/3 z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=800&auto=format&fit=crop" 
              alt="Perfume Ingredients" 
              className="w-full h-full object-cover border border-white/5"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs mb-2 block">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-none mb-6 italic tracking-tight">
              A Fragrance Born <br/> <span className="italic text-white">from Precision</span>
            </h2>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6 italic">
              Every bottle of ScentAura is the result of meticulous craftsmanship—from the selection of premium oils to the careful balance of each note. We work with master perfumers to create compositions that are both modern and timeless, refined yet bold.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 italic">
              Born from the intersection of heritage and innovation, we create scents that transcend gender, season, and trend. This is perfumery as it should be: intentional, intimate, and enduring.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-1">Concentration</span>
                <span className="text-xs text-white uppercase tracking-widest mb-2">Premium Oil</span>
                <p className="text-gray-500 text-sm font-light italic">15-20% parfum concentration for lasting performance.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-1">Purity</span>
                <span className="text-xs text-white uppercase tracking-widest mb-2">Clean Luxury</span>
                <p className="text-gray-500 text-sm font-light italic">No synthetic fillers. Just pure, refined ingredients.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
