import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "VelocityAuto — Drive the Future",
  description: "Premium electric vehicles engineered for performance, safety, and the road ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        {/* Ruttl bug tracking widget — element must be in server-rendered HTML */}
        <div
          dangerouslySetInnerHTML={{
            __html: '<ruttl-poetry id="rjHOSjF4WRFK1aAIhU51"></ruttl-poetry>',
          }}
        />
        <Script src="https://web.ruttl.com/poetry.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
