import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
      "Hello Techcare, I'd like to enquire about your products."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-5 z-40 h-14 w-14 rounded-full grid place-items-center shadow-elevated text-white transition-transform hover:scale-105"
    style={{ background: "#25D366" }}
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);
