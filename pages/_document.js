import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta */}
        <meta
          name="description"
          content="Join LearnBetter's globally accredited Masters program in Cloud Computing and AI System Design. Get 100% job assurance, learn from industry experts, and secure high-paying roles at top tech companies."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Optional: SVG fallback */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
