"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiUserPlus,
} from "react-icons/fi";

import {
  CALENDAR_URL,
  CONTACT_EMAIL,
  CV_LINK,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/libs/constants";

const actionClass =
  "group flex min-h-12 items-center justify-center gap-x-2 rounded-full px-4 py-3 font-satoshi text-sm font-semibold transition-all duration-300 active:scale-[0.98]";

export default function ConnectPage() {
  const mailHref = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=Great%20meeting%20you%2C%20Raka`
    : "/#contact";

  const links = useMemo(
    () => [
      {
        label: "Portfolio",
        description: "Selected work, experience, and skills",
        href: "/",
        icon: FiBriefcase,
      },
      {
        label: "GitHub",
        description: "Code, experiments, and project repositories",
        href: GITHUB_URL,
        icon: FiGithub,
      },
      {
        label: "Projects",
        description: "A quick look at recent product builds",
        href: "/#projects",
        icon: FiArrowUpRight,
      },
      {
        label: "CV / Resume",
        description: CV_LINK ? "Download the latest resume" : "Ask for my CV",
        href: CV_LINK || mailHref,
        icon: FiDownload,
      },
      {
        label: "Book a chat",
        description: CALENDAR_URL
          ? "Find a time for a follow-up"
          : "Continue the conversation on LinkedIn",
        href: CALENDAR_URL || LINKEDIN_URL,
        icon: FiCalendar,
      },
    ],
    [mailHref],
  );

  return (
    <main className="min-h-dvh overflow-hidden bg-[#08090b] text-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col px-5 py-5 sm:justify-center sm:py-6">
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4 sm:mb-8">
          <Link
            href="/"
            className="font-clashDisplay text-sm font-medium tracking-normal text-white/80 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </div>

        <section className="flex flex-1 flex-col justify-between gap-y-6 sm:gap-y-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-x-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#121419] sm:h-[72px] sm:w-[72px]">
                <Image
                  src="/assets/images/profile.png"
                  alt="Raka Luthfi"
                  fill
                  priority
                  sizes="72px"
                  className="object-cover object-top"
                />
              </div>

              <div className="min-w-0 pt-1">
                <p className="font-satoshi text-xs font-medium uppercase text-blue-300">
                  Jakarta
                </p>
                <h1 className="mt-1.5 font-clashDisplay text-[34px] font-medium leading-[0.95] tracking-normal text-white sm:mt-2 sm:text-[38px]">
                  Raka Luthfi
                </h1>
                <p className="mt-2 font-satoshi text-[15px] font-medium leading-5 text-white/66 sm:mt-3">
                  Data, Software, and AI Engineer
                </p>
              </div>
            </div>

            <p className="max-w-[31ch] font-satoshi text-base font-medium leading-7 text-white/88 sm:text-[17px]">
              I build data, software, and AI systems that turn messy workflows
              into useful products.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/api/vcard"
                className={`${actionClass} col-span-3 bg-blue-700 text-white shadow-[0_18px_42px_rgba(29,78,216,0.28)] hover:bg-blue-600`}
              >
                <FiUserPlus className="h-4 w-4" />
                Save Contact
              </Link>

              <Link
                href={LINKEDIN_URL}
                target="_blank"
                className={`${actionClass} bg-white text-[#08090b] hover:bg-blue-50`}
              >
                <FiLinkedin className="h-4 w-4" />
                LinkedIn
              </Link>

              <Link
                href={mailHref}
                className={`${actionClass} col-span-2 border border-white/12 bg-white/[0.06] text-white hover:border-blue-500/40 hover:bg-blue-500/12`}
              >
                <FiMail className="h-4 w-4" />
                Email
              </Link>
            </div>

            <div className="rounded-[8px] border border-white/10 bg-white/[0.035]">
              {links.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex min-h-16 items-center justify-between gap-x-4 px-4 transition-colors hover:bg-white/[0.045] sm:min-h-[74px]"
                  >
                    <div
                      className={`flex min-w-0 items-center gap-x-3 ${
                        index === 0 ? "" : "border-t border-white/10"
                      } flex-1 self-stretch py-4`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#101318] text-blue-300 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-satoshi text-[15px] font-semibold text-white">
                          {item.label}
                        </p>
                        <p className="mt-0.5 truncate font-satoshi text-[12px] font-medium text-white/45">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <FiArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-colors group-hover:text-blue-300" />
                  </Link>
                );
              })}
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {["AI Engineering", "Data Platforms", "Product Systems"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-satoshi text-xs font-semibold text-white/68"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
