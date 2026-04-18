import { motion } from "motion/react";
import { Rocket, Database, Workflow, Lock, Zap, Code, ArrowRight, CheckCircle } from "lucide-react";

export function BubblePage() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Rapid MVP Development",
      description: "Launch your product in weeks, not months",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Structured data models for your application",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Custom Workflows",
      description: "Complex business logic without code",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "User Authentication",
      description: "Secure login and user management systems",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API Integrations",
      description: "Connect with third-party services seamlessly",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Dashboard Interfaces",
      description: "Professional admin panels and user dashboards",
    },
  ];

  const pricing = [
    {
      name: "MVP Starter",
      price: "$799",
      description: "Perfect for testing your startup idea",
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
      price: "$2,999",
      description: "Ideal for launching a complete product",
      features: [
        "Advanced features",
        "Custom workflows",
        "API integrations",
        "Admin dashboard",
        "User roles & permissions",
        "Payment integration",
        "2 week delivery",
      ],
      popular: true,
    },
    {
      name: "Enterprise App",
      price: "$5,999",
      description: "For complex business applications",
      features: [
        "Everything in Full Product",
        "Advanced automation",
        "Custom integrations",
        "Multi-tenant architecture",
        "Advanced analytics",
        "Dedicated support",
        "3-4 week delivery",
      ],
    },
  ];

  const useCases = [
    {
      title: "SaaS Platforms",
      description: "Build subscription-based software products",
      image: "https://images.unsplash.com/photo-1675495666895-9091741bfd78?w=800&h=600&fit=crop",
    },
    {
      title: "Marketplaces",
      description: "Create two-sided marketplace applications",
      image: "https://images.unsplash.com/photo-1593720218365-b2076cfdefee?w=800&h=600&fit=crop",
    },
    {
      title: "Internal Tools",
      description: "Custom dashboards and business tools",
      image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
                ⚡ Bubble Web App Development
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                No-Code Web Apps & MVPs
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                We build fully functional web applications and MVPs for startups using Bubble's no-code platform with dashboard-style interfaces and custom workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/447877406516"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Launch Your App
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
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=1200&h=900&fit=crop"
                alt="Bubble web app development"
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
              Powerful App Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to launch a successful product
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
                className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-xl mb-4">
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

      {/* Use Cases Section */}
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
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom solutions for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
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
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">{useCase.description}</p>
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
              Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fixed-price packages for predictable budgets
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
                    ? "bg-gradient-to-br from-indigo-600 to-cyan-600 text-white"
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
                <p className={`mb-6 ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
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
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-indigo-600"}`} />
                      <span className={plan.popular ? "text-indigo-50" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="https://wa.me/447877406516"
                  className={`block w-full px-6 py-3 rounded-full font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-white text-indigo-600 hover:bg-gray-100"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
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
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your MVP?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Launch your startup idea faster with our expert Bubble development
            </p>
            <motion.a
              href="https://wa.me/447877406516"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
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
