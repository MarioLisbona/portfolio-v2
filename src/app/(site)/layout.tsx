import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";

export const metadata: Metadata = {
  title: "Mario Lisbona | Full Stack Web Developer",
  description: "Mario Lisbona's Portfolio Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile: ProfileType = await getProfile();
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar resume={profile.resumeURL} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
