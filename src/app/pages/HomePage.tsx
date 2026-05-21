import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ExternalLink,
  Film,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Users,
  Zap,
} from "lucide-react";
import {
  ContactActions,
  createEmailLink,
  createFacebookLink,
  createWhatsAppLink,
} from "../components/ContactActions";
import { HeroExperience } from "../components/HeroExperience";

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 72, scale: 0.94, rotateX: 14, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-90px" }}
      transition={{ duration: 0.9, delay, type: "spring", stiffness: 90, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HomePage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `New Website Inquiry

Service: ${formData.service || "Not selected"}
Name: ${formData.name}
Email: ${formData.email}

Project Details:
${formData.message}`;

    window.open(createWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  const formMessage = `New Website Inquiry

Service: ${formData.service || "Not selected"}
Name: ${formData.name}
Email: ${formData.email}

Project Details:
${formData.message}`;

  const services = [
    {
      title: "Shopify Stores",
      description: "Ecommerce experiences with stronger product pages, checkout flow, and mobile shopping.",
      icon: <Store className="h-6 w-6" />,
      href: "/shopify",
      tone: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      title: "Wix Websites",
      description: "Lead-focused business websites for coaches, consultants, service providers, and local teams.",
      icon: <Users className="h-6 w-6" />,
      href: "/wix",
      tone: "bg-cyan-50 text-cyan-700 border-cyan-100",
    },
    {
      title: "Squarespace Design",
      description: "Premium websites for brands, portfolios, and service businesses that need polish.",
      icon: <Sparkles className="h-6 w-6" />,
      href: "/squarespace",
      tone: "bg-amber-50 text-amber-700 border-amber-100",
    },
    {
      title: "Bubble Web Apps",
      description: "MVPs, dashboards, marketplaces, and internal tools built faster with no-code.",
      icon: <Layers className="h-6 w-6" />,
      href: "/bubble",
      tone: "bg-indigo-50 text-indigo-700 border-indigo-100",
    },
    {
      title: "Video Editing",
      description: "Short-form ads, social clips, brand stories, captions, and platform-ready edits.",
      icon: <Film className="h-6 w-6" />,
      href: "/video-editing",
      tone: "bg-rose-50 text-rose-700 border-rose-100",
    },
  ];

  const portfolio = [
    {
      title: "Bambu Jutes Store",
      category: "Shopify",
      image: "https://media.istockphoto.com/id/1269322182/photo/kitchenware-made-from-dried-betel-nut-leaf-palm.jpg?s=612x612&w=0&k=20&c=iSOHM0yPR7IaiAZ3tNIUNS0uDb2v8wAo-0yRDF_DA0w=",
      url: "https://bambujutes.com",
    },
    {
      title: "Brevis Consulting",
      category: "Squarespace",
      image: "https://media.istockphoto.com/id/1407200735/photo/business-people-working-in-a-board-room-with-a-laptop-and-digital-tablet.jpg?s=612x612&w=0&k=20&c=pGmgkLlJOFb9uYXGY_2tEegfKF_B7XNep-lCEbmxeX8=",
      url: "https://brevisconsulting.com",
    },
    {
      title: "ALW Studios",
      category: "Squarespace",
      image: "https://media.istockphoto.com/id/1304287268/photo/studio-of-successful-artist.jpg?s=612x612&w=0&k=20&c=o1xN605yJnQxs7bzR2GwHhuqbLn_ph2oWDtV5oAMO5w=",
      url: "https://alwstudios.com",
    },
    {
      title: "Renee's Tree Service",
      category: "Wix",
      image: "https://media.istockphoto.com/id/478261537/photo/arborist-tree-pruning-service-working-on-high-branches.jpg?s=612x612&w=0&k=20&c=W89b8x269Sxpz_Pa6Yi9m5LCNYFKAmz6YaeE8v3Py9Y=",
      url: "https://reneestreeservicellc.com",
    },
    {
      title: "MakerMatch App",
      category: "Bubble",
      image: "https://plus.unsplash.com/premium_photo-1718999209486-8e6a4e03ebc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9ubGluZSUyMGRhdGluZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
      url: "https://www.makermatch.ai",
    },
    {
      title: "Mesh Marketplace",
      category: "Bubble",
      image: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
      url: "https://www.mesh.trade/services/mesh-marketplace/",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Fashion Boutique Owner",
      text: "Mustapha Studio transformed our Shopify store. The design feels premium, the store is easier to shop, and customers understand our products faster.",
    },
    {
      name: "Michael Chen",
      business: "Tech Startup Founder",
      text: "They built our Bubble MVP quickly without making it feel like a rough prototype. The dashboard was clear enough for real user testing.",
    },
    {
      name: "Emma Williams",
      business: "Life Coach",
      text: "My Wix website finally explains what I do clearly. The new layout makes inquiries feel natural instead of forced.",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Focused builds that move quickly without looking rushed.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Conversion Focus",
      description: "Page structure, CTAs, and content hierarchy designed around action.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Trust-First Design",
      description: "Polished visuals and proof points that help buyers feel confident.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Optimized",
      description: "Layouts tested for small screens, taps, readability, and flow.",
    },
  ];

  return (
    <div className="pt-0">
      <section data-header-theme="dark" className="relative isolate min-h-[96vh] overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800&h=1200&fit=crop"
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-[0.18] mix-blend-luminosity"
        />
        <HeroExperience
          palette={["#22d3ee", "#f59e0b", "#10b981"]}
          labels={["Discover the signal", "Design the trust layer", "Launch the growth engine"]}
          mode="studio"
          className="z-[1]"
        />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(2,6,23,.92)_0%,rgba(15,23,42,.76)_48%,rgba(15,23,42,.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[96vh] max-w-7xl items-end gap-10 px-6 pb-10 pt-36 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-white"
          >
            <span className="inline-flex border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-cyan-100 backdrop-blur">
              Shopify, Wix, Squarespace, Bubble & Video
            </span>
            <h1 className="hero-title mt-6 text-4xl leading-[1.02] tracking-normal sm:text-5xl lg:text-7xl">
              Websites that make your business easier to trust, choose, and buy from.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Mustapha Studio designs websites, stores, and web apps with the clarity, polish, and conversion flow your customers expect.
            </p>
            <ContactActions
              message="Hi, I want a website for my business. Can we discuss?"
              subject="Website project inquiry"
              label="Get a Free Quote"
              variant="ghost"
              className="mt-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="hidden border border-white/15 bg-white/[0.06] p-5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:block"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              Studio Story
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Map the audience decision path",
                "Design the trust and conversion system",
                "Ship a site that feels alive, premium, and useful",
              ].map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-4 border border-white/10 bg-white/[0.04] p-4">
                  <span className="text-sm font-bold text-white/50">0{index + 1}</span>
                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid border border-white/15 bg-white/10 text-white backdrop-blur-md md:grid-cols-3 lg:col-span-2">
            {["Fast launch timelines", "Platform-specific expertise", "Conversion-led UX"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-white/15 px-5 py-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <CheckCircle className="h-5 w-5 text-cyan-300" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="light" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Choose the build that matches your next move
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Every page has a job: explain the offer, build confidence, and move visitors toward the next step.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.05}>
                <Link
                  to={service.href}
                  className="group block h-full border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
                >
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center border ${service.tone}`}>
                    {service.icon}
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-950">{service.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                    </div>
                    <ArrowRight className="mt-2 h-5 w-5 flex-none text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-950" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="light" id="portfolio" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Real work across stores, service sites, and web apps
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A stronger website is not only prettier. It is easier to scan, easier to trust, and easier to act on.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project, index) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <FadeIn delay={index * 0.05}>
                  <article className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-700 backdrop-blur">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4 p-5">
                      <h3 className="text-lg font-bold text-slate-950">{project.title}</h3>
                      <ExternalLink className="mt-1 h-4 w-4 flex-none text-cyan-700" />
                    </div>
                  </article>
                </FadeIn>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="light" id="testimonials" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Client Notes
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Clearer websites create calmer buyers
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.06}>
                <figure className="h-full border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 leading-8 text-slate-700">
                    "{testimonial.text}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-200 pt-5">
                    <div className="font-bold text-slate-950">{testimonial.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{testimonial.business}</div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="dark" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Why Mustapha Studio
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
              Designed for the way people actually browse
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The experience is planned around attention, trust, and the small moments where visitors decide whether to stay.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.05}>
                <div className="h-full border border-white/10 bg-white/5 p-6">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center bg-cyan-400 text-slate-950">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="light" id="contact" className="contact-section bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Start Here
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Tell us what you want the site to do.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Share the platform, goal, timeline, and any current website link. You can send the brief by WhatsApp or email, whichever is easier.
            </p>
            <div className="mt-8 space-y-4">
              {["Free first discussion", "Clear package recommendation", "Fast next-step plan"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="h-5 w-5 text-cyan-700" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                  className="min-h-12 border border-slate-200 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                  className="min-h-12 border border-slate-200 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <select
                name="service"
                aria-label="Select service"
                required
                className="mt-4 min-h-12 w-full border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-slate-950"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select service</option>
                <option value="Shopify Design">Shopify Design</option>
                <option value="Wix Design">Wix Design</option>
                <option value="Squarespace Design">Squarespace Design</option>
                <option value="Bubble Web App">Bubble Web App</option>
                <option value="Video Editing">Video Editing</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about the project"
                aria-label="Tell us about the project"
                rows={5}
                required
                className="mt-4 w-full resize-none border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Send on WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href={createEmailLink("Website project inquiry", formMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-950 transition hover:border-slate-950"
                >
                  Send by Email
                </a>
                <a
                  href={createFacebookLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#1877f2]/20 bg-[#1877f2] px-6 py-3 font-semibold text-white transition hover:bg-[#0f67dc]"
                >
                  Facebook
                </a>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
