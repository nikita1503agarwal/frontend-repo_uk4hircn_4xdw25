import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">L</div>
            <span className="font-semibold text-gray-900 text-lg">Logix</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+18001234567" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
              <Phone size={16} />
              Call Us
            </a>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10" onClick={() => setOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">L</div>
                <span className="font-semibold text-gray-900 text-base">Logix</span>
              </div>
              <button aria-label="Close menu" className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-black/10" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-gray-800">
                  {item.label}
                </a>
              ))}
              <a href="tel:+18001234567" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
