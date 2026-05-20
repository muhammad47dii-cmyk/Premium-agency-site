import { Briefcase, Calendar, Globe, Mail, Users, Zap } from "lucide-react";
import { ServicePage } from "../components/ServicePage";

export function WixPage() {
  return (
    <ServicePage
      accent="wix"
      eyebrow="Wix Website Design"
      title="Business websites that turn visitors into real leads."
      description="We create modern Wix websites for coaches, consultants, service providers, and local businesses that need credibility, clarity, and consistent inquiries."
      heroImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&h=1200&fit=crop"
      primaryCta="Start Your Website"
      whatsappMessage="Hi, I want a Wix website for my business. Can we discuss my project?"
      stats={["Lead-focused structure", "Booking and forms setup", "Built for service businesses"]}
      featuresTitle="Everything your business site needs"
      featuresSubtitle="From the first impression to the contact form, every section is tuned to make your offer easier to understand and act on."
      features={[
        {
          icon: <Briefcase className="h-6 w-6" />,
          title: "Professional Branding",
          description: "A clean visual system that makes your business feel established and trustworthy.",
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Lead Generation",
          description: "Strong calls-to-action, smart page flow, and inquiry forms that encourage qualified leads.",
        },
        {
          icon: <Mail className="h-6 w-6" />,
          title: "Email Integration",
          description: "Connect your forms and contact paths to the tools you already use.",
        },
        {
          icon: <Calendar className="h-6 w-6" />,
          title: "Booking Systems",
          description: "Appointment scheduling for consultants, coaches, clinics, and service teams.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "SEO Foundations",
          description: "Page titles, structure, and content hierarchy that help your site get found.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Fast Loading UX",
          description: "Lightweight sections and tidy layouts that keep users moving smoothly.",
        },
      ]}
      showcaseTitle="Perfect for service-led businesses"
      showcaseSubtitle="Wix works beautifully for teams that need a polished web presence without unnecessary complexity."
      showcases={[
        {
          title: "Coaches & Consultants",
          description: "Showcase expertise, build authority, and make booking the next step obvious.",
          image: "https://images.unsplash.com/photo-1594892185343-0241e1d47d15?w=800&h=600&fit=crop",
        },
        {
          title: "Service Providers",
          description: "Explain services clearly and guide prospects toward calls, quotes, or appointments.",
          image: "https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=800&h=600&fit=crop",
        },
        {
          title: "Small Businesses",
          description: "Build credibility with a website that feels current, organized, and easy to use.",
          image: "https://images.unsplash.com/photo-1491252027976-a03f31b9df00?w=800&h=600&fit=crop",
        },
      ]}
      pricingTitle="Simple Wix pricing"
      pricingSubtitle="Clear packages for businesses that want a polished site without a long build cycle."
      pricing={[
        {
          name: "Basic Business",
          price: "$199",
          description: "For solo entrepreneurs, freelancers, and early-stage services.",
          features: [
            "Up to 5 pages",
            "Mobile-responsive design",
            "Contact form",
            "Basic SEO setup",
            "Social links",
            "48-hour delivery",
          ],
        },
        {
          name: "Professional Business",
          price: "$399",
          description: "For growing businesses that need stronger conversion paths.",
          features: [
            "Up to 10 pages",
            "Custom design direction",
            "Lead capture forms",
            "Booking system integration",
            "Email marketing setup",
            "72-hour delivery",
          ],
          popular: true,
        },
        {
          name: "Premium Business",
          price: "$799",
          description: "For established teams that need advanced features and fuller content.",
          features: [
            "Unlimited pages",
            "Full custom design",
            "Advanced integrations",
            "Member areas",
            "Ecommerce features",
            "Priority support",
          ],
        },
      ]}
      finalTitle="Ready for a website that brings in better inquiries?"
      finalSubtitle="Tell us what you offer, who you serve, and what you want visitors to do next. We will turn that into a clearer site."
    />
  );
}
