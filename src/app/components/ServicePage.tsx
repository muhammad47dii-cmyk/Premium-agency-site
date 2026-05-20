import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { ContactActions } from "./ContactActions";
import { HeroExperience } from "./HeroExperience";

type AccentName = "shopify" | "wix" | "squarespace" | "bubble";

const accents: Record<
  AccentName,
  {
    badge: string;
    icon: string;
    primaryButton: string;
    subtleButton: string;
    featureCard: string;
    pricingPopular: string;
    text: string;
    check: string;
    cta: string;
    palette: [string, string, string];
    mode: "studio" | "commerce" | "business" | "brand" | "product";
    story: string[];
  }
> = {
  shopify: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "bg-emerald-600 text-white",
    primaryButton: "bg-emerald-500 text-white hover:bg-emerald-400",
    subtleButton: "bg-white/10 text-white border-white/25 hover:bg-white/15",
    featureCard: "border-emerald-100 bg-emerald-50/40",
    pricingPopular: "bg-gradient-to-br from-emerald-600 to-sky-600 text-white",
    text: "text-emerald-700",
    check: "text-emerald-600",
    cta: "bg-[linear-gradient(135deg,#064e3b_0%,#0369a1_55%,#111827_100%)]",
    palette: ["#34d399", "#38bdf8", "#f59e0b"],
    mode: "commerce",
    story: ["Merchandise with intent", "Guide the cart journey", "Launch a store that sells"],
  },
  wix: {
    badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
    icon: "bg-cyan-600 text-white",
    primaryButton: "bg-cyan-500 text-slate-950 hover:bg-cyan-300",
    subtleButton: "bg-white/10 text-white border-white/25 hover:bg-white/15",
    featureCard: "border-cyan-100 bg-cyan-50/40",
    pricingPopular: "bg-gradient-to-br from-cyan-600 to-emerald-600 text-white",
    text: "text-cyan-700",
    check: "text-cyan-600",
    cta: "bg-[linear-gradient(135deg,#164e63_0%,#047857_62%,#111827_100%)]",
    palette: ["#22d3ee", "#10b981", "#fbbf24"],
    mode: "business",
    story: ["Clarify the offer", "Earn visitor trust", "Turn attention into leads"],
  },
  squarespace: {
    badge: "bg-amber-50 text-amber-800 border-amber-200",
    icon: "bg-amber-600 text-white",
    primaryButton: "bg-amber-400 text-slate-950 hover:bg-amber-300",
    subtleButton: "bg-white/10 text-white border-white/25 hover:bg-white/15",
    featureCard: "border-amber-100 bg-amber-50/40",
    pricingPopular: "bg-gradient-to-br from-amber-600 to-rose-600 text-white",
    text: "text-amber-700",
    check: "text-amber-600",
    cta: "bg-[linear-gradient(135deg,#7c2d12_0%,#be123c_58%,#111827_100%)]",
    palette: ["#f59e0b", "#fb7185", "#38bdf8"],
    mode: "brand",
    story: ["Shape the visual language", "Curate the portfolio", "Publish with polish"],
  },
  bubble: {
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: "bg-indigo-600 text-white",
    primaryButton: "bg-indigo-500 text-white hover:bg-indigo-400",
    subtleButton: "bg-white/10 text-white border-white/25 hover:bg-white/15",
    featureCard: "border-indigo-100 bg-indigo-50/40",
    pricingPopular: "bg-gradient-to-br from-indigo-600 to-cyan-600 text-white",
    text: "text-indigo-700",
    check: "text-indigo-600",
    cta: "bg-[linear-gradient(135deg,#3730a3_0%,#0891b2_62%,#111827_100%)]",
    palette: ["#818cf8", "#22d3ee", "#f59e0b"],
    mode: "product",
    story: ["Map the workflow", "Build the product logic", "Launch a usable MVP"],
  },
};

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

type Showcase = {
  title: string;
  description?: string;
  category?: string;
  image: string;
  url?: string;
};

