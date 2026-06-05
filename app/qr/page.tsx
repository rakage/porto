import type { Metadata } from "next";

import QrPage from "./qr-page";

export const metadata: Metadata = {
  title: "Raka Luthfi QR Code",
  description: "QR code for Raka Luthfi's networking contact page.",
};

export default function Page() {
  return <QrPage />;
}
