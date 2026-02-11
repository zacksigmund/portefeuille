import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_JP } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Theme } from "@radix-ui/themes";
import { Nav } from "@/components/Nav";
config.autoAddCss = false;

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  title: "ZackSigmund.com",
  description:
    "Zack Sigmund is a senior full stack software engineer based out of Cleveland, OH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoJp.variable}`}>
        <Theme
          accentColor="indigo"
          grayColor="slate"
          radius="large"
          appearance="dark"
        >
          <Nav />
          {children}
        </Theme>
      </body>
    </html>
  );
}
