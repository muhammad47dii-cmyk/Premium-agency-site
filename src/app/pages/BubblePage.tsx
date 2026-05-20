import { Code, Database, Lock, Rocket, Workflow, Zap } from "lucide-react";
import { ServicePage } from "../components/ServicePage";

export function BubblePage() {
  return (
    <ServicePage
      accent="bubble"
      eyebrow="Bubble Web App Development"
      title="No-code web apps and MVPs that look ready for market."
      description="We build Bubble applications for founders and teams who need working products, dashboards, marketplaces, and internal tools without months of custom engineering."
      heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800&h=1200&fit=crop"
      primaryCta="Launch Your App"
      whatsappMessage="Hi, I want to build a Bubble web app or MVP. Can we discuss my project?"
      stats={["MVPs in weeks", "Dashboards and workflows", "API and payment integrations"]}
      featuresTitle="Everything a real product needs"
      featuresSubtitle="Your Bubble build gets the structure, workflows, and interface polish needed to test, launch, and iterate."
      features={[
        {
          icon: <Rocket className="h-6 w-6" />,
          title: "Rapid MVP Development",
          description: "Launch a working version of your idea quickly so you can validate with real users.",
        },
        {
          icon: <Database className="h-6 w-6" />,
          title: "Database Design",
          description: "Clean data models that support your app logic today and future expansion later.",
        },
        {
          icon: <Workflow className="h-6 w-6" />,
          title: "Custom Workflows",
          description: "Business logic, automations, notifications, and user journeys built directly in Bubble.",
        },
        {
          icon: <Lock className="h-6 w-6" />,
          title: "User Authentication",
          description: "Secure login, profile flows, user roles, and permission-aware interfaces.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "API Integrations",
          description: "Connect payments, email, CRMs, analytics, and the external tools your product needs.",
        },
        {
          icon: <Code className="h-6 w-6" />,
          title: "Dashboard Interfaces",
          description: "Admin panels, customer portals, and internal tools that feel structured and usable.",
        },
      ]}
      showcaseTitle="Products and tools we can build"
      showcaseSubtitle="Bubble is a strong fit for fast-moving products where workflow clarity matters as much as visual polish."
      showcases={[
        {
          title: "SaaS Platforms",
          description: "Subscription products with roles, billing, dashboards, and customer workflows.",
          image: "https://images.unsplash.com/photo-1675495666895-9091741bfd78?w=800&h=600&fit=crop",
        },
        {
          title: "Marketplaces",
          description: "Two-sided platforms with listings, profiles, messaging, and transaction flows.",
          image: "https://images.unsplash.com/photo-1593720218365-b2076cfdefee?w=800&h=600&fit=crop",
        },
        {
          title: "Internal Tools",
          description: "Operational dashboards, approval flows, reporting views, and team workspaces.",
          image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800&h=600&fit=crop",
        },
      ]}
      pricingTitle="Bubble development packages"
      pricingSubtitle="Fixed scopes for predictable budgets, from lean prototypes to richer product builds."
      pricing={[
        {
          name: "MVP Starter",
          price: "$599",
          description: "For testing a startup idea with a focused working product.",
          features: [
            "Basic app functionality",
            "User authentication",
            "Database setup",
            "5 app pages",
            "Mobile responsive",
            "1 week delivery",
          ],
        },
        {
          name: "Full Product",
          price: "$1,999",
          description: "For launching a more complete product with workflows and integrations.",
          features: [
            "Advanced features",
            "Custom workflows",
            "API integrations",
            "Admin dashboard",
            "User roles and permissions",
            "Payment integration",
          ],
          popular: true,
        },
        {
          name: "Enterprise App",
          price: "$4,999",
          description: "For complex business applications and multi-user systems.",
          features: [
            "Everything in Full Product",
            "Advanced automation",
            "Custom integrations",
            "Multi-tenant architecture",
            "Advanced analytics",
            "Dedicated support",
          ],
        },
      ]}
      finalTitle="Ready to turn the idea into a usable app?"
      finalSubtitle="Send the workflow, sketch, or product brief. We will help you shape a focused build plan and launch path."
    />
  );
}
