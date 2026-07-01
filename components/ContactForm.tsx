"use client";

import { useState } from "react";
import Icon from "./Icon";

const fieldClasses =
  "w-full bg-surface-container-low border border-surface-variant rounded px-4 py-3 text-body-md text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-on-surface-variant/50";

const labelClasses =
  "block text-label-caps uppercase tracking-[0.1em] font-bold text-primary";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit} aria-label="Inquiry form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-name" className={labelClasses}>
            Full Name / Agency
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="please enter your full name or agency name"
            className={fieldClasses}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className={labelClasses}>
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="please enter your email address"
            className={fieldClasses}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="please enter your phone number"
            className={fieldClasses}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-inquiry" className={labelClasses}>
            Inquiry Type
          </label>
          <select
            id="contact-inquiry"
            name="inquiry_type"
            defaultValue=""
            required
            className={`${fieldClasses} appearance-none`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="leisure">Leisure Travel</option>
            <option value="mice">MICE (Meetings, Incentives, Conferences, Exhibitions)</option>
            <option value="medical">Medical Tourism</option>
            <option value="custom">Custom Itinerary</option>
            <option value="partnership">B2B Partnership</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className={labelClasses}>
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={10.5}
          required
          placeholder="Tell us about your ideal Korean experience..."
          className={`${fieldClasses} resize-y`}
        />
      </div>

      <div className="pt-4 flex flex-col md:flex-row md:items-center md:justify-end gap-4">
        {status === "success" && (
          <p role="status" className="text-body-md text-primary">
            Thank you — our travel consultants will be in touch within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-body-md text-error">
            {errorMsg}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-secondary text-on-secondary text-label-caps uppercase tracking-[0.1em] font-bold px-8 py-4 rounded hover:bg-secondary/90 transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Submit Inquiry"}
          <Icon
            name={status === "sending" ? "progress_activity" : "arrow_forward"}
            className={`text-[20px] ${status === "sending" ? "animate-spin" : ""}`}
          />
        </button>
      </div>
    </form>
  );
}
