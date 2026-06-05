import type { Metadata } from "next";

import ConnectPage from "./connect-page";

export const metadata: Metadata = {
  title: "Connect with Raka Luthfi",
  description:
    "A quick networking page for Raka Luthfi, Data, Software, and AI Engineer.",
};

export default function Page() {
  return <ConnectPage />;
}
