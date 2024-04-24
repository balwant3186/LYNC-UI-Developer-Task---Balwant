import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Lync | Simplifying Blockchain Gaming",
  description:
    "Lync is dedicated to simplifying the world of blockchain gaming, offering a seamless and user-friendly experience for gamers and developers alike. Dive into the future of gaming with Lync!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
