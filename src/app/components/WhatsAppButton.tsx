import { motion } from "motion/react";
import { createEmailLink, createFacebookLink, createWhatsAppLink } from "./ContactActions";

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M16 .4C7.16.4 0 7.56 0 16.4c0 2.88.76 5.58 2.08 7.93L0 32l7.86-2.05A15.93 15.93 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84.4 16 .4Zm0 29.26c-2.62 0-5.07-.7-7.18-1.93l-.51-.3-4.67 1.21 1.25-4.55-.34-.53A13.6 13.6 0 0 1 2.4 16.4c0-7.49 6.11-13.6 13.6-13.6s13.6 6.11 13.6 13.6S23.49 29.66 16 29.66Zm7.48-10.26c-.41-.2-2.43-1.2-2.81-1.33-.38-.14-.65-.2-.93.2-.27.41-1.06 1.34-1.3 1.61-.24.28-.48.31-.89.1-.41-.2-1.73-.63-3.3-2.02-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.83.18-.19.41-.48.61-.72.21-.24.28-.41.41-.69.14-.27.07-.51-.03-.72-.11-.2-.93-2.23-1.27-3.05-.33-.8-.66-.69-.92-.7-.24-.01-.52-.02-.79-.02-.28 0-.72.11-1.1.52-.37.41-1.44 1.4-1.44 3.42 0 2.02 1.48 3.98 1.68 4.25.2.28 2.9 4.43 7.04 6.22.98.42 1.75.68 2.35.87.98.31 1.88.27 2.59.16.79-.12 2.43-.99 2.78-1.95.34-.96.34-1.79.24-1.96-.1-.17-.38-.27-.79-.48Z"
      />
    </svg>
  );
}

function GmailLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
      <path fill="#4285F4" d="M43.6 14.4v24.2c0 2.1-1.7 3.8-3.8 3.8h-5.7V23.3L43.6 14.4Z" />
      <path fill="#34A853" d="M14 23.3v19.1H8.3c-2.1 0-3.8-1.7-3.8-3.8V14.4L14 23.3Z" />
      <path fill="#FBBC04" d="M43.6 9.4v5L34.1 23.3 24 30.8 13.9 23.3 4.4 14.4v-5c0-4.7 5.4-7.4 9.2-4.6L24 12.5 34.4 4.8c3.8-2.8 9.2-.1 9.2 4.6Z" />
      <path fill="#EA4335" d="M34.1 23.3 24 30.8l-10.1-7.5V13.2L24 20.7l10.1-7.5v10.1Z" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"
      />
    </svg>
  );
}

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
        <WhatsAppLogo />
      </motion.a>
      <motion.a
        href={createEmailLink("Website project inquiry", message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Mustapha Studio"
        className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white transition hover:bg-cyan-100"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <GmailLogo />
      </motion.a>
      <motion.a
        href={createFacebookLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Mustapha Studio on Facebook"
        className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#1877f2] text-white transition hover:bg-[#0f67dc]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FacebookLogo />
      </motion.a>
    </motion.div>
  );
}
