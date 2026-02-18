"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  phone?: string;
  message?: string;
}

export function WhatsAppFloat({
  phone = "573001234567",
  message = "Hola, me gustaría más información",
}: WhatsAppFloatProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg z-50"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </a>
  );
}
