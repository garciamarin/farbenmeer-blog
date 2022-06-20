import Link from "next/link"

export default function Home() {
  
  const apiTextElement = (api) => {
    return (
      <div className="m-2">
        <p>
          To blog using  
          <Link  href={api==='Rest' ? `/rest/` : `/gql/`} > 
            <span className="
                text-green-800 
                hover:cursor-pointer 
                hover:text-green-900"
            >  
              {` ${api} `} 
            </span>
          </Link>
          API
        </p>
      </div> 
)}

  return (  
    <div data-testid='Link' className="
      font-medium text-left text-lg
      w-fit mx-auto mt-[5rem] p-10 
      bg-gradient-to-b from-sky-700 to-sky-400
      rounded-2xl
      shadow-lg
      "
    >
      {apiTextElement('GraphQL')}
      {apiTextElement('Rest')} 
      
    </div>
  )
}


