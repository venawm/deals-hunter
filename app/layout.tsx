import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import SideNav from "@/components/side-nav/side-nav";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const tabs = [
  {
    text: "Home",
    icon: "ph:house",
    href: "/",
    count: 5,
  },
  {
    text: "Pricing",
    icon: "mdi:message",
    href: "/pricing",
    count: 12,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-[1476px] pt-16 flex gap-14 relative">
              <div className="basis-1/5 pr-4 sticky top-12">
                <SideNav tabs={tabs} />
              </div>
              <div className="basis-4/5">{children}</div>
            </main>
            <footer className="w-full flex items-center justify-center py-3" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
