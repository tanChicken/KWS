import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jane DMC Korea — trusted guides, flexible packages, and authentic Korea experiences for travelers and agencies.",
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
                <div className="flex items-start space-x-4">
                  <Icon name="location_on" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Office Address
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      123 Seoul Tower Blvd, Suite 400
                      <br />
                      Seoul, South Korea 04320
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="mail" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Email Inquiries
                    </p>
                    <a
                      href="mailto:hello@janedmckorea.com"
                      className="text-body-md text-on-surface-variant hover:text-secondary transition-colors block mb-1"
                    >
                      hello@janedoe.com
                    </a>
                    <a
                      href="mailto:b2b@janedoe.com"
                      className="text-body-md text-on-surface-variant hover:text-secondary transition-colors block"
                    >
                      b2b@janedoe.com (Partnerships)
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="phone" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Phone
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      +82 2-1234-5678
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="schedule" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      Office Hours
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      Mon – Fri, 9:00 – 18:00 KST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-surface-variant">
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
            </div>

            {/* Location visual */}
            <div className="rounded-lg overflow-hidden border border-surface-variant bg-surface-container h-44 relative flex items-center justify-center">
              <Icon name="map" className="!text-5xl text-surface-variant" />
              <span className="absolute bottom-3 left-3 text-label-caps uppercase tracking-[0.1em] font-bold text-on-surface-variant bg-surface/80 backdrop-blur-sm px-2 py-1 rounded">
                Myeong-dong, Seoul
              </span>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-soft-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
