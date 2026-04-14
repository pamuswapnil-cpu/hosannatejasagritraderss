import { TESTIMONIALS } from '@/src/constants';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Voices of <span className="text-accent italic serif">Success</span></h2>
          <p className="text-white/70">
            Hear from the farmers who have transformed their fields with our products and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-white/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < t.rating ? 'text-accent fill-accent' : 'text-white/20'}`} 
                  />
                ))}
              </div>
              <p className="text-lg mb-6 italic text-white/90 leading-relaxed">
                "{t.comment}"
              </p>
              <div>
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-white/60 text-sm">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
