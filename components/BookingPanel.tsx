"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const fieldClasses =
  "w-full bg-surface-container border border-surface-variant/50 text-on-surface text-body-md rounded-lg focus:border-primary focus:ring-0 outline-none py-3 transition-colors";

export default function BookingPanel() {
  const [clientType, setClientType] = useState<"individual" | "b2b">("individual");

  return (
    <div className="sticky top-28 bg-surface rounded-xl p-8 shadow-soft-lg border border-surface-variant/50">
      <div className="flex justify-between items-baseline mb-6 border-b border-surface-variant/30 pb-4">
        <h2 className="font-display text-headline-md text-[26px] text-primary">
          Plan Your Escape
        </h2>
        <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant">
          Customizable
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="space-y-2">
          <legend className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-2">
            Client Type
          </legend>
          <div
            className="flex bg-surface-container p-1 rounded-lg border border-surface-variant/50"
            role="group"
            aria-label="Client type"
          >
            <button
              type="button"
              aria-pressed={clientType === "individual"}
              onClick={() => setClientType("individual")}
              className={`flex-1 py-2 text-label-caps uppercase tracking-[0.1em] font-bold rounded transition-all ${
                clientType === "individual"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Individual
            </button>
            <button
              type="button"
              aria-pressed={clientType === "b2b"}
              onClick={() => setClientType("b2b")}
              className={`flex-1 py-2 text-label-caps uppercase tracking-[0.1em] font-bold rounded transition-all ${
                clientType === "b2b"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              B2B Agent
            </button>
          </div>
        </fieldset>

        <div className="space-y-2">
          <label
            htmlFor="hotel-category"
            className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary block"
          >
            Hotel Category
          </label>
          <div className="relative">
            <select id="hotel-category" className={`${fieldClasses} pl-4 pr-10 appearance-none`}>
              <option value="5">5-Star Luxury (Default)</option>
              <option value="4">4-Star Premium</option>
              <option value="boutique">Boutique Luxury</option>
            </select>
            <Icon
              name="expand_more"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="booking-dates"
            className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary block"
          >
            Preferred Dates
          </label>
          <div className="relative">
            <input
              id="booking-dates"
              type="text"
              placeholder="Select Start - End Date"
              className={`${fieldClasses} pl-10 pr-4`}
            />
            <Icon
              name="calendar_today"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="booking-passengers"
              className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary block"
            >
              Passengers
            </label>
            <div className="relative">
              <input
                id="booking-passengers"
                type="number"
                min={1}
                defaultValue={2}
                className={`${fieldClasses} pl-10 pr-4`}
              />
              <Icon
                name="group"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="booking-diet"
              className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary block"
            >
              Dietary Needs
            </label>
            <div className="relative">
              <select
                id="booking-diet"
                className={`${fieldClasses} pl-3 pr-8 appearance-none text-sm`}
              >
                <option>Standard</option>
                <option>Halal</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Gluten-Free</option>
              </select>
              <Icon
                name="expand_more"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <button
            type="submit"
            className="w-full text-label-caps uppercase tracking-[0.1em] font-bold bg-secondary text-on-secondary py-4 rounded-lg hover:opacity-90 transition-opacity shadow-sm flex justify-center items-center gap-2"
          >
            Book Now
            <Icon name="arrow_forward" className="text-[18px]" />
          </button>
          <Link
            href="/contact"
            className="w-full text-label-caps uppercase tracking-[0.1em] font-bold bg-transparent border border-primary text-primary py-3.5 rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex justify-center items-center gap-2"
          >
            <Icon name="mail" className="text-[18px]" />
            Send Request
          </Link>
        </div>

        <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant text-center">
          Need expert advice?{" "}
          <Link href="/contact" className="text-primary underline hover:text-secondary">
            Contact an Advisor
          </Link>
        </p>
      </form>
    </div>
  );
}
