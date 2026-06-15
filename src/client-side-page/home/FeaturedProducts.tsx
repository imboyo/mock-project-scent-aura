import { motion } from 'motion/react';
import { products } from 'src/data/products';

export default function FeaturedProducts() {
  const handleBuyNow = (productName: string) => {
    // Integrating WhatsApp link directly as requested
    const message = encodeURIComponent(`Hello, I'm interested in purchasing ${productName}.`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="collections" className="py-24 bg-brand-darker relative px-6 md:px-12 overflow-hidden">
      {/* Background Lighting Effect */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#1a1a2a] rounded-full blur-[120px] opacity-30 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <span className="text-brand-gold uppercase tracking-[0.3em] text-xs mb-2 block">
          Best Sellers
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-white leading-none mb-6 italic tracking-tight">Our Signature Scents</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed italic">
          Fresh top notes layered with warm, deep base tones. Balanced unisex fragrances that evolve beautifully throughout the day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group cursor-pointer flex flex-col items-center"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-brand-darker">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover origin-center transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Quick Add Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-[#050505]/90 to-transparent">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleBuyNow(product.name); }}
                  className="w-full bg-brand-gold text-black py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#d4af37] transition-all"
                >
                  Buy Now via WhatsApp
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center w-full px-4 flex flex-col items-center">
              <h3 className="font-serif text-2xl mb-1 italic text-white tracking-tight">{product.name}</h3>
              <p className="text-brand-gold text-xs font-medium tracking-widest mb-3">${product.price}</p>
              <p className="text-gray-400 text-sm font-light leading-relaxed pb-4 border-b border-white/5 italic">
                {product.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-16 relative z-10">
        <a href="#" className="border-b border-brand-gold/40 text-brand-gold pb-1 tracking-[0.3em] text-[10px] uppercase hover:text-white hover:border-white transition-colors">
          Discover All Scents
        </a>
      </div>
    </section>
  );
}
