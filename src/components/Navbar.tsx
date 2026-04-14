import { useState, useEffect } from 'react';
import { Leaf, ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CONTACT_INFO } from '@/src/constants';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Bulk Orders', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="h-20 bg-white border-b-2 border-primary fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10">
      <div className="flex flex-col">
        <h1 className="font-serif text-[22px] font-extrabold text-primary tracking-[0.5px] uppercase leading-none">
          HOSANNA TEJAS
        </h1>
        <p className="text-[11px] text-secondary tracking-[1.5px] font-semibold mt-1">
          AGRI TRADERS
        </p>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex list-none gap-6 text-[13px] font-semibold uppercase text-foreground">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white text-[10px] font-bold uppercase rounded-none px-4">
          Help Desk
        </Button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase text-foreground hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
