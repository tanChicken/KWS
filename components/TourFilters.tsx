"use client";

const destinations = ["Seoul", "Jeju Island", "Busan", "Gyeongju", "Gangwon-do"];
const tourTypes = ["Cultural Immersive", "Luxury Private", "Wellness", "Seasonal Special", "Corporate / MICE"];
const durations = ["1-3 Days", "4-7 Days", "8+ Days"];

export default function TourFilters() {
  return (
    <aside className="w-full lg:w-1/4 flex-shrink-0 lg:sticky lg:top-32 space-y-8 bg-surface-container/50 p-6 rounded-xl">
      <div className="flex justify-between items-center border-b border-surface-variant pb-3">
        <h2 className="font-display text-headline-sm text-primary">Filters</h2>
        <button
          type="button"
          className="text-label-sm text-on-surface-variant hover:text-primary underline"
        >
          Clear All
        </button>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-label-caps uppercase tracking-[0.15em] font-bold text-primary mb-1">
          Destination
        </legend>
        <div className="space-y-2">
          {destinations.map((destination) => (
            <label
              key={destination}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                defaultChecked={destination === "Jeju Island"}
                className="h-4 w-4 rounded border-outline text-primary focus:ring-primary accent-[#173124]"
              />
              <span className="text-body-md text-on-surface group-hover:text-primary transition-colors">
                {destination}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-label-caps uppercase tracking-[0.15em] font-bold text-primary mb-1">
          Tour Type
        </legend>
        <div className="space-y-2">
          {tourTypes.map((type) => (
            <label key={type} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked={type === "Seasonal Special"}
                className="h-4 w-4 rounded border-outline text-primary focus:ring-primary accent-[#173124]"
              />
              <span className="text-body-md text-on-surface group-hover:text-primary transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-label-caps uppercase tracking-[0.15em] font-bold text-primary mb-1">
          Duration
        </legend>
        <div className="space-y-2">
          {durations.map((duration) => (
            <label key={duration} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="radio"
                name="duration"
                defaultChecked={duration === "8+ Days"}
                className="h-4 w-4 border-outline text-primary focus:ring-primary accent-[#173124]"
              />
              <span className="text-body-md text-on-surface group-hover:text-primary transition-colors">
                {duration}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
