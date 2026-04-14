import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Product } from '@/src/types';
import { CheckCircle2, PhoneCall } from 'lucide-react';

interface BookingFormProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ product, isOpen, onClose }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-none border-2 border-primary">
        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">Order Received!</h3>
            <p className="text-sm text-stone-500 mb-6">
              Thank you, {formData.name}. We will call you shortly to confirm your order for {product?.name}.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-serif uppercase tracking-wider text-primary">Quick Booking</DialogTitle>
              <DialogDescription className="text-xs uppercase font-bold text-secondary">
                {product?.name}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="name" className="text-[10px] font-bold uppercase text-secondary">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                  className="rounded-none border-border focus-visible:ring-primary h-10 text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="phone" className="text-[10px] font-bold uppercase text-secondary">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  required 
                  className="rounded-none border-border focus-visible:ring-primary h-10 text-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="quantity" className="text-[10px] font-bold uppercase text-secondary">Quantity</Label>
                  <Input 
                    id="quantity" 
                    type="number" 
                    min="1" 
                    required 
                    className="rounded-none border-border focus-visible:ring-primary h-10 text-sm"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-[10px] font-bold uppercase text-secondary">Payment</Label>
                  <div className="h-10 flex items-center px-3 border border-border bg-stone-50 text-[12px]">
                    COD
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="address" className="text-[10px] font-bold uppercase text-secondary">Delivery Address</Label>
                <Textarea 
                  id="address" 
                  placeholder="Enter your full address" 
                  required 
                  className="rounded-none border-border focus-visible:ring-primary min-h-[80px] text-sm"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <DialogFooter className="pt-4">
                <Button type="submit" className="w-full bg-primary text-white text-[12px] font-bold uppercase rounded-none py-6">Confirm Booking</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
