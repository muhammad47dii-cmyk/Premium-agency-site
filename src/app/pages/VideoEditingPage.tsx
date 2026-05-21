import { Captions, Clapperboard, Film, Gauge, Megaphone, WandSparkles } from "lucide-react";
import { ServicePage } from "../components/ServicePage";
import videoPortfolio01 from "../../assets/videos/video-portfolio-01.mp4";
import videoPortfolio02 from "../../assets/videos/video-portfolio-02.mp4";
import videoPortfolio03 from "../../assets/videos/video-portfolio-03.mp4";
import videoPortfolio04 from "../../assets/videos/video-portfolio-04.mp4";
import videoPortfolio05 from "../../assets/videos/video-portfolio-05.mp4";

export function VideoEditingPage() {
  return (
    <ServicePage
      accent="video"
      eyebrow="Video Editing Services"
      title="Scroll-stopping videos edited for attention, clarity, and conversion."
      description="We edit short-form ads, social content, launch videos, brand explainers, and product clips with sharp pacing, clean sound, captions, and platform-ready exports."
      heroImage="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1800&h=1200&fit=crop"
      primaryCta="Start Your Edit"
      whatsappMessage="Hi, I need video editing for my brand or business. Can we discuss the project?"
      stats={["Short-form and ad edits", "Captions, sound, and pacing", "Platform-ready exports"]}
      featuresTitle="Editing built around the first three seconds"
      featuresSubtitle="Every cut is shaped to earn attention quickly, keep the viewer moving, and make the message easier to act on."
      features={[
        {
          icon: <Clapperboard className="h-6 w-6" />,
          title: "Short-Form Video Editing",
          description: "TikTok, Reels, Shorts, and ad creatives with fast hooks, tight pacing, and clean visual rhythm.",
        },
        {
          icon: <Captions className="h-6 w-6" />,
          title: "Captions & Subtitles",
          description: "Readable captions, emphasis styling, and timing that supports silent viewing and retention.",
        },
        {
          icon: <WandSparkles className="h-6 w-6" />,
          title: "Motion Polish",
          description: "Tasteful transitions, zooms, overlays, callouts, and brand elements without making the edit feel noisy.",
        },
        {
          icon: <Megaphone className="h-6 w-6" />,
          title: "Ad Creative Edits",
          description: "Direct-response cuts for products, offers, testimonials, and service promos.",
        },
        {
          icon: <Gauge className="h-6 w-6" />,
          title: "Retention-First Pacing",
          description: "Cuts, pattern breaks, and scene sequencing designed to keep people watching longer.",
        },
        {
          icon: <Film className="h-6 w-6" />,
          title: "Multi-Format Delivery",
          description: "Exports for vertical, square, and landscape placements across social, web, and paid campaigns.",
        },
      ]}
      showcaseTitle="Video formats we edit"
      showcaseSubtitle="From fast social clips to refined brand stories, the edit is shaped around where the video needs to perform."
      showcases={[
        {
          title: "Social Media Clips",
          description: "High-energy vertical edits for Reels, TikTok, and Shorts.",
          image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
        },
        {
          title: "Product & Offer Ads",
          description: "Benefit-led cuts that make products, services, and offers easier to understand.",
          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&h=600&fit=crop",
        },
        {
          title: "Brand Story Videos",
          description: "Polished edits for websites, launches, testimonials, and company storytelling.",
          image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
        },
      ]}
      videoPortfolio={[
        {
          title: "Narrative Video Edit",
          description: "A story-led edit for narrative clips, emotional pacing, voiceovers, and scenes that need to unfold clearly.",
          video: videoPortfolio01,
          format: "Narrative",
        },
        {
          title: "15-Second Promo",
          description: "A quick, clean promo structure for offers, announcements, product teasers, and simple calls to action.",
          video: videoPortfolio02,
          format: "15 sec edit",
        },
        {
          title: "Wedding Highlight Edit",
          description: "A polished emotional cut for weddings, events, ceremonies, receptions, and memorable celebration moments.",
          video: videoPortfolio03,
          format: "Wedding video",
        },
        {
          title: "Cinematic Edit",
          description: "A more polished visual rhythm for brand pieces, real estate, product showcases, and event highlights.",
          video: videoPortfolio04,
          format: "Cinematic",
        },
        {
          title: "Product Ad Edit",
          description: "A direct product-focused cut for showcasing offers, product benefits, sales clips, and social ad placements.",
          video: videoPortfolio05,
          format: "Product ad",
        },
      ]}
      pricingTitle="Video editing packages"
      pricingSubtitle="Straightforward editing packages for creators, brands, and businesses that need consistent video output."
      pricing={[
        {
          name: "10 Sec Edit",
          price: "$30",
          description: "For a quick, clean edit built for short promos, teasers, hooks, and simple announcements.",
          features: [
            "Up to 10 seconds",
            "Basic cuts and pacing",
            "Simple captions",
            "Music sync",
            "Vertical export",
            "24-48 hour delivery",
          ],
        },
        {
          name: "Shorts Edit",
          price: "$50",
          description: "For Reels, TikTok, YouTube Shorts, and quick social posts that need better retention.",
          features: [
            "Up to 30 seconds",
            "Hook-focused edit",
            "Captions and callouts",
            "Sound polish",
            "1 revision",
            "Vertical export",
          ],
          popular: true,
        },
        {
          name: "Standard Edit",
          price: "$85",
          description: "For longer short-form content, product clips, service promos, and clean brand videos.",
          features: [
            "Up to 60 seconds",
            "Captions included",
            "Transitions and callouts",
            "Music and sound cleanup",
            "2 revisions",
            "Vertical or square export",
          ],
        },
        {
          name: "Cinematic Edit",
          price: "$150",
          description: "For premium edits with stronger mood, pacing, transitions, and visual polish.",
          features: [
            "Up to 2 minutes",
            "Cinematic pacing",
            "Advanced transitions",
            "Color and sound polish",
            "Multiple aspect ratios",
            "2 revisions",
          ],
        },
      ]}
      finalTitle="Ready to turn raw footage into videos people actually finish?"
      finalSubtitle="Send your clips, brief, examples, or campaign goal and we will shape the edit plan around the platform and audience."
    />
  );
}
