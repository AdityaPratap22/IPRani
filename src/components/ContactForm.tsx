"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-emerald-50/50 p-8 text-center shadow-sm">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          ✓
        </span>
        <h3 className="mt-4 text-lg font-bold text-navy">Message Sent Successfully!</h3>
        <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. A specialist from our team will review your inquiry and get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md bg-brand-blue px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8"
      aria-label="Contact support team"
    >
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
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone_number" className="mb-1.5 block text-sm font-medium text-navy">
            Phone Number <span className="text-red-500">*</span>
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
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-navy">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
            placeholder="Your subject"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          aria-required="true"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)] focus-visible:outline-2 focus-visible:outline-brand-blue"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
