import { motion } from "motion/react";
import { ShoppingCart, TrendingUp, CreditCard, Package, BarChart, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

export function ShopifyPage() {
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
      price: "$499",
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
      price: "$1,499",
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
      price: "$3,499",
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
      title: "Fashion Boutique",
      image: "https://images.unsplash.com/photo-1646193186175-4ec30e6e5882?w=800&h=600&fit=crop",
      result: "+127% Sales",
    },
    {
      title: "Luxury Accessories",
      image: "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?w=800&h=600&fit=crop",
      result: "+215% Revenue",
    },
    {
      title: "Home Decor Store",
      image: "https://images.unsplash.com/photo-1674027392887-751d6396b710?w=800&h=600&fit=crop",
      result: "+89% Conversion",
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
                  href="https://wa.me/447877406516"
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
                src="https://images.unsplash.com/photo-1539278383962-a7774385fa02?w=1200&h=900&fit=crop"
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
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
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
                  href="https://wa.me/447877406516"
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
              href="https://wa.me/447877406516"
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
