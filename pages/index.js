import Link from "next/link"

export default function Home() {
  
  return (
    <Link href={`/gql/`} > 
      <h4>To blog using GraphQL server</h4>
    </Link>
  )
}


