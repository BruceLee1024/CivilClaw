import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CivilClaw — 土木工程师的 AI Agent 内容集合站",
  description: "面向土木工程师的 OpenClaw 中文内容站：安装教程、Skill 开发、国产模型配置、Gateway 架构详解与云端部署指南。GitHub 286K+ Stars 开源 AI Agent 框架。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
