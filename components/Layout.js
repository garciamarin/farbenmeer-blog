import Head from 'next/head'

import Header from "./Header"

export default function Layout({children}) {
  return (
    <div >
        <Head>
            <title>Farbenmeer Blog</title>
            <meta name="description" content="by gerardo" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
      
        <Header/>
      
        <main >
            {children}
        </main>
        
    </div>
  )
}
