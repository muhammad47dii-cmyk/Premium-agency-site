import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function ScrollTheatre() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "-18%"]);
  const gridRotate = useTransform(smoothProgress, [0, 1], [0, -8]);
  const beamX = useTransform(smoothProgress, [0, 1], ["-18%", "118%"]);
  const veilOpacity = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [0.08, 0.18, 0.14, 0.24]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      <motion.div
        className="fixed left-0 top-0 h-[3px] w-full origin-left bg-[linear-gradient(90deg,#22d3ee,#a78bfa,#f59e0b)] shadow-[0_0_28px_rgba(34,211,238,.72)]"
        style={{ scaleX: smoothProgress }}
      />
      <motion.div
        className="scroll-theatre-grid absolute inset-x-[-12vw] top-[-20vh] h-[74vh]"
        style={{ y: gridY, rotate: gridRotate, opacity: veilOpacity }}
      />
      <motion.div
        className="absolute top-[18vh] h-px w-[38vw] bg-[linear-gradient(90deg,transparent,#fff,transparent)] opacity-50 blur-[1px]"
        style={{ x: beamX }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-28 w-full bg-[linear-gradient(180deg,transparent,rgba(2,6,23,.18))]"
        style={{ opacity: veilOpacity }}
      />
    </div>
  );
}
