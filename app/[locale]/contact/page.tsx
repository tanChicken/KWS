import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KOREA DMC – KOREA WITH SUE (KWS) — trusted guides, flexible packages, and authentic Korea experiences for travelers and agencies.",
};

const socials = [
  { icon: "photo_camera", label: "Instagram" },
  { icon: "play_circle", label: "YouTube" },
  { icon: "work", label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <div className="pt-12 pb-20 md:pb-section-gap">
      <div className="max-w-container mx-auto px-5 md:px-20">
        {/* Hero header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-6">
            Plan your next adventure with us.
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Trusted guides, flexible packages, and authentic Korea experiences
            await you. Get in touch today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Contact details */}
          <div className="lg:col-span-4 space-y-12 bg-surface-container-low p-8 rounded-xl shadow-soft-lg">
            <div>
              <h2 className="font-display text-headline-sm text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                
                {/* Company */}
                <div className="flex items-start space-x-4">
                  <Icon name="business" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Company
                    </p>
                    <p className="text-body-md text-on-surface-variant font-medium">
                      KOREA DMC – KOREA WITH SUE (KWS)
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <Icon name="location_on" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Address
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      #802 Jindo Bldg., Mapo-Daero 44, Mapo-Gu, Seoul, Korea
                      <br />
                      04174 Seoul, Republic of Korea
                    </p>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="flex items-start space-x-4">
                  <Icon name="person" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Contact Person
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      <span className="font-medium">Sue Kim</span>
                      <br />
                      Chief Executive Officer
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Icon name="phone" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Phone
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      Mobile: +82 10 6425 9313
                      <br />
                      Telephone: +82 2 703 9313
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Icon name="mail" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:kws@koreawithsue.co.kr"
                      className="text-body-md text-on-surface-variant hover:text-secondary transition-colors block mb-1"
                    >
                      kws@koreawithsue.co.kr
                    </a>
                    <a
                      href="mailto:sue@koreawithsue.co.kr"
                      className="text-body-md text-on-surface-variant hover:text-secondary transition-colors block"
                    >
                      sue@koreawithsue.co.kr
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4">
                  <Icon name="language" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Website
                    </p>
                    <a
                      href="https://www.koreawithsue.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-md text-on-surface-variant hover:text-secondary transition-colors block"
                    >
                      www.koreawithsue.com
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:text-secondary hover:shadow-soft transition-all"
                    >
                      <Icon name={social.icon} className="text-[20px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-soft-lg">
            <ContactForm />
          </div>
        </div>

        {/* Follow Our Journeys + Map (full-width row below the form) */}
        <div className="mt-gutter grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Follow Our Journeys */}
          {/* <div className="lg:col-span-4 bg-surface-container-low p-8 rounded-xl shadow-soft-lg flex flex-col justify-center">
            <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-4">
              Follow Our Journeys
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:text-secondary hover:shadow-soft transition-all"
                >
                  <Icon name={social.icon} className="text-[20px]" />
                </a>
              ))}
            </div>
          </div> */}

          {/* Location map (Google Maps Embed API).
              👉 EDIT THE COORDINATES BELOW to point the pin at your exact
              office. In Google Maps, right-click the spot and click the
              "37.5419, 126.9498" value at the top to copy the latitude, longitude. */}
          <div className="lg:col-span-12 h-[380px] lg:h-[460px] rounded-xl overflow-hidden border border-surface-variant shadow-soft-lg">
            <GoogleMap
              lat={37.53996165086879}
              lng={126.94705715073732}
              zoom={17}
              label="KOREA DMC – KOREA WITH SUE (KWS), Mapo-Gu, Seoul"
            />
          </div>
        </div>
      </div>
    </div>
  );
}