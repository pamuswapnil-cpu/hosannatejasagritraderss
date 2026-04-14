import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/src/constants';
import { Category, Product } from '@/src/types';
import ProductCard from './ProductCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'motion/react';

interface ProductSectionProps {
  onBook: (product: Product) => void;
}

export default function ProductSection({ onBook }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div id="products" className="h-full flex flex-col">
      <span className="section-title">Featured Inventory</span>
      
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
        <button 
          onClick={() => setActiveCategory('All')}
          className={`px-3 py-1 text-[10px] font-bold uppercase rounded-none border transition-colors ${
            activeCategory === 'All' ? 'bg-primary text-white border-primary' : 'bg-white text-stone-600 border-border hover:border-primary'
          }`}
        >
          All
        </button>
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 text-[10px] font-bold uppercase rounded-none border transition-colors whitespace-nowrap ${
              activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-white text-stone-600 border-border hover:border-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard product={product} onBook={onBook} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-5 text-center">
          <a href="#" className="text-[12px] color-primary no-underline font-bold hover:underline">
            View All Categories &rarr;
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(45, 90, 39, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(45, 90, 39, 0.4);
        }
      `}} />
    </div>
  );
}
