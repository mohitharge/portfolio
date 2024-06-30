// Core packages
import { Analytics } from '@vercel/analytics/react';
// import { LazyMotion, domAnimation } from "framer-motion"

// Utils
import SetGridGap from '../components/utils/set.grid.util'

// Structure
import Layout from '../components/layout/layout'
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "../node_modules/the-new-css-reset/css/reset.css"

// Fontsource local font import (https://github.com/fontsource/fontsource)
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

// Devicon import (https://github.com/devicons/devicon)
import '../node_modules/devicon/devicon.min.css'

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'

/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */

const GA_TRACKING_ID = 'G-CWSSQB2XBH';

const handleRouteChange = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
	return (
		<>
		{/* <LazyMotion features={domAnimation}> */}
			<Layout>
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
				<Component {...pageProps} />
				<SetGridGap />
				<Analytics />
			</Layout>
		{/* </LazyMotion> */}
		</>
	)
}