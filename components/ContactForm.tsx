"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fieldClasses =
  "w-full bg-surface-container-low border border-surface-variant rounded px-4 py-3 text-body-md text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-on-surface-variant/50";

const labelClasses =
  "block text-label-caps uppercase tracking-[0.1em] font-bold text-primary";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit} aria-label="Inquiry form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-name" className={labelClasses}>
            {t("nameLabel")}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder={t("namePlaceholder")}
            className={fieldClasses}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className={labelClasses}>
            {t("emailLabel")}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className={fieldClasses}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-phone" className={labelClasses}>
            {t("phoneLabel")}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder={t("phonePlaceholder")}
            className={fieldClasses}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-inquiry" className={labelClasses}>
            {t("inquiryLabel")}
          </label>
          <select
            id="contact-inquiry"
            name="inquiry_type"
            defaultValue=""
            required
            className={`${fieldClasses} appearance-none`}
          >
            <option value="" disabled>
              {t("inquirySelect")}
            </option>
            <option value="leisure">{t("inquiryOptions.leisure")}</option>
            <option value="mice">{t("inquiryOptions.mice")}</option>
            <option value="medical">{t("inquiryOptions.medical")}</option>
            <option value="custom">{t("inquiryOptions.custom")}</option>
            <option value="partnership">{t("inquiryOptions.partnership")}</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className={labelClasses}>
          {t("messageLabel")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={10}
          required
          placeholder={t("messagePlaceholder")}
          className={`${fieldClasses} resize-y`}
        />
      </div>

      <div className="pt-4 flex flex-col md:flex-row md:items-center md:justify-end gap-4">
        {status === "success" && (
          <p role="status" className="text-body-md text-primary">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-body-md text-error">
            {t("error")}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-secondary text-on-secondary text-label-caps uppercase tracking-[0.1em] font-bold px-8 py-4 rounded hover:bg-secondary/90 transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? t("sending") : t("submit")}
          <Icon
            name={status === "sending" ? "progress_activity" : "arrow_forward"}
            className={`text-[20px] ${status === "sending" ? "animate-spin" : ""}`}
          />
        </button>
      </div>
    </form>
  );
}
