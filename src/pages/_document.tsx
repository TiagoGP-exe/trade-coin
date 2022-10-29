import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang='pt-br'>
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href={`https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap`}
        rel='stylesheet'
      />
    </Head>
    <body className='bg-[#EAECEF] dark:bg-[#2C2F3F]'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
