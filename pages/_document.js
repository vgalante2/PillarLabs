import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>
      
      </Head>       
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
