import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import {
  ORG_CONTACTS,
  ORG_SAMEAS,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/config";
import {
  buildEducationalOrganization,
  serializeJsonLd,
} from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const DEFAULT_TITLE = `${SITE_NAME} \u2014 ${SITE_TAGLINE}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s \u00b7 ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "STEM mentorship",
    "AMC prep",
    "Science Olympiad coaching",
    "USACO training",
    "math competition",
    "competitive programming",
    "high school STEM",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: SITE_LOCALE,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} \u2014 ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#0d0f14",
  },
};

const organizationJsonLd = buildEducationalOrganization({
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  sameAs: ORG_SAMEAS,
  contacts: ORG_CONTACTS,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-[#0d0f14] text-[#eeeae0] font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- JSON-LD payload is built from a typed helper and escaped by serializeJsonLd
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
