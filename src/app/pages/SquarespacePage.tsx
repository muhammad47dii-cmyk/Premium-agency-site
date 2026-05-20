import { BarChart, Image, Layout, Palette, ShoppingCart, Smartphone } from "lucide-react";
import { ServicePage } from "../components/ServicePage";

export function SquarespacePage() {
  return (
    <ServicePage
      accent="squarespace"
      eyebrow="Squarespace Website Design"
      title="Elegant Squarespace websites that make your brand feel premium."
      description="We design Squarespace websites for service businesses, portfolios, creative brands, and online stores that need a refined presence and a clear path to inquiries."
      heroImage="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1800&h=1200&fit=crop"
      primaryCta="Start Your Website"
      whatsappMessage="Hi, I want a Squarespace website. Can we discuss my project?"
      stats={["Premium visual direction", "Portfolio and service pages", "SEO-ready structure"]}
      featuresTitle="A polished site with purpose"
      featuresSubtitle="Squarespace is strongest when design, content, and conversion flow are carefully arranged together."
      features={[
        {
          icon: <Layout className="h-6 w-6" />,
          title: "Service Business Websites",
          description: "Clean pages for agencies, consultants, coaches, local businesses, and professional teams.",
        },
        {
          icon: <Image className="h-6 w-6" />,
          title: "Portfolio & Personal Brands",
          description: "Gallery and case-study layouts that let your work feel curated and easy to browse.",
        },
        {
          icon: <ShoppingCart className="h-6 w-6" />,
          title: "Ecommerce Ready",
          description: "Sell products, services, digital offers, or bookings directly through your website.",
        },
        {
          icon: <Palette className="h-6 w-6" />,
          title: "Custom Design & Branding",
          description: "Typography, color, spacing, and section design tailored to your brand identity.",
        },
        {
          icon: <BarChart className="h-6 w-6" />,
          title: "Conversion-Focused Layouts",
          description: "Pages arranged to build trust, explain value, and move visitors toward action.",
        },
        {
          icon: <Smartphone className="h-6 w-6" />,
          title: "Mobile Optimized",
          description: "A smooth experience across phones, tablets, laptops, and large screens.",
        },
      ]}
      showcaseTitle="Squarespace websites we have built"
      showcaseSubtitle="From consulting firms to creative studios, these builds balance brand polish with practical business goals."
      showcases={[
        {
          title: "Brevis Consulting",
          category: "Consulting Firm",
          image: "https://media.istockphoto.com/id/1413761479/photo/mature-couple-meeting-financial-advisor-for-investment.jpg?s=612x612&w=0&k=20&c=kKraGQ3d_90VsQVIwAx6mi3gNsiytiLT9jlEbmEh1lE=",
          url: "https://brevisconsulting.com",
        },
        {
          title: "ALW Studios",
          category: "Creative Studio",
          image: "https://media.istockphoto.com/id/1304287268/photo/studio-of-successful-artist.jpg?s=612x612&w=0&k=20&c=o1xN605yJnQxs7bzR2GwHhuqbLn_ph2oWDtV5oAMO5w=",
          url: "https://alwstudios.com",
        },
        {
          title: "The Lynn House",
          category: "Hospitality / Nonprofit",
          image: "https://media.istockphoto.com/id/1727988638/photo/community-services-young-team-of-people-helping-the-local-community.jpg?s=612x612&w=0&k=20&c=o_fpxdFrLExWud5ZEFKn94iq48Tn3Zhn34nSXzFchX0=",
          url: "https://www.thelynnhouse.org",
        },
        {
          title: "Vernon Staffing",
          category: "Recruitment Agency",
          image: "https://media.istockphoto.com/id/1907187799/photo/business-people-waiting-for-job-interview.jpg?s=612x612&w=0&k=20&c=4_FHZ1PP702O3eUAASOUCqKduZeTaGJvlcj-RPdidJY=",
          url: "https://www.vernonstaffing.com",
        },
        {
          title: "Oregon Care Home Council",
          category: "Care Association",
          image: "https://media.istockphoto.com/id/602320994/photo/tea-and-cake-in-the-care-home.jpg?s=612x612&w=0&k=20&c=F55-2g0hwqaqg-VmlZxO9j-Zv1Jd_kfgPWS5AjEX1OM=",
          url: "https://www.oregoncarehomecouncil.com",
        },
        {
          title: "Gold Maple Group",
          category: "Business Consulting",
          image: "https://media.istockphoto.com/id/1927881398/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=N0erlm9rQIa_kdBpwxSOa8E1my9bwY_oeN84wZIhais=",
          url: "https://www.goldmaplegroup.com",
        },
      ]}
      pricingTitle="Squarespace pricing"
      pricingSubtitle="Premium design, practical scope, and clear delivery expectations."
      pricing={[
        {
          name: "Starter Website",
          price: "$199",
          description: "For new brands, personal sites, and simple service websites.",
          features: [
            "Up to 5 pages",
            "Portfolio gallery",
            "Mobile-responsive design",
            "Custom fonts and colors",
            "Contact form",
            "48-hour delivery",
          ],
        },
        {
          name: "Business Website",
          price: "$399",
          description: "For growing businesses that need a fuller and more persuasive site.",
          features: [
            "Up to 12 pages",
            "Advanced gallery layouts",
            "Custom animation polish",
            "Blog integration",
            "Testimonials section",
            "SEO optimization",
          ],
          popular: true,
        },
        {
          name: "Premium Website",
          price: "$599",
          description: "For brands that want a high-end, fully customized presence.",
          features: [
            "Unlimited pages",
            "Fully custom design",
            "Video integration",
            "Ecommerce features",
            "Member areas",
            "Priority support",
          ],
        },
      ]}
      finalTitle="Ready for a Squarespace site that feels considered?"
      finalSubtitle="Whether you are a business, brand, or creative, we will help you launch a site that earns trust quickly."
    />
  );
}
