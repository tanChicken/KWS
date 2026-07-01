import Icon from "./Icon";

interface GoogleMapProps {
  /** Latitude of the location, e.g. 37.5419 */
  lat: number;
  /** Longitude of the location, e.g. 126.9498 */
  lng: number;
  /** Accessible title describing the pinned place. */
  label?: string;
  /** Zoom level — higher is closer. 16–18 works well for a single building. */
  zoom?: number;
  /** Extra classes for the iframe (parent controls the box size). */
  className?: string;
}

/**
 * Embeds a Google Map centred on the given coordinates using the
 * Google Maps Embed API (a simple iframe — no client-side JS or npm package).
 *
 * Setup (one time):
 *   1. In Google Cloud Console, enable the **Maps Embed API**.
 *   2. Create an API key and (recommended) restrict it to your domain.
 *   3. Add the key to `.env.local`:
 *        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
 *
 * Then pass the location's `lat` / `lng` wherever you use <GoogleMap />.
 */
export default function GoogleMap({
  lat,
  lng,
  label = "Location map",
  zoom = 16,
  className = "",
}: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Graceful fallback so the page still renders before a key is configured.
  if (!apiKey) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-surface-container text-on-surface-variant text-center p-4">
        <Icon name="map" className="!text-4xl text-surface-variant" />
        <p className="text-label-sm">
          Add <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to{" "}
          <code>.env.local</code> to display the map.
        </p>
      </div>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`;

  return (
    <iframe
      title={label}
      src={src}
      className={`w-full h-full border-0 ${className}`}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
