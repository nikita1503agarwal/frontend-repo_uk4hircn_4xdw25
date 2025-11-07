import { Truck, Ship, Plane, Package } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Road Freight',
    desc: 'Nationwide trucking with flexible capacity, dedicated lanes, and live tracking.'
  },
  {
    icon: Plane,
    title: 'Air Freight',
    desc: 'Time-critical air cargo solutions with customs clearance and door-to-door service.'
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    desc: 'Full-container and less-than-container loads with global carrier partnerships.'
  },
  {
    icon: Package,
    title: 'Warehousing',
    desc: 'Secure storage, cross-docking, and fulfillment integrated with your systems.'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive logistics services</h2>
          <p className="mt-3 text-gray-600">One partner for planning, transport, storage, and last-mile delivery.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-black/10 p-5 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm text-blue-700 hover:text-blue-800">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
