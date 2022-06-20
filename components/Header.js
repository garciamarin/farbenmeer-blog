import Link from "next/link";

export default function Header({route}) {


  const blueGradient = 'from-sky-700 via-sky-600 to-[#38bff811]' 
  const greenGradient = 'from-green-900 via-green-600 to-#16a34a50' 
  const violetGadient = 'from-violet-900 via-violet-800 to-[#5b21b611]'

  const bgColor = 
          route === '/' 
            ? blueGradient
            : route === '/gql' 
              ? greenGradient
              : violetGadient
  
  const subTitle = 
          route==='/' 
            ? '' 
            : route === '/rest' 
              ? 'Rest Api' 
              : 'GraphQL Api'

  return (
    <div className={`
      h-[170px] 
      bg-gradient-to-b ${bgColor} 
      pt-[1rem] pb-[3rem]`}
    >

      <img 
        className='
          float-left 
          relative left-[10%] rounded-[50%] 
          brightness-75	
        ' 
        src={'https://farbenmeer.de/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Ffarbenmeer%2F89295ea8-83a6-4687-b724-b2b3cabe846a_2021_07_farbenmeer_Portraits_0627.jpg%3Fw%3D1200%26auto%3Dcompress%2Cformat%26rect%3D0%2C159%2C2143%2C2679%26h%3D625&w=1920&q=75'} 
        alt="logo" width={100} height={100} />
      
      <p className='
        text-zinc-100 font-medium 
        float-right relative 
        left-[-10%] top-[4.5rem]' 
      >
        {subTitle}  
      </p> 

      <Link  href={`/`} > 
        
        <h1 className="hover:cursor-pointer relative z-10 w-fit p-0 top-[-4.5rem] left-[10%] text-zinc-100" >
          
          Farbenmeer 
          <br/> 
          Blog
        
        </h1>

      </Link>
    </div>  
  )
}
