import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import GoogleMap from "@/components/GoogleMap";
// Import your custom icon components
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import EmailIcon from "@/components/icons/EmailIcon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return { title: t("heroTitle"), description: t("heroSubtitle") };
}

// We define the socials with the icon components directly
const socials = [
  { icon: <InstagramIcon className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/kwsdmckorea/" },
  { icon: <FacebookIcon className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591516255212" },
  { icon: <EmailIcon className="w-5 h-5" />, label: "Email", href: "mailto:admin@koreawithsue.co.kr" }
];

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className="pt-12 pb-20 md:pb-section-gap">
      <div className="max-w-container mx-auto px-5 md:px-20">
        {/* Hero header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-body-lg text-on-surface-variant">{t("heroSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Contact details */}
          <div className="lg:col-span-4 space-y-12 bg-surface-container-low p-8 rounded-xl shadow-soft-lg">
            <div>
              <h2 className="font-display text-headline-sm text-primary mb-6">
                {t("contactInformation")}
              </h2>
              <div className="space-y-6">
                {/* Company */}
                <div className="flex items-start space-x-4">
                  <Icon name="business" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      {t("companyLabel")}
                    </p>
                    <p className="text-body-md text-on-surface-variant font-medium">
                      {t("companyName")}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <Icon name="location_on" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      {t("addressLabel")}
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {t("addressValue")}
                      <br />
                      {t("addressValue2")}
                    </p>
                  </div>
                </div>

                {/* Contact Person */}
                {/* <div className="flex items-start space-x-4">
                  <Icon name="person" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      {t("contactPersonLabel")}
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      <span className="font-medium">{t("contactPersonName")}</span>
                      <br />
                      {t("contactPersonTitle")}
                    </p>
                  </div>
                </div> */}

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Icon name="phone" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      {t("phoneLabel")}
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {/* {t("phoneMobile")} */}
                      {/* <br /> */}
                      {t("phoneTel")}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <EmailIcon className="text-secondary mt-1 w-6 h-6" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      {t("emailLabel")}
                    </p>
                    <a
                      href="mailto:admin@koreawithsue.co.kr"
                      className="text-body-md text-on-surface-variant hover:text-secondary transition-colors block mb-1"
                    >
                      admin@koreawithsue.co.kr
                    </a>
                    {/* <a
                      href="mailto:sue@koreawithsue.co.kr"
                      className="text-body-md text-on-surface-variant hover:text-secondary transition-colors block"
                    >
                      sue@koreawithsue.co.kr
                    </a> */}
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4">
                  <Icon name="language" className="text-secondary mt-1" />
                  <div>
                    <p className="text-label-caps uppercase tracking-[0.1em] font-bold text-primary mb-1">
                      {t("websiteLabel")}
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

                {/* Socials Section */}
                <div className="flex space-x-4 pt-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:text-secondary hover:shadow-soft transition-all"
                    >
                      {social.icon}
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

        {/* Map */}
        <div className="mt-gutter grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-12 h-[380px] lg:h-[460px] rounded-xl overflow-hidden border border-surface-variant shadow-soft-lg">
            <GoogleMap
              lat={37.53996165086879}
              lng={126.94705715073732}
              zoom={17}
              label={t("mapLabel")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}