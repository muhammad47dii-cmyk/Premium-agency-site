import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ScrollTheatre } from "../components/ScrollTheatre";
import ScrollToTop from "../pages/ScrollToTop";

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");

    script.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      Tawk_API.customStyle = {
        visibility: {
          desktop: { position: 'br', xOffset: 24, yOffset: 24 },
          mobile: { position: 'br', xOffset: 18, yOffset: 18 }
        }
      };
      (function(){
        var s1=document.createElement("script"),
        s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/69e77648e3e3ad1c363c4bc9/1jmo2c343';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;

    document.body.appendChild(script);

  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <ScrollTheatre />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(12px)" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
