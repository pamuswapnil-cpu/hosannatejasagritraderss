import { CONTACT_INFO } from '@/src/constants';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="contact-info">
      <span className="section-title">Store Details</span>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-[12px]">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span><strong>Call:</strong> {CONTACT_INFO.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-[12px]">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span><strong>WhatsApp:</strong> Quick Order Available</span>
        </div>
        <div className="flex items-center gap-2 text-[12px]">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span><strong>Open:</strong> {CONTACT_INFO.hours.split(',')[0]}</span>
        </div>
      </div>

      <div className="text-[11px] text-stone-500 leading-relaxed">
        {CONTACT_INFO.address}
      </div>
      
      <div className="mt-4">
        <span className="bg-accent text-white px-1.5 py-0.5 text-[9px] rounded-full font-bold uppercase">
          Telugu Support Available
        </span>
      </div>
    </div>
  );
}
