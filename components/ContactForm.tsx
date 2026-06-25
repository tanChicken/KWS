"use client";

import { useState } from "react";
import Icon from "./Icon";

const fieldClasses =
  "w-full bg-surface-container-low border border-surface-variant rounded px-4 py-3 text-body-md text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-on-surface-variant/50";

const labelClasses =
  "block text-label-caps uppercase tracking-[0.1em] font-bold text-primary";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      aria-label="Inquiry form"
    >
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
          rows={5}
          required
          placeholder="Tell us about your ideal Korean experience..."
          className={`${fieldClasses} resize-y`}
        />
      </div>

      <div className="pt-4 flex flex-col md:flex-row md:items-center md:justify-end gap-4">
        {submitted && (
          <p role="status" className="text-body-md text-primary">
            Thank you — our travel consultants will be in touch within 24 hours.
          </p>
        )}
        <button
          type="submit"
          className="bg-secondary text-on-secondary text-label-caps uppercase tracking-[0.1em] font-bold px-8 py-4 rounded hover:bg-secondary/90 transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          Submit Inquiry
          <Icon name="arrow_forward" className="text-[20px]" />
        </button>
      </div>
    </form>
  );
}
