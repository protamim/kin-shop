import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Online Fashion, Kids clothes & homeware",
  description:
    "Shop the latest women&#39;s, men&#39;s &amp; children&#39;s fashion plus homeware, beauty, designer brands &amp; more. Next day delivery &amp; free returns available. Shop now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
