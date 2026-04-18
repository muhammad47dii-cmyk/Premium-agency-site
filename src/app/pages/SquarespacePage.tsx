import { motion } from "motion/react";
import { Palette, Image, Layout, Award, Eye, Heart, ArrowRight, CheckCircle } from "lucide-react";

export function SquarespacePage() {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Elegant Design",
      description: "Sophisticated aesthetics that reflect your brand's premium quality",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Portfolio Focused",
      description: "Stunning galleries and layouts to showcase your work",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Custom Templates",
      description: "Tailored designs that stand out from the crowd",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award-Worthy",
      description: "Design quality that wins recognition and attracts clients",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Impact",
      description: "First impressions that leave lasting impressions",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Brand Story",
      description: "Narrative-driven layouts that connect with your audience",
    },
  ];

  const pricing = [
    {
      name: "Portfolio Starter",
      price: "$799",
      description: "Perfect for creatives just starting out",
      features: [
        "Up to 5 pages",
        "Portfolio gallery",
        "Mobile-responsive design",
        "Custom fonts & colors",
        "Contact form",
        "48-hour delivery",
      ],
    },
    {
      name: "Professional Portfolio",
      price: "$1,599",
      description: "Ideal for established creatives and agencies",
      features: [
        "Up to 12 pages",
        "Advanced gallery layouts",
        "Custom animations",
        "Blog integration",
        "Client testimonials",
        "SEO optimization",
        "72-hour delivery",
      ],
      popular: true,
    },
    {
      name: "Premium Brand",
      price: "$2,799",
      description: "For premium brands needing exceptional design",
      features: [
        "Unlimited pages",
        "Fully custom design",
        "Video integration",
        "E-commerce features",
        "Member areas",
        "Advanced integrations",
        "Priority support",
      ],
    },
  ];

  const showcases = [
    {
      title: "Photography Portfolio",
      category: "Photographer",
      image: "https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=800&h=600&fit=crop",
    },
    {
      title: "Design Studio",
      category: "Creative Agency",
      image: "https://images.unsplash.com/photo-1491252027976-a03f31b9df00?w=800&h=600&fit=crop",
    },
    {
      title: "Architecture Firm",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1594892185343-0241e1d47d15?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                ✨ Squarespace Design
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Premium Websites for Creatives
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                We create elegant Squarespace websites for creatives and brands with portfolio-focused layouts that showcase your work beautifully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/447877406516"
                  className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-amber-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Portfolio
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
                src="https://images.unsplash.com/photo-1523001185760-84ed1a5c6377?w=1200&h=900&fit=crop"
                alt="Squarespace website design"
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
              Exceptional Design Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail crafted to perfection
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
                className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-xl mb-4">
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

      {/* Showcase Section */}
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
              Portfolio Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stunning websites for creative professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcases.map((showcase, index) => (
              <motion.div
                key={showcase.title}
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
                      src={showcase.image}
                      alt={showcase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-sm font-semibold mb-1">{showcase.category}</div>
                        <div className="text-xs text-white/80">View Project</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {showcase.title}
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
              Investment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium design at transparent pricing
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
                    ? "bg-gradient-to-br from-amber-600 to-rose-600 text-white"
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
                <p className={`mb-6 ${plan.popular ? "text-amber-100" : "text-gray-600"}`}>
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
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-amber-600"}`} />
                      <span className={plan.popular ? "text-amber-50" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="https://wa.me/447877406516"
                  className={`block w-full px-6 py-3 rounded-full font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-white text-amber-600 hover:bg-gray-100"
                      : "bg-amber-600 text-white hover:bg-amber-700"
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
      <section className="py-24 bg-gradient-to-br from-amber-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Showcase Your Work?
            </h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Create a stunning portfolio that attracts your ideal clients
            </p>
            <motion.a
              href="https://wa.me/447877406516"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
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
