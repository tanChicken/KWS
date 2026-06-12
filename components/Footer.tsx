import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

const footerColumns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Best Selling Tours", href: "/tours" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
      { label: "Sustainability", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-container mx-auto px-5 md:px-20 py-20 md:py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/stitch/logo.png"
              alt="Jane DMC Korea logo"
              width={160}
              height={64}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-body-md text-surface-variant max-w-sm">
            Your Premier Gateway to South Korea. Crafting unforgettable, luxury
            experiences for the global traveler.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center text-surface-variant hover:text-secondary-fixed hover:border-secondary-fixed transition-colors"
            >
              <Icon name="photo_camera" className="text-[20px]" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center text-surface-variant hover:text-secondary-fixed hover:border-secondary-fixed transition-colors"
            >
              <Icon name="play_circle" className="text-[20px]" />
            </a>
            <a
              href="mailto:info@janedmckorea.com"
              aria-label="Email us"
              className="w-10 h-10 rounded-full border border-surface-variant/30 flex items-center justify-center text-surface-variant hover:text-secondary-fixed hover:border-secondary-fixed transition-colors"
            >
              <Icon name="mail" className="text-[20px]" />
            </a>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-label-caps uppercase tracking-[0.15em] font-bold text-secondary-fixed mb-6">
              {col.heading}
            </h4>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-md text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-container mx-auto px-5 md:px-20 pb-10">
        <div className="pt-8 border-t border-on-primary/20 flex flex-col md:flex-row justify-between gap-4 text-label-caps uppercase tracking-[0.1em] font-bold text-surface-variant">
          <p>© 2026 Jane DMC Korea. All rights reserved.</p>
          <p>Seoul, South Korea · info@janedmckorea.com · +82 2 1234 5678</p>
        </div>
      </div>
    </footer>
  );
}
