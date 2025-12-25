import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoTriumph Landing",
  description: "AutoTriumph Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <script src="https://admin.your-proff-manager.ru/widget.js?botId=2"></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
