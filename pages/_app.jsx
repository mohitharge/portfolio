// _app.jsx
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

// Utils
import SetGridGap from '../components/utils/set.grid.util';

// Structure
import Layout from '../components/layout/layout';

// CSS reset (only import once globally)
import 'the-new-css-reset/css/reset.css';

// Fontsource local font import (use only weights needed)
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

// Devicon CSS (consider dynamic import if only used on certain pages)
import 'devicon/devicon.min.css';

// Global CSS - keep minimal and scoped if possible
import '../styles/css/variables.css';
import '../styles/css/global.css';

const GA_TRACKING_ID = 'G-CWSSQB2XBH';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag?.('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
        <SetGridGap />
        <Analytics />
      </Layout>
    </>
  );
}