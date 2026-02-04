import HomeClient from "./HomeClient";

export const metadata = {
  title: "Riddhi Builders | Premium Real Estate Developers in Chandrapur",
  description:
    "Riddhi Builders is a trusted real estate developer in Chandrapur since 2009. Discover premium residential projects crafted with precision and trust.",
  keywords: [
    "Riddhi Builders",
    "Builders in Chandrapur",
    "Real Estate Developers Chandrapur",
    "Luxury Homes Maharashtra",
    "Residential Projects Chandrapur",
  ],
  openGraph: {
    title: "Riddhi Builders – Architecture That Breathes Life",
    description:
      "Explore premium residential developments by Riddhi Builders in Chandrapur, Maharashtra.",
    url: "https://react-vite-deploy-u6p8.vercel.app",
    siteName: "Riddhi Builders",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomeClient />;
}
