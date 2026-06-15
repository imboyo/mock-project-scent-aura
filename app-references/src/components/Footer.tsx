import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 px-6 md:px-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-light text-xl tracking-[0.4em] uppercase text-brand-gold mb-6">ScentAura</h3>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm mb-8 italic">
            Elevating your presence with meticulously crafted luxury fragrances. Designed for the modern individual who seeks refinement and distinction.
          </p>
          <div className="flex gap-4 text-gray-500">
            <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Twitter className="w-5 h-5"/></a>
          </div>
        </div>

        <div>
          <h4 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-6">Shop</h4>
          <ul className="space-y-4 text-white/60 text-[10px] uppercase tracking-widest font-medium">
            <li><a href="#" className="hover:text-white transition-colors">All Fragrances</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Latest Works</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Discovery Set</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-6">About</h4>
          <ul className="space-y-4 text-white/60 text-[10px] uppercase tracking-widest font-medium">
            <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Craftsmanship</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-gray-500">
        <p>&copy; {new Date().getFullYear()} ScentAura Perfumes. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
