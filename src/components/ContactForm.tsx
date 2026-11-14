"use client";

import { useState, useEffect } from "react";
import { WhatsappIcon } from "@/components/icons";

const serviceOptions = [
  "Trademark Registration & Search",
  "Patent Filing & Prior Art Search",
  "Copyright Registration & Protection",
  "Industrial Design Registration",
  "IP Litigation & Dispute Resolution",
  "Company Formation & Contracts",
  "Other Legal & IP Consultation",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: serviceOptions[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");

  // Captcha State
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, sum: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ num1, num2, sum: num1 + num2 });
    setCaptchaInput("");
    setCaptchaError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify Captcha
    if (parseInt(captchaInput, 10) !== captcha.sum) {
      setCaptchaError("Incorrect answer. Please solve the security challenge to proceed.");
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    // Build the formatted WhatsApp message
    const formattedMessage =
      `*New Inquiry from IP Rani Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service / Subject:* ${formData.subject}\n\n` +
      `*Message / Requirements:*\n${formData.message}\n`;

    const whatsappNumber = "919911655010";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    setLastWhatsappUrl(whatsappUrl);

    // Also send in background to /api/contact as an email backup to ipr@iprani.com
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((err) => console.log("Background email backup log:", err));
    } catch {
      // Background email sync failure should not block the WhatsApp flow
    }

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: serviceOptions[0],
      message: "",
    });
    generateCaptcha();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center shadow-sm">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-[#25D366] shadow-sm">
          <WhatsappIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy">WhatsApp Chat Initialized!</h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your inquiry has been prepared for our IP &amp; Legal specialists. If WhatsApp did not open automatically on your device, click the button below to continue:
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={lastWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-md"
          >
            <WhatsappIcon className="h-5 w-5" />
            Continue to WhatsApp Chat
          </a>
          <button
            onClick={handleReset}
            className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50"
          >
            Send Another Inquiry
          </button>
        </div>

        <div className="mt-6 border-t border-emerald-200/60 pt-4 text-xs text-slate-500">
          Prefer email? Write directly to{" "}
          <a href="mailto:ipr@iprani.com" className="font-semibold text-brand-blue hover:underline">
            ipr@iprani.com
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
      aria-label="WhatsApp Consultation Form"
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Instant WhatsApp Connect
          </span>
          <h3 className="mt-1 text-base font-bold text-navy">Send an Inquiry via WhatsApp</h3>
        </div>
        <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[#25D366]">
          <WhatsappIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className="mb-1.5 block text-sm font-medium text-navy">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            required
            aria-required="true"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone_number" className="mb-1.5 block text-sm font-medium text-navy">
            WhatsApp / Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone_number"
            required
            aria-required="true"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
            placeholder="+91 99116 55010"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email_address" className="mb-1.5 block text-sm font-medium text-navy">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email_address"
            required
            aria-required="true"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-navy">
            Service Required
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Your Inquiry / Case Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          aria-required="true"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
          placeholder="Briefly describe what assistance you need (e.g. brand name to trademark, patent idea, or contract review)..."
        />
      </div>

      {/* Math Captcha */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <label htmlFor="captcha_input" className="mb-1.5 block text-sm font-medium text-navy">
          Security Challenge <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3.5 py-2 min-w-[100px] text-center select-none shadow-sm">
            {captcha.num1} + {captcha.num2} = ?
          </span>
          <input
            type="number"
            id="captcha_input"
            required
            aria-required="true"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            className="w-full sm:w-32 rounded-md border border-slate-300 px-3.5 py-2 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
            placeholder="Answer"
          />
        </div>
        {captchaError && (
          <p className="mt-2 text-xs font-semibold text-red-500 animate-pulse" role="alert">
            {captchaError}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <WhatsappIcon className="h-5 w-5" />
          {isSubmitting ? "Preparing WhatsApp..." : "Send Inquiry on WhatsApp"}
        </button>
        <p className="mt-2 text-center text-xs text-slate-500">
          ⚡ Opens directly in WhatsApp to <strong>+91 99116 55010</strong> • Quick response guaranteed
        </p>
      </div>
    </form>
  );
}
