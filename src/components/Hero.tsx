import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sprout, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="about-section">
        <span className="section-title">Heritage</span>
        <h2 className="text-[32px] leading-[1.2] text-primary mb-5 font-serif font-bold">
          Rooted in Trust,<br />Growing for You.
        </h2>
        <p className="text-sm leading-[1.5] text-stone-600">
          Since 1998, Hosanna Tejas has been the backbone of local agriculture, providing premium grade fertilizers and seeds to over 5,000 farmers across the region.
        </p>
      </div>
      
      <div className="promo-banner bg-primary text-white p-5 rounded-sm mt-auto">
        <h3 className="text-sm mb-2 text-accent font-bold uppercase tracking-wider">Monsoon Offer 2024</h3>
        <p className="text-xs leading-[1.4] opacity-90">
          Get up to 15% discount on all Organic Pesticides and Vegetable Seed bundles. <br />
          <strong>Valid till July 30.</strong>
        </p>
      </div>
    </div>
  );
}
