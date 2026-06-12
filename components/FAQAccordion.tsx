"use client";

import { useState } from "react";
import Icon from "./Icon";
import type { Faq } from "@/data/faqs";

interface FAQAccordionProps {
  items: Faq[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="bg-surface-container-lowest border border-surface-variant rounded-lg overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span className="font-display text-[20px] font-semibold text-primary leading-snug">
                {item.question}
              </span>
              <Icon
                name="expand_more"
                className={`text-secondary shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              hidden={!isOpen}
              className="px-6 bg-surface-container-low/50"
            >
              <p className="text-body-md text-on-surface-variant pb-6 pt-2">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
