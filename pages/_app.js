import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var _hmt = _hmt || [];
		if (!window.location.href.includes('localhost')) {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b745eed9a32858c60c4cb8df99e38744";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    }
  }, [])
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap"/>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
        />
        <meta name="baidu-site-verification" content="e7Xf8PjkZ4" />
        <meta name="description" content="MinimalistYing 的个人网站" />
        <meta name="keyword" content="javascript,react,node,css,blog,frontend,博客,前端,技术,软件,编程,开发" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
