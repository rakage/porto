import { NextResponse } from "next/server";

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL,
} from "@/libs/constants";

const escapeVcardValue = (value: string) =>
  value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");

export async function GET() {
  const websiteUrl = SITE_URL || "https://raka.my.id";
  const note =
    "Data, Software, and AI Engineer building data platforms, automation, and AI-powered product systems.";

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Luthfi;Raka;;;",
    "FN:Raka Luthfi",
    "TITLE:Data, Software, and AI Engineer",
    CONTACT_PHONE ? `TEL;TYPE=CELL:${CONTACT_PHONE}` : "",
    CONTACT_EMAIL ? `EMAIL;TYPE=INTERNET:${CONTACT_EMAIL}` : "",
    `URL:${websiteUrl}`,
    `URL;TYPE=LinkedIn:${LINKEDIN_URL}`,
    `URL;TYPE=GitHub:${GITHUB_URL}`,
    "ADR;TYPE=WORK:;;Jakarta;;;;Indonesia",
    `NOTE:${escapeVcardValue(note)}`,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  return new NextResponse(vcard, {
    headers: {
      "Content-Disposition": 'attachment; filename="raka-luthfi.vcf"',
      "Content-Type": "text/vcard; charset=utf-8",
    },
  });
}
