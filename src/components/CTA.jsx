import { Mail, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Ready to move your business forward?</h2>
            <p className="mt-3 text-blue-100">Speak with a logistics specialist to get a tailored quote and transit times for your route.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="mailto:sales@logix.com" className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50">
                <Mail size={18} />
                Email Sales
              </a>
              <a href="tel:+18001234567" className="inline-flex items-center gap-2 bg-blue-500/20 ring-1 ring-inset ring-white/30 px-6 py-3 rounded-md hover:bg-white/10">
                <PhoneCall size={18} />
                Call Now
              </a>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 ring-1 ring-white/20">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-blue-100">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border-0 focus:ring-2 focus:ring-white/60 text-gray-900 px-3 py-2" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-blue-100">Company</label>
                <input type="text" className="mt-1 w-full rounded-md border-0 focus:ring-2 focus:ring-white/60 text-gray-900 px-3 py-2" placeholder="Acme Inc." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-blue-100">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-0 focus:ring-2 focus:ring-white/60 text-gray-900 px-3 py-2" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-blue-100">What do you need to ship?</label>
                <textarea className="mt-1 w-full rounded-md border-0 focus:ring-2 focus:ring-white/60 text-gray-900 px-3 py-2" rows={4} placeholder="Freight type, origin, destination, timing..." />
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full bg-white text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-50">Request Quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
