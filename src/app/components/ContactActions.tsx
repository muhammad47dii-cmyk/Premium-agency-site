import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const phoneNumber = "447877406516";
const emailAddress = "mustaphamuhammedpro@gmail.com";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function createEmailLink(subject: string, body: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: emailAddress,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

type ContactActionsProps = {
  message: string;
  subject?: string;
  label?: string;
  variant?: "light" | "dark" | "ghost";
  stacked?: boolean;
  className?: string;
};

export function ContactActions({
  message,
  subject = "Website project inquiry",
  label = "Start the Project",
  variant = "dark",
  stacked = false,
  className = "",
}: ContactActionsProps) {
  const emailBody = `${message}

Name:
Business:
Website / reference link:
Timeline:`;

  const primary =
    variant === "light"
      ? "bg-white text-slate-950 hover:bg-slate-100"
      : variant === "ghost"
        ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
        : "bg-slate-950 text-white hover:bg-slate-800";

  const secondary =
    variant === "light"
      ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
      : variant === "ghost"
        ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
        : "border-slate-200 bg-white text-slate-950 hover:border-slate-950";

  return (
    <div className={`flex gap-3 ${stacked ? "flex-col" : "flex-col sm:flex-row"} ${className}`}>
      <a
        href={createWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 font-semibold transition ${primary}`}
      >
        <MessageCircle className="h-5 w-5" />
        {label} on WhatsApp
        <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href={createEmailLink(subject, emailBody)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-12 items-center justify-center gap-2 border px-5 py-3 font-semibold transition ${secondary}`}
      >
        <Mail className="h-5 w-5" />
        Email Us
      </a>
    </div>
  );
}
