import { Link } from "react-router";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Mustapha Studio</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Building high-performing websites and Shopify stores designed to increase sales and grow your business.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:mustaphamuhammedpro@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} />
                mustaphamuhammedpro@gmail.com
              </a>
              <a href="https://wa.me/447877406516" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/shopify" className="hover:text-white transition-colors">Shopify Design</Link></li>
              <li><Link to="/wix" className="hover:text-white transition-colors">Wix Design</Link></li>
              <li><Link to="/squarespace" className="hover:text-white transition-colors">Squarespace Design</Link></li>
              <li><Link to="/bubble" className="hover:text-white transition-colors">Bubble Web Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mustapha Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
