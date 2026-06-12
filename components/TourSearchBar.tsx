"use client";

import Icon from "./Icon";

const fieldClasses =
  "w-full bg-surface-container-low border border-surface-variant/60 rounded py-3 pl-10 pr-4 text-body-md text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors";

export default function TourSearchBar() {
  return (
    <div className="bg-surface/85 backdrop-blur-xl rounded-xl shadow-soft-lg p-4 md:p-6 border border-white/20">
      <form
        className="flex flex-col md:flex-row gap-4 md:items-end"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Search tours"
      >
        <div className="flex-1 w-full">
          <label htmlFor="search-destination" className="block text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-2">
            Destination
          </label>
          <div className="relative">
            <Icon name="location_on" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <select id="search-destination" className={`${fieldClasses} appearance-none`}>
              <option>All Destinations</option>
              <option>Seoul</option>
              <option>Busan</option>
              <option>Jeju</option>
              <option>Gangwon-do</option>
            </select>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label htmlFor="search-type" className="block text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-2">
            Tour Type
          </label>
          <div className="relative">
            <Icon name="category" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <select id="search-type" className={`${fieldClasses} appearance-none`}>
              <option>Leisure</option>
              <option>Adventure</option>
              <option>Corporate / MICE</option>
              <option>Wellness</option>
              <option>Medical Tourism</option>
            </select>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label htmlFor="search-passengers" className="block text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-2">
            Passengers
          </label>
          <div className="relative">
            <Icon name="group" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              id="search-passengers"
              type="number"
              min={1}
              defaultValue={2}
              className={fieldClasses}
            />
          </div>
        </div>

        <div className="flex-1 w-full">
          <label htmlFor="search-dates" className="block text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-2">
            Dates
          </label>
          <div className="relative">
            <Icon name="calendar_month" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              id="search-dates"
              type="text"
              placeholder="Select Dates"
              className={fieldClasses}
            />
          </div>
        </div>

        <div className="w-full md:w-auto">
          <button
            type="submit"
            className="w-full bg-primary text-on-primary px-8 py-3.5 rounded text-label-caps uppercase tracking-[0.1em] font-bold hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
          >
            <Icon name="search" className="text-[20px]" />
            Find Tours
          </button>
        </div>
      </form>
    </div>
  );
}
