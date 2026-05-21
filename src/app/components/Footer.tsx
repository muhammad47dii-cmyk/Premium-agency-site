import { Link } from "react-router";
import { ArrowRight, Facebook, Mail, Phone } from "lucide-react";
import { createEmailLink, createFacebookLink } from "./ContactActions";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white">Mustapha Studio</h3>
            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Building high-performing websites, stores, videos, and no-code products designed to earn trust and turn attention into action.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={createEmailLink(
                  "Website project inquiry",
                  "Hi Mustapha Studio, I want to discuss a website project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                mustaphamuhammedpro@gmail.com
              </a>
              <a
                href="https://wa.me/447877406516"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={createFacebookLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Facebook className="h-4 w-4" />
                Message on Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/shopify" className="hover:text-white transition">Shopify Design</Link></li>
              <li><Link to="/wix" className="hover:text-white transition">Wix Design</Link></li>
              <li><Link to="/squarespace" className="hover:text-white transition">Squarespace Design</Link></li>
              <li><Link to="/bubble" className="hover:text-white transition">Bubble Web Apps</Link></li>
              <li><Link to="/video-editing" className="hover:text-white transition">Video Editing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/#portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/#testimonials" className="hover:text-white transition">Testimonials</Link></li>
              <li><Link to="/#contact" className="inline-flex items-center gap-2 text-white hover:text-cyan-200 transition">Get a Quote <ArrowRight className="h-4 w-4" /></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mustapha Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
