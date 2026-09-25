import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import OpenAIAdsEvents from "./OpenAIAdsEvents";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fago Website",
  description: "Fago Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const openAIAdsPixelId =
    process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID?.trim();
  const serializedPixelId = openAIAdsPixelId
    ? JSON.stringify(openAIAdsPixelId).replace(/</g, "\\u003c")
    : null;

  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {serializedPixelId ? (
          <>
            <Script id="openai-ads-pixel" strategy="beforeInteractive">
              {`
                (function (w, d, s, u) {
                  if (w.oaiq) return;
                  var q = function () {
                    q.q.push(arguments);
                  };
                  q.q = [];
                  w.oaiq = q;
                  var js = d.createElement(s);
                  js.async = true;
                  js.src = u;
                  var f = d.getElementsByTagName(s)[0];
                  f.parentNode.insertBefore(js, f);
                })(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

                oaiq("init", {
                  pixelId: ${serializedPixelId},
                });
              `}
            </Script>
            <OpenAIAdsEvents />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
