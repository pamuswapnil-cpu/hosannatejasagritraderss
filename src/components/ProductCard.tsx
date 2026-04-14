import { Product } from '@/src/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onBook: (product: Product) => void;
}

export default function ProductCard({ product, onBook }: ProductCardProps) {
  return (
    <div className="product-card-theme flex flex-col h-full">
      <div className="w-full h-20 bg-[#ecece4] mb-2.5 flex items-center justify-center text-[10px] text-stone-400 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-[13px] text-stone-900 mb-1">
          {product.name}
        </h3>
        <p className="text-[11px] text-stone-500 mb-2.5 leading-[1.3] line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <span className="font-bold text-sm text-stone-900">₹{product.price}</span>
          <button 
            onClick={() => onBook(product)}
            className="bg-primary text-white border-none px-3 py-1.5 text-[10px] font-bold cursor-pointer uppercase hover:bg-primary/90 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
