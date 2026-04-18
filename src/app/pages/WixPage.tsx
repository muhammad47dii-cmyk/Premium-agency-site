import { motion } from "motion/react";
import { Briefcase, Users, Mail, Calendar, Globe, Zap, ArrowRight, CheckCircle } from "lucide-react";

export function WixPage() {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Branding",
      description: "Modern designs that establish credibility and trust",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Built-in forms and CTAs that capture qualified leads",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Integration",
      description: "Connect with your email marketing tools seamlessly",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Booking Systems",
      description: "Easy appointment scheduling for service businesses",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built to rank and attract organic traffic",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Loading",
      description: "Optimized performance for better user experience",
    },
  ];

  const pricing = [
    {
      name: "Basic Business",
      price: "$599",
      description: "Perfect for solo entrepreneurs and freelancers",
      features: [
        "Up to 5 pages",
        "Mobile-responsive design",
        "Contact form",
        "Basic SEO setup",
        "Social media integration",
        "48-hour delivery",
      ],
    },
    {
      name: "Professional Business",
      price: "$1,199",
      description: "Ideal for small businesses and coaches",
      features: [
        "Up to 10 pages",
        "Custom design",
        "Lead capture forms",
        "Advanced SEO",
        "Booking system integration",
        "Email marketing setup",
        "72-hour delivery",
      ],
      popular: true,
    },
    {
      name: "Premium Business",
      price: "$1,999",
      description: "For established businesses needing advanced features",
      features: [
        "Unlimited pages",
        "Full custom design",
        "Advanced integrations",
        "Member areas",
        "E-commerce features",
        "Priority support",
        "Rush delivery available",
      ],
    },
  ];

  const useCases = [
    {
      title: "Coaches & Consultants",
      description: "Showcase your expertise and book clients effortlessly",
      image: "https://images.unsplash.com/photo-1594892185343-0241e1d47d15?w=800&h=600&fit=crop",
    },
    {
      title: "Service Providers",
      description: "Display services and generate qualified leads",
      image: "https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=800&h=600&fit=crop",
    },
    {
      title: "Small Businesses",
      description: "Build credibility and grow your customer base",
      image: "https://images.unsplash.com/photo-1491252027976-a03f31b9df00?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                🎨 Wix Website Design
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Business Websites That Generate Leads
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                We create modern Wix websites for small businesses, coaches, and service providers focused on professional branding and lead generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/447877406516"
                  className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Website
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
                src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200&h=900&fit=crop"
                alt="Wix website design"
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
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional features to grow your business online
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
                className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-xl mb-4">
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
              Perfect For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for your industry
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
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Affordable packages for businesses of all sizes
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
                    ? "bg-gradient-to-br from-green-600 to-blue-600 text-white"
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
                <p className={`mb-6 ${plan.popular ? "text-green-100" : "text-gray-600"}`}>
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
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-green-600"}`} />
                      <span className={plan.popular ? "text-green-50" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="https://wa.me/447877406516"
                  className={`block w-full px-6 py-3 rounded-full font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-white text-green-600 hover:bg-gray-100"
                      : "bg-green-600 text-white hover:bg-green-700"
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
      <section className="py-24 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Wix Website?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Let's create a professional online presence for your business
            </p>
            <motion.a
              href="https://wa.me/447877406516"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
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
