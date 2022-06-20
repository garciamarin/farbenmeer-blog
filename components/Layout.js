import Head from 'next/head'
import Header from "./Header"
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Layout({children}) {

  const router = useRouter()
  const [route, setRoute] = useState('/')

  useEffect(() =>
    setRoute(()=>router.route)  
    , [router.route])
  
  const bgColor = route === '/' 
                    ? 'bg-stone-100' 
                    : route === '/gql'  
                      ? 'bg-amber-200' 
                      : 'bg-lime-700'
  
  return (
    <div className={`${bgColor} bg-cat min-h-screen`}>
        <Head>
            <title >Farbenmeer Blog</title>
            <meta name="description" content="by gerardo" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Montserrat:wght@100;300;400;500;600;700;800;900&family=Space+Grotesk&display=swap" rel="stylesheet"/>
        </Head>
      
        <Header route={route}/>
      
        <main >
            {children}
        </main>
        
    </div>
  )
}
