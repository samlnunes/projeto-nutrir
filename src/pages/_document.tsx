import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta property="og:image" content="https://projeto-nutrir.vercel.app/logo-white.png" />
        <meta name="twitter:image" content="https://projeto-nutrir.vercel.app/logo-white.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
