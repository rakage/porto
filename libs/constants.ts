import { valueOrDefault } from "./utils";

export const RECAPTCHA_SITE_KEY = valueOrDefault(
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
  "",
);

export const CV_LINK = valueOrDefault(
  process.env.NEXT_PUBLIC_CV_LINK as string,
  "",
);

export const SITE_URL = valueOrDefault(
  process.env.NEXT_PUBLIC_SITE_URL as string,
  "",
);

export const CONTACT_EMAIL = valueOrDefault(
  process.env.NEXT_PUBLIC_CONTACT_EMAIL as string,
  "",
);

export const CONTACT_PHONE = valueOrDefault(
  process.env.NEXT_PUBLIC_CONTACT_PHONE as string,
  "+6285155155969",
);

export const LINKEDIN_URL = valueOrDefault(
  process.env.NEXT_PUBLIC_LINKEDIN_URL as string,
  "https://www.linkedin.com/in/rakaluth/",
);

export const GITHUB_URL = valueOrDefault(
  process.env.NEXT_PUBLIC_GITHUB_URL as string,
  "https://github.com/rakage",
);

export const CALENDAR_URL = valueOrDefault(
  process.env.NEXT_PUBLIC_CALENDAR_URL as string,
  "",
);

export const RECAPTCHA_SECRET_KEY = valueOrDefault(
  process.env.RECAPTCHA_SECRET_KEY as string,
  "",
);
