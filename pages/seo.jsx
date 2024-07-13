// components/SEO.js
import Head from 'next/head';

const SEO = ({ title, description, keywords, author, image, url, structuredData }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="google-site-verification" content="CfAeejrlRWQUpf_WMBXiVW-dgHiUtnHdV1V3Z-VOwMQ" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="mythumbnail.png" />
      <meta property="og:image:alt" content="Profile photo of Mohit Harge" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Portfolio" />
      <meta property="og:locale" content="en-us" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@yourtwitterhandle" />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/x-icon" href="favicon/t.ico"></link>

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEO;