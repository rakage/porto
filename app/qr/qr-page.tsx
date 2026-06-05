"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { FiArrowUpRight, FiDownload, FiUserPlus } from "react-icons/fi";

import { SITE_URL } from "@/libs/constants";

const getConnectUrl = () => {
  if (SITE_URL) {
    return `${SITE_URL.replace(/\/$/, "")}/connect`;
  }

  if (typeof window !== "undefined") {
    return `${window.location.origin}/connect`;
  }

  return "/connect";
};

export default function QrPage() {
  const [connectUrl, setConnectUrl] = useState(getConnectUrl());

  useEffect(() => {
    setConnectUrl(getConnectUrl());
  }, []);

  return (
    <main className="min-h-dvh bg-[#08090b] text-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col justify-between px-5 py-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/connect"
            className="font-clashDisplay text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Raka Luthfi
          </Link>
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-satoshi text-[11px] font-semibold uppercase text-blue-200">
            Scan Me
          </span>
        </div>

        <section className="flex flex-1 flex-col justify-center gap-y-8">
          <div className="space-y-4">
            <h1 className="font-clashDisplay text-[42px] font-medium leading-none text-white">
              Connect with Raka
            </h1>
            <p className="max-w-[29ch] font-satoshi text-base font-medium leading-7 text-white/68">
              Scan this to open my contact page, save my number, and continue
              the conversation.
            </p>
          </div>

          <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4">
            <div className="rounded-[6px] bg-white p-5">
              <QRCodeSVG
                value={connectUrl}
                size={310}
                bgColor="#ffffff"
                fgColor="#08090b"
                level="M"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 break-all font-satoshi text-xs font-medium leading-5 text-white/45">
              {connectUrl}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/connect"
              className="flex min-h-12 items-center justify-center gap-x-2 rounded-full bg-blue-700 px-4 py-3 font-satoshi text-sm font-semibold text-white shadow-[0_18px_42px_rgba(29,78,216,0.28)] transition-all duration-300 hover:bg-blue-600 active:scale-[0.98]"
            >
              <FiUserPlus className="h-4 w-4" />
              Open Page
            </Link>
            <Link
              href="/api/vcard"
              className="flex min-h-12 items-center justify-center gap-x-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-3 font-satoshi text-sm font-semibold text-white transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/12 active:scale-[0.98]"
            >
              <FiDownload className="h-4 w-4" />
              vCard
            </Link>
          </div>
        </section>

        <Link
          href="/connect"
          className="flex items-center justify-center gap-x-2 border-t border-white/10 pt-5 font-satoshi text-sm font-semibold text-white/54 transition-colors hover:text-blue-300"
        >
          Preview post-scan page
          <FiArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
