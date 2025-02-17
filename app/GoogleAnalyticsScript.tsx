import Script from 'next/script'
import React from 'react'

const GoogleAnalyticsScript = () => {
  return (
    <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id={{TRACK_ID}}" />
      <Script id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{{ TRACK_ID }}');`}
      </Script></>
  )
}

export default GoogleAnalyticsScript;