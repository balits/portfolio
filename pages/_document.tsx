import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="language" content="English" />
        <link rel="favicon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image"
          sizes="any"
        />

        <meta
          name="description"
          content="A Computer Science student from Budapest. I'm passionate about bringing ideas to life and solving complex problems."
        />
        <meta property="og:title" content="Balits Peter Marton" />
        <meta
          property="og:description"
          content="A Computer Science student from Budapest. I'm passionate about bringing ideas to life and solving complex problems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.balitspeter.me" />
        {/*
        <meta
          property="og:image"
          content="https://www.example.com/og-image.jpg"
        />
        */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Balits Peter Marton" />
        <meta
          name="twitter:description"
          content="A Computer Science student from Budapest. I'm passionate about bringing ideas to life and solving complex problems."
        />
        {/*
        <meta
          name="twitter:image"
          content="https://www.example.com/twitter-image.jpg"
        />
        <meta name="twitter:creator" content="@yourtwitterhandle" />
        */}
        <Script
          id="HOTJAR"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3565316,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
