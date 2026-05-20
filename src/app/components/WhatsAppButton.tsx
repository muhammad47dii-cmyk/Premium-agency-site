import { motion } from "motion/react";
import { Mail, MessageCircle } from "lucide-react";
import { createEmailLink, createWhatsAppLink } from "./ContactActions";

export function WhatsAppButton() {
  const message = "Hi, I'm interested in getting a website for my business. Can we discuss?";

  return (
    <motion.div
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-[18px] border border-white/20 bg-slate-950/85 p-2 shadow-xl shadow-slate-950/20 backdrop-blur-xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <motion.a
        href={createWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mustapha Studio on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#25d366] text-white transition hover:bg-[#1fb95a]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-5 w-5" />
      </motion.a>
      <motion.a
        href={createEmailLink("Website project inquiry", message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Mustapha Studio"
        className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-slate-950 transition hover:bg-cyan-100"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail className="h-5 w-5" />
      </motion.a>
    </motion.div>
  );
}
