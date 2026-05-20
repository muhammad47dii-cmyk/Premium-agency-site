import {
  BarChart,
  CreditCard,
  Package,
  ShoppingCart,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { ServicePage } from "../components/ServicePage";

export function ShopifyPage() {
  return (
    <ServicePage
      accent="shopify"
      eyebrow="Shopify Store Design"
      title="Shopify stores built to sell from the first click."
      description="We design conversion-focused Shopify stores with clear product journeys, fast mobile shopping, and checkout flows that make buying feel effortless."
      heroImage="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1800&h=1200&fit=crop"
      primaryCta="Start Your Store"
      whatsappMessage="Hi, I want to start a Shopify store. Can we discuss my project?"
      stats={["48-72 hour delivery", "Mobile-first storefronts", "Checkout and product setup"]}
      featuresTitle="A sharper shopping experience"
      featuresSubtitle="Every store is planned around product discovery, trust, and a clean path to checkout."
      features={[
        {
          icon: <ShoppingCart className="h-6 w-6" />,
          title: "Optimized Product Pages",
          description: "High-converting layouts with stronger imagery, benefit-led copy, and clear buy actions.",
        },
        {
          icon: <CreditCard className="h-6 w-6" />,
          title: "Seamless Checkout",
          description: "A clean cart and checkout experience designed to reduce hesitation and abandoned orders.",
        },
        {
          icon: <Smartphone className="h-6 w-6" />,
          title: "Mobile-First Design",
          description: "Fast, thumb-friendly browsing for customers shopping from any screen size.",
        },
        {
          icon: <BarChart className="h-6 w-6" />,
          title: "Analytics Setup",
          description: "Performance tracking so you can see what works and improve campaigns with confidence.",
        },
        {
          icon: <Package className="h-6 w-6" />,
          title: "Catalog Structure",
          description: "Collections, filters, and product organization that help shoppers find the right item.",
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "Conversion Polish",
          description: "Trust signals, offer placement, and UX refinements that support more completed purchases.",
        },
      ]}
      showcaseTitle="Recent Shopify projects"
      showcaseSubtitle="A selection of store builds across fashion, accessories, home goods, and ecommerce brands."
      showcases={[
        {
          title: "Bowland Sleek",
          category: "Fashion Store",
          image: "https://media.istockphoto.com/id/1223414833/photo/clean-saucepan-on-a-gas-stove-in-kitchen.jpg?s=612x612&w=0&k=20&c=U1L33o9BH9qXtfexlWleX0Y5qGy4es0ySk1Drgq_oxk=",
          url: "https://www.bowlandsleek.com",
        },
        {
          title: "Shop Esmeralda",
          category: "Jewelry Store",
          image: "https://shopesmeralda.com/cdn/shop/files/Crystal_Bloom.png?v=1764842849&width=533",
          url: "https://shopesmeralda.com",
        },
        {
          title: "Bambu Jutes",
          category: "Eco Ecommerce",
          image: "https://media.istockphoto.com/id/1269322182/photo/kitchenware-made-from-dried-betel-nut-leaf-palm.jpg?s=612x612&w=0&k=20&c=iSOHM0yPR7IaiAZ3tNIUNS0uDb2v8wAo-0yRDF_DA0w=",
          url: "https://bambujutes.com",
        },
        {
          title: "Lula Boutique",
          category: "Boutique Store",
          image: "https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=",
          url: "https://www.shoplulaboutique.com",
        },
        {
          title: "Alberenz",
          category: "Accessories Store",
          image: "https://media.istockphoto.com/id/2251015222/photo/contemporary-office-desk-setup-with-multiple-screens-and-documents.jpg?s=612x612&w=0&k=20&c=5A2UdtY891ELzQSfhWAXBmm5maGHPJjzpG0iL7-xTeg=",
          url: "https://alberenz.com",
        },
        {
          title: "Polar Hugs",
          category: "Outdoor Essentials",
          image: "https://media.istockphoto.com/id/1158244924/photo/beautiful-woman-hiding-face-in-woolen-scarf.jpg?s=612x612&w=0&k=20&c=5MK1qJIbrIwFGrXJEpv2XioPxahkQj9n4YZFq80Ibeo=",
          url: "https://polarhugs.com",
        },
      ]}
      pricingTitle="Transparent Shopify packages"
      pricingSubtitle="Choose the level of build that matches where your store is today and where it needs to go next."
      pricing={[
        {
          name: "Starter Store",
          price: "$199",
          description: "For new businesses launching a clean, professional first store.",
          features: [
            "Up to 25 products",
            "Mobile-responsive theme setup",
            "Payment gateway setup",
            "Basic SEO foundations",
            "48-72 hour delivery",
          ],
        },
        {
          name: "Professional Store",
          price: "$299",
          description: "For growing stores that need stronger merchandising and conversion flow.",
          features: [
            "Unlimited products",
            "Custom theme sections",
            "Advanced product filtering",
            "Enhanced checkout flow",
            "Marketing integrations",
            "Priority support",
          ],
          popular: true,
        },
        {
          name: "Enterprise Store",
          price: "$599",
          description: "For established brands that need custom systems and premium polish.",
          features: [
            "Everything in Professional",
            "Custom app support",
            "Advanced automation",
            "Multi-language support",
            "Custom integrations",
            "Dedicated account support",
          ],
        },
      ]}
      finalTitle="Ready to launch a store customers trust?"
      finalSubtitle="Send the idea, product list, or current store link and we will help you shape the fastest path to launch."
    />
  );
}
