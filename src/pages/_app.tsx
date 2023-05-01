import Navbar from "@/components/UI/Navbar";
import "@/styles/globals.css";
import { Roboto_Flex } from "next/font/google";
import type { AppProps } from "next/app";

// If loading a variable font, you don't need to specify the font weight
const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoFlex.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
