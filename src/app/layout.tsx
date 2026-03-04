import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Аметаверс — операционная платформа для бизнеса",
  description: "Аметаверс — единый пульт управления бизнесом. Автоматизация продаж, техподдержка, маркетплейсы, чат-боты и AI. Для ИП, самозанятых и менеджеров.",
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
