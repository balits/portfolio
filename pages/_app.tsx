import React, { useEffect } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { hotjar } from 'react-hotjar'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(
      Number(process.env.NEXT_PUBLIC_HJID) || -1,
      Number(process.env.NEXT_PUBLIC_HJSV) || -2,
    )
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <Script
        id="HOTJAR"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3565297,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
    </>
  )
}
