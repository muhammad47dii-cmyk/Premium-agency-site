import { motion } from "motion/react";
import { ShoppingCart, TrendingUp, CreditCard, Package, BarChart, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

export function ShopifyPage() {

  const createWhatsAppLink = (message: string) => {
  const phone = "447877406516";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Optimized Product Pages",
      description: "High-converting product displays with compelling visuals and clear calls-to-action",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Seamless Checkout",
      description: "Streamlined checkout process that reduces cart abandonment",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Perfect shopping experience on all devices",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics Integration",
      description: "Track performance and optimize for maximum revenue",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Clean integration with your product catalog",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion Optimization",
      description: "Built-in best practices to maximize sales",
    },
  ];

  const pricing = [
    {
      name: "Starter Store",
      price: "$99",
      description: "Perfect for new businesses launching their first store",
      features: [
        "Up to 25 products",
        "Mobile-responsive design",
        "Basic theme customization",
        "Payment gateway setup",
        "SEO optimization",
        "48-72 hour delivery",
      ],
    },
    {
      name: "Professional Store",
      price: "$299",
      description: "Ideal for growing businesses ready to scale",
      features: [
        "Unlimited products",
        "Custom theme development",
        "Advanced product filtering",
        "Enhanced checkout flow",
        "Marketing integrations",
        "Priority support",
        "72-hour delivery",
      ],
      popular: true,
    },
    {
      name: "Enterprise Store",
      price: "$999",
      description: "For established brands needing premium features",
      features: [
        "Everything in Professional",
        "Custom app development",
        "Advanced automation",
        "Multi-language support",
        "Custom integrations",
        "Dedicated account manager",
        "24-hour rush available",
      ],
    },
  ];

  const portfolio = [
  {
    title: "Bowland Sleek",
    image: "https://media.istockphoto.com/id/1223414833/photo/clean-saucepan-on-a-gas-stove-in-kitchen.jpg?s=612x612&w=0&k=20&c=U1L33o9BH9qXtfexlWleX0Y5qGy4es0ySk1Drgq_oxk=",
    result: "Premium Fashion Store",
    url: "https://www.bowlandsleek.com",
  },
  {
    title: "Shop Esmeralda",
    image: "https://shopesmeralda.com/cdn/shop/files/Crystal_Bloom.png?v=1764842849&width=533",
    result: "Jewelry Store",
    url: "https://shopesmeralda.com",
  },
  {
    title: "Lula Boutique",
    image: "https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=",
    result: "Boutique Store",
    url: "https://www.shoplulaboutique.com",
  },
  {
    title: "Bambu Jutes",
    image: "https://media.istockphoto.com/id/1269322182/photo/kitchenware-made-from-dried-betel-nut-leaf-palm.jpg?s=612x612&w=0&k=20&c=iSOHM0yPR7IaiAZ3tNIUNS0uDb2v8wAo-0yRDF_DA0w=",
    result: "Eco E-commerce",
    url: "https://bambujutes.com",
  },
  {
    title: "Alberenz",
    image: "https://media.istockphoto.com/id/2251015222/photo/contemporary-office-desk-setup-with-multiple-screens-and-documents.jpg?s=612x612&w=0&k=20&c=5A2UdtY891ELzQSfhWAXBmm5maGHPJjzpG0iL7-xTeg=",
    result: "Computer Accessories Store",
    url: "https://alberenz.com",
  },
  {
    title: "Polar Hugs",
    image: "https://media.istockphoto.com/id/1158244924/photo/beautiful-woman-hiding-face-in-woolen-scarf.jpg?s=612x612&w=0&k=20&c=5MK1qJIbrIwFGrXJEpv2XioPxahkQj9n4YZFq80Ibeo=",
    result: "Outdoor Essentials Store",
    url: "https://polarhugs.com",
  },
];
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                🛍️ Shopify Store Design
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Shopify Stores That Drive Sales
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                We design high-converting Shopify stores with optimized product pages, seamless checkout flows, and sales-focused design that turns browsers into buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
href={createWhatsAppLink(
  "Hi, I want to start a Shopify store. Can we discuss my project?"
)}
target="_blank"
className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Store
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#pricing"
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 inline-flex items-center justify-center hover:border-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://cdn.dribbble.com/userupload/12668306/file/original-cc40fb8a3eb75e57e13675bc79c7f5fd.png?resize=1504x1128&vertical=center"
                alt="Shopify store design"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a successful online store
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recent Shopify Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stores, real results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
  <a href={project.url} target="_blank" rel="noopener noreferrer">
    <motion.div key={project.title}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-purple-600">
                      {project.result}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
  </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? "text-purple-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-purple-600"}`} />
                      <span className={plan.popular ? "text-purple-50" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={createWhatsAppLink(
  `Hi, I'm interested in the ${plan.name}. Can you help me get started?`
)}
target="_blank"
                  className={`block w-full px-6 py-3 rounded-full font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Launch Your Shopify Store?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Get started today and watch your sales grow
            </p>
            <motion.a
             href={createWhatsAppLink(
  "Hi, I’d like help launching my Shopify store. Let’s get started."
)}
target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
