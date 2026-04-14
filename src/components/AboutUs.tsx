import { CheckCircle2, Users, TrendingUp, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reliable Agri Supplier",
      description: "Serving thousands of farmers with dedication and integrity for over a decade."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase Your Yield",
      description: "Our products are scientifically tested to ensure maximum productivity and crop health."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality Products",
      description: "We only stock certified brands that meet international agricultural standards."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Our in-house agronomists provide free consultation to help you choose the right inputs."
    }
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200" 
                alt="Farmer in field" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-0" />
            
            <div className="absolute bottom-6 left-6 glass p-6 rounded-xl shadow-xl z-20 max-w-[240px]">
              <div className="text-4xl font-bold text-primary mb-1">14+</div>
              <div className="text-stone-600 font-medium leading-tight">Years of Excellence in Agriculture</div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Our Shop</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Empowering Farmers with <span className="text-primary italic serif">Quality & Expertise</span>
            </h2>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed">
              HOSANNA TEJAS AGRI TRADERS started with a simple mission: to provide farmers with the best possible tools and inputs to succeed. We understand the challenges of modern farming and offer solutions that are both effective and sustainable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-stone-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
