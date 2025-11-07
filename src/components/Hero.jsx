import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-700">
              <CheckCircle2 className="text-blue-600" size={14} />
              Fast. Secure. Reliable.
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Smart logistics solutions for modern businesses
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Streamline your supply chain with real-time tracking, on-time delivery, and end-to-end transparency across road, air, and sea.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                Get a Quote
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-black/10 text-gray-800 bg-white hover:bg-gray-50">
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['24/7 Support', 'GPS Tracking', 'Global Network', 'Insured'].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="text-green-600" size={18} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <img
                src="https://images.unsplash.com/photo-1542315192-1f61a1792f42?q=80&w=1600&auto=format&fit=crop"
                alt="Freight logistics"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-4">
              <p className="text-sm font-medium text-gray-800">On-time delivery rate</p>
              <p className="text-2xl font-bold text-gray-900">98.7%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
