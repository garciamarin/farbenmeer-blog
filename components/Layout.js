import Head from 'next/head'
import Header from "./Header"



export default function Layout({children}) {
  return (
    <div className='bg-yellow-100 bg-cat min-h-screen'>
        <Head>
            <title >Farbenmeer Blog</title>
            <meta name="description" content="by gerardo" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Montserrat:wght@100;300;400;500;600;700;800;900&family=Space+Grotesk&display=swap" rel="stylesheet"/>
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
      
        <Header/>
      
        <main >
            {children}
        </main>
        
    </div>
  )
}
