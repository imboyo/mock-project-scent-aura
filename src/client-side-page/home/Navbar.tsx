import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="text-white/80 hover:text-white transition-colors lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex gap-12 text-[10px] tracking-[0.2em] uppercase font-medium opacity-60">
            <a href="#home" className="hover:opacity-100 transition-colors">Home</a>
            <a href="#collections" className="hover:opacity-100 transition-colors">Collections</a>
            <a href="#story" className="hover:opacity-100 transition-colors">Our Story</a>
          </div>
        </div>

        <div className="flex-1 text-center lg:flex-none">
          <a href="#" className="font-light text-xl tracking-[0.4em] uppercase text-brand-gold">ScentAura</a>
        </div>

        <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase font-medium text-white/60">
          <button className="hover:text-white hover:opacity-100 transition-colors hidden sm:block">
            <Search className="w-4 h-4" />
          </button>
          <button className="hover:text-white hover:opacity-100 transition-colors relative flex items-center gap-2 font-bold text-white">
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline-block">Cart (0)</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