type ServicePageProps = {
  accent: AccentName;
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  primaryCta: string;
  whatsappMessage: string;
  stats: string[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: Feature[];
  showcaseTitle: string;
  showcaseSubtitle: string;
  showcases: Showcase[];
  pricingTitle: string;
  pricingSubtitle: string;
  pricing: PricingPlan[];
  finalTitle: string;
  finalSubtitle: string;
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

export function ServicePage({
  accent,
  eyebrow,
  title,
  description,
  heroImage,
  primaryCta,
  whatsappMessage,
  stats,
  featuresTitle,
  featuresSubtitle,
  features,
  showcaseTitle,
  showcaseSubtitle,
  showcases,
  pricingTitle,
  pricingSubtitle,
  pricing,
  finalTitle,
  finalSubtitle,
}: ServicePageProps) {
  const tone = accents[accent];
  const emailSubject = `${eyebrow} inquiry`;

  return (
    <div className="pt-0">
      <section data-header-theme="dark" className="relative isolate min-h-[92vh] overflow-hidden bg-slate-950">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />
        <HeroExperience
          palette={tone.palette}
          labels={tone.story}
          mode={tone.mode}
          className="z-[1]"
        />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(2,6,23,.92)_0%,rgba(15,23,42,.76)_44%,rgba(15,23,42,.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-end gap-10 px-6 pb-10 pt-36 lg:grid-cols-[0.95fr_0.75fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl text-white"
          >
            <span
              className={`inline-flex items-center border px-3 py-1 text-sm font-semibold ${tone.badge}`}
            >
              {eyebrow}
            </span>
            <h1 className="hero-title mt-6 text-4xl leading-[1.02] tracking-normal sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {description}
            </p>
            <ContactActions
              message={whatsappMessage}
              subject={emailSubject}
              label={primaryCta}
              variant="ghost"
              className="mt-8"
            />
            <a
                href="#pricing"
                className={`mt-3 inline-flex min-h-12 items-center justify-center border px-6 py-3 text-base font-semibold transition ${tone.subtleButton}`}
              >
                View Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden border border-white/15 bg-white/[0.06] p-5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:block"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              Build Sequence
            </p>
            <div className="mt-5 space-y-3">
              {tone.story.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-4 border border-white/10 bg-white/[0.04] p-4">
                  <span className="text-sm font-bold text-white/50">0{index + 1}</span>
                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3 lg:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat}
                className="border-b border-white/15 px-5 py-4 text-sm font-semibold text-white last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="light" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.18em] ${tone.text}`}>
              What You Get
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {featuresTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{featuresSubtitle}</p>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.05}>
                <div
                  className={`h-full border p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 ${tone.featureCard}`}
                >
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center ${tone.icon}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="light" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className={`text-sm font-bold uppercase tracking-[0.18em] ${tone.text}`}>
              Proof
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {showcaseTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{showcaseSubtitle}</p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {showcases.map((showcase, index) => {
              const content = (
                <FadeIn delay={index * 0.05}>
                  <article className="group h-full overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={showcase.image}
                        alt={showcase.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      {showcase.category && (
                        <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-700 backdrop-blur">
                          {showcase.category}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold text-slate-950">{showcase.title}</h3>
                        {showcase.url && (
                          <ExternalLink className={`mt-1 h-4 w-4 flex-none ${tone.text}`} />
                        )}
                      </div>
                      {showcase.description && (
                        <p className="mt-2 leading-7 text-slate-600">{showcase.description}</p>
                      )}
                    </div>
                  </article>
                </FadeIn>
              );

              return showcase.url ? (
                <a
                  key={showcase.title}
                  href={showcase.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {content}
                </a>
              ) : (
                <div key={showcase.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section data-header-theme="light" id="pricing" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.18em] ${tone.text}`}>
              Packages
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {pricingTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{pricingSubtitle}</p>
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.06}>
                <article
                  className={`relative flex h-full flex-col border p-7 shadow-sm ${
                    plan.popular
                      ? `${tone.pricingPopular} border-transparent shadow-xl`
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-6 bg-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-950">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-slate-950"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-3 leading-7 ${plan.popular ? "text-white/80" : "text-slate-600"}`}>
                    {plan.description}
                  </p>
                  <p className={`mt-6 text-5xl font-bold ${plan.popular ? "text-white" : "text-slate-950"}`}>
                    {plan.price}
                  </p>
                  <ul className="mt-7 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle
                          className={`mt-0.5 h-5 w-5 flex-none ${
                            plan.popular ? "text-white" : tone.check
                          }`}
                        />
                        <span className={plan.popular ? "text-white/85" : "text-slate-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ContactActions
                    message={`Hi, I am interested in the ${plan.name} package. Can we discuss it?`}
                    subject={`${plan.name} package inquiry`}
                    label="Get Started"
                    variant={plan.popular ? "light" : "dark"}
                    stacked
                    className="mt-8"
                  />
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="dark" className={`${tone.cta} py-20 text-white sm:py-24`}>
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">{finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
              {finalSubtitle}
            </p>
            <ContactActions
              message={whatsappMessage}
              subject={emailSubject}
              label="Contact Us"
              variant="light"
              className="mt-8 justify-center"
            />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
