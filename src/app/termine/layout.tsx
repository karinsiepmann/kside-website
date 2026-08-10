import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktuelle Termine — [kside]//openlabs",
  description:
    "Alle kommenden Termine für das AI Open Learning Lab for Women im Zukunftswerk Wiesbaden",
};

export default function TermineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
