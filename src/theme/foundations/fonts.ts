import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const fonts = {
  body: `${inter.style.fontFamily}, system-ui, sans-serif`,
  heading: `${inter.style.fontFamily}, system-ui, sans-serif`,
};
