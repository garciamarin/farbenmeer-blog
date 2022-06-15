import Link from "next/link"

export default function Home() {
  
  return (  
    <div data-testid='Link' className="font-medium text-center text-lg w-fit mx-auto bg-[#0285c727] rounded-2xl p-10 ">
      <span >To blog using </span>
      <Link  href={`/gql/`} > 
      <span className="text-green-700 hover:cursor-pointer hover:text-green-900"> GraphQL server</span>
      </Link>
    </div>
  )
}


