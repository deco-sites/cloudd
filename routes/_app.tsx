import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />
<script defer data-domain="getcloud.doshare.me" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"></script>
<script>window.plausible = window.plausible || </script>

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        // <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
