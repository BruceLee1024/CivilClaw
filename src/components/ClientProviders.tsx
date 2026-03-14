"use client";

import GlobalSearch from "@/components/GlobalSearch";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <GlobalSearch />
    </>
  );
}
