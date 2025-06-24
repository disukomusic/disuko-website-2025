import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { initPlasmicLoader } from '@plasmicapp/loader-react';

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: 'x4VgG6kzZCVuaqknYN7tgc', // get this from Plasmic dashboard
            token: '', // optional, if you have private projects
        }
    ],
});


import { LatestCommit } from '@/components/LatestCommit';

PLASMIC.registerComponent(LatestCommit, {
    name: 'LatestCommit',
    props: {}
});


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
