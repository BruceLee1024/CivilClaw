import type { Metadata } from "next";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CivilClaw - OpenClaw for 土木工程",
    template: "%s | CivilClaw"
  },
  description: "土木工程师的 AI Agent 工具箱。基于 OpenClaw 的自托管 AI 助手，支持规范查询、造价算量、施工管理、BIM 自动化。ClawHub 社区 13,729+ Skills，专为土木人精选。",
  keywords: ["OpenClaw", "土木工程", "AI Agent", "结构设计", "造价算量", "施工管理", "BIM", "PKPM", "规范查询", "工程自动化"],
  authors: [{ name: "CivilClaw Team" }],
  creator: "CivilClaw",
  publisher: "CivilClaw",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://civilclaw.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://civilclaw.com",
    title: "CivilClaw - OpenClaw for 土木工程",
    description: "土木工程师的 AI Agent 工具箱。基于 OpenClaw 的自托管 AI 助手，支持规范查询、造价算量、施工管理、BIM 自动化。",
    siteName: "CivilClaw",
  },
  twitter: {
    card: "summary_large_image",
    title: "CivilClaw - OpenClaw for 土木工程",
    description: "土木工程师的 AI Agent 工具箱",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CivilClaw",
    description: "土木工程师的 AI Agent 工具箱",
    url: "https://civilclaw.com",
    publisher: {
      "@type": "Organization",
      name: "CivilClaw Team",
      logo: {
        "@type": "ImageObject",
        url: "https://civilclaw.com/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://civilclaw.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="zh" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display antialiased min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
