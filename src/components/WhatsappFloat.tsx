"use client";

import { WhatsappIconFilled } from "@/components/icons";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/919911655010"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
      <WhatsappIconFilled className="h-7 w-7 transition-transform duration-200 group-hover:scale-105" />
    </a>
  );
}
