import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export function generateMetadata(): Metadata {
  const title =
    "SDB Label – Barcode Labels, Thermal Labels, Hologram Labels Manufacturer in India";
  const description =
    "SDB Label is a leading manufacturer of barcode labels, direct thermal rolls, hologram security labels and ribbons. Trusted by automotive, FMCG and logistics companies across India.";
  const url = "https://www.sdblabel.com/";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SDB Label",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

import HomeClient from "./homeClient";

export default function Page() {
  const baseUrl = "https://www.sdblabel.com/";
  const logoUrl = "https://www.sdblabel.com/images/icon/logo.png?v=2";
  const phones = ["+919625520466", "+919654566078"];
  const sameAs = [
    "https://www.instagram.com/sdb_label/",
    "https://www.facebook.com/profile.php?id=61585864571954",
    "https://www.linkedin.com/in/sanjeev0441/",
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SDB LABEL",
            url: baseUrl,
            logo: logoUrl,
            email: "info@sdblabel.com",
            telephone: phones,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressCountry: "IN",
            },
            sameAs,
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SDB LABEL",
            url: baseUrl,
            image: logoUrl,
            logo: logoUrl,
            email: "info@sdblabel.com",
            telephone: phones,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressCountry: "IN",
            },
            sameAs,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SDB LABEL",
            url: baseUrl,
            publisher: {
              "@type": "Organization",
              name: "SDB LABEL",
              logo: {
                "@type": "ImageObject",
                url: logoUrl,
              },
            },
          },
        ]}
      />
      <HomeClient />
    </>
  );
}
