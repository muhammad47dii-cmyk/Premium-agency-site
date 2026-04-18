import { motion } from "motion/react";

export function WhatsAppButton() {
  const phone = "447877406516";

 const page = window.location.pathname.replace("/", "") || "website";

const message = encodeURIComponent(
  `Hi, I'm interested in getting a website for my business. Can we discuss?`
);

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      {/* REAL WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.755 5.59 2.072 7.94L0 32l7.865-2.047A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.26c-2.62 0-5.07-.705-7.18-1.93l-.513-.305-4.665 1.214 1.244-4.55-.334-.53A13.6 13.6 0 012.4 16.396c0-7.49 6.11-13.6 13.6-13.6s13.6 6.11 13.6 13.6-6.11 13.6-13.6 13.6zm7.48-10.26c-.41-.205-2.43-1.2-2.81-1.335-.375-.14-.65-.205-.925.205-.275.41-1.065 1.335-1.305 1.61-.24.275-.48.31-.89.105-.41-.205-1.73-.635-3.295-2.025-1.22-1.085-2.045-2.425-2.285-2.835-.24-.41-.025-.63.18-.835.185-.185.41-.48.615-.72.205-.24.275-.41.41-.685.14-.275.07-.515-.035-.72-.105-.205-.925-2.23-1.265-3.055-.33-.795-.665-.685-.925-.7-.24-.01-.515-.015-.79-.015-.275 0-.72.105-1.095.515-.375.41-1.44 1.405-1.44 3.425 0 2.02 1.475 3.975 1.68 4.25.205.275 2.9 4.43 7.035 6.215.985.425 1.75.68 2.35.87.985.315 1.88.27 2.59.165.79-.12 2.43-.995 2.775-1.955.345-.96.345-1.785.24-1.955-.105-.17-.375-.275-.785-.48z"/>
      </svg>
    </motion.a>
  );
}