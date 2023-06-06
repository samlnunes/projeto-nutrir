import "@/styles/globals.css";
import { CollectPointProvider } from "@/utils/context/CollectPoint";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CollectPointProvider>
      <Component {...pageProps} />
    </CollectPointProvider>
  );
}
