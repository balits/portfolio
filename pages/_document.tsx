import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Balits Peter Marton</title>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
