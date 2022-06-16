import Link from "next/link"

export default function Home() {
  
  return (  
    <div data-testid='Link' className="
      font-medium text-center text-lg
      w-fit mx-auto mt-[5rem] p-10 
      bg-gradient-to-b from-sky-700 to-sky-400
      rounded-2xl
      shadow-lg
      "
    >
      <span >To blog using </span>
      <Link  href={`/gql/`} > 
      <span className="text-green-800 hover:cursor-pointer hover:text-green-900"> GraphQL server</span>
      </Link>
    </div>
  )
}


