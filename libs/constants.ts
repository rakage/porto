import { valueOrDefault } from "./utils";

export const RECAPTCHA_SITE_KEY = valueOrDefault(
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
  ""
);

export const CV_LINK = valueOrDefault(
  process.env.NEXT_PUBLIC_CV_LINK as string,
  ""
);

export const RECAPTCHA_SECRET_KEY = valueOrDefault(
  process.env.RECAPTCHA_SECRET_KEY as string,
  ""
);
