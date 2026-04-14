import { Leaf, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                HOSANNA TEJAS
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Your Trusted Partner in Farming Success. Providing high-quality agricultural products and expert guidance to farmers across the region.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Categories</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#products" className="hover:text-primary transition-colors">Fertilizers</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Pesticides</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Seeds</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Tools</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Growth Regulators</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">P:</span>
                {CONTACT_INFO.phone}
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">E:</span>
                {CONTACT_INFO.email}
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">A:</span>
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 HOSANNA TEJAS AGRI TRADERS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
