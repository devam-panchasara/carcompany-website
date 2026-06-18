import type { Metadata } from "next";
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
        {/* Ruttl bug tracking widget — both tags must be in the raw HTML for verification */}
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<ruttl-poetry id="WIFudKsbP3qLZ2UFXhdo"></ruttl-poetry>' +
              '<script src="https://web.ruttl.com/poetry.js"><\/script>',
          }}
        />
      </body>
    </html>
  );
}
