// components/FigmaEmbed.jsx

import { useEffect } from 'react';

const FigmaEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.figma.com/embed?embed_host=share&${url}`;
    script.async = true;
    script.onload = () => {
      console.log('Figma embed script loaded');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <iframe
      title="Figma Embed"
      width={800}
      height={450}
      src={`https://www.figma.com/embed?embed_host=share&${url}`}
      allowFullScreen
    />
  );
};

export default FigmaEmbed