import { motion } from "motion/react";
import { ArrowRight, Zap, Users, Smartphone, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router";

export function HomePage() {
  const services = [
  {
    title: "Shopify Website Design",
    description: "High-converting Shopify stores...",
    icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    href: "/shopify",
  },
  {
    title: "Wix Website Design",
    description: "Modern business websites...",
    icon: "https://cdn.worldvectorlogo.com/logos/wix.svg",
    href: "/wix",
  },
  {
    title: "Squarespace Website Design",
    description: "Premium, elegant websites...",
    icon: "https://cdn.worldvectorlogo.com/logos/squarespace.svg",
    href: "/squarespace",
  },
  {
    title: "Bubble Web App Development",
    description: "No-code web applications...",
    icon: "data:image/png;base64,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",
    href: "/bubble",
  },
];

const portfolio = [
  {
    title: "Bambu Jutes Store",
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?w=800&h=600&fit=crop",
    stats: "E-commerce",
    url: "https://bambujutes.com",
  },
  {
    title: "Brevis Consulting",
    category: "Squarespace",
    image: "https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=800&h=600&fit=crop",
    stats: "Business Site",
    url: "https://brevisconsulting.com",
  },
  {
    title: "ALW Studios",
    category: "Squarespace",
    image: "https://images.unsplash.com/photo-1491252027976-a03f31b9df00?w=800&h=600&fit=crop",
    stats: "Creative Studio",
    url: "https://alwstudios.com",
  },
  {
    title: "Renee’s Tree Service",
    category: "Wix",
    image: "https://images.unsplash.com/photo-1594892185343-0241e1d47d15?w=800&h=600&fit=crop",
    stats: "Local Business",
    url: "https://reneestreeservicellc.com",
  },
  {
    title: "MakerMatch App",
    category: "Bubble",
    image: "https://plus.unsplash.com/premium_photo-1718999209486-8e6a4e03ebc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9ubGluZSUyMGRhdGluZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    stats: "Web App",
    url: "https://www.makermatch.ai",
  },
  {
    title: "Mesh Marketplace",
    category: "Bubble",
    image: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
    stats: "Marketplace",
    url: "https://www.mesh.trade/services/mesh-marketplace/",
  },
];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Fashion Boutique Owner",
      text: "Mustapha Studio transformed our Shopify store. Sales increased by 127% in the first month. The design is stunning and converts like crazy.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      business: "Tech Startup Founder",
      text: "They built our MVP in just 2 weeks using Bubble. The quality exceeded expectations and we launched ahead of schedule.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      business: "Life Coach",
      text: "My Wix website now generates 50+ qualified leads monthly. The design perfectly reflects my brand and converts visitors effortlessly.",
      rating: 5,
    },
    {
      name: "David Martinez",
      business: "Creative Director",
      text: "Our Squarespace portfolio site wins awards. Mustapha Studio's design sense is exceptional and our client inquiries tripled.",
      rating: 5,
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Most projects delivered in 48-72 hours",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion Focused",
      description: "Designed to increase sales and grow revenue",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Modern UI/UX",
      description: "Premium designs that build trust and credibility",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Perfect on every device and screen size",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Websites That Convert Visitors Into Customers
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Mustapha Studio builds high-performing websites and Shopify stores designed to increase sales and grow your business.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/447877406516"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 inline-flex items-center justify-center gap-2 hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1646193186175-4ec30e6e5882?w=1200&h=900&fit=crop"
              alt="E-commerce website design"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional website design and development across all major platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.href}>
                  <motion.div
                    className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-all h-full"
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                   <div className="mb-4">
  <img
    src={service.icon}
    alt={service.title}
    className="w-12 h-12 object-contain"
  />
</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {portfolio.map((project, index) => (
  <a href={project.url} target="_blank" rel="noopener noreferrer">
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
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
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-600">
                      {project.stats}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {project.category}
                    </div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.business}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Mustapha Studio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We deliver results that matter to your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Get a free quote today and discover how we can transform your online presence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="https://wa.me/447877406516"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Contact
              </motion.a>
              <motion.a
                href="#quote-form"
                className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.a>
            </div>

            {/* Contact Form */}
            <motion.div
              id="quote-form"
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                  />
                </div>
                <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40">
                  <option value="" className="text-gray-900">Select Service</option>
                  <option value="shopify" className="text-gray-900">Shopify Design</option>
                  <option value="wix" className="text-gray-900">Wix Design</option>
                  <option value="squarespace" className="text-gray-900">Squarespace Design</option>
                  <option value="bubble" className="text-gray-900">Bubble Web App</option>
                </select>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/40 resize-none"
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
