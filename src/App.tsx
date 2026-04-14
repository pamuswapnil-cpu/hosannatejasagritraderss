import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { Product } from './types';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'TE'>('EN');

  const handleBook = (product: Product) => {
    setSelectedProduct(product);
    setIsBookingOpen(true);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'TE' : 'EN');
  };

  return (
    <div className={`h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary overflow-hidden ${language === 'TE' ? 'font-serif' : 'font-sans'}`}>
      <Navbar />
      
      <main className="flex-1 mt-20 grid grid-cols-1 lg:grid-cols-[300px_1fr_280px] gap-0 overflow-hidden">
        {/* Sidebar Left: Heritage & Promo */}
        <section className="bg-white border-r border-border p-[30px] flex flex-col justify-between h-full overflow-y-auto hidden lg:flex">
          <Hero />
        </section>

        {/* Main Content: Products */}
        <section className="p-[20px_30px] bg-background overflow-hidden flex flex-col h-full">
          <ProductSection onBook={handleBook} />
        </section>

        {/* Sidebar Right: Booking & Contact */}
        <section className="bg-[#fffcf5] p-[30px] border-l border-border h-full overflow-y-auto hidden lg:flex flex-col">
          <span className="section-title">Quick Booking</span>
          <div className="mb-8">
            <p className="text-[11px] text-stone-500 mb-4">Select a product from the list to start booking.</p>
            {selectedProduct ? (
              <div className="bg-white p-4 border border-border rounded-sm mb-4">
                <div className="text-[10px] uppercase font-bold text-secondary mb-1">Selected Product</div>
                <div className="text-sm font-bold text-primary">{selectedProduct.name}</div>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="p-0 h-auto text-[10px] text-stone-400"
                  onClick={() => setSelectedProduct(null)}
                >
                  Change
                </Button>
              </div>
            ) : null}
            <Button 
              onClick={() => setIsBookingOpen(true)}
              disabled={!selectedProduct}
              className="w-full bg-primary text-white text-[12px] font-bold uppercase rounded-none py-6"
            >
              {selectedProduct ? 'Proceed to Booking' : 'Select a Product'}
            </Button>
          </div>

          <Contact />
          
          <div className="mt-auto pt-6 border-t border-dashed border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold text-stone-900">Telugu Support Available</span>
            </div>
            <p className="text-[10px] text-stone-400">© 2024 HOSANNA TEJAS AGRI TRADERS</p>
          </div>
        </section>

        {/* Mobile View Sections (Stacked) */}
        <div className="lg:hidden flex flex-col overflow-y-auto">
          <div className="p-8 bg-white border-b border-border">
            <Hero />
          </div>
          <div className="p-8 bg-[#fffcf5]">
            <Contact />
          </div>
        </div>
      </main>

      <BookingForm 
        product={selectedProduct} 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      {/* Language Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={toggleLanguage}
          className="rounded-full w-14 h-14 shadow-2xl bg-white text-primary hover:bg-primary hover:text-white border-2 border-primary/20"
        >
          <Globe className="w-6 h-6 mr-1" />
          <span className="font-bold">{language === 'EN' ? 'TE' : 'EN'}</span>
        </Button>
      </div>
    </div>
  );
}
