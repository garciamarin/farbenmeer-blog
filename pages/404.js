import Link from "next/link"

export default function NotFound() {
  return (
    <div data-testid='Link' className="
    font-medium text-center text-lg
    w-fit mx-auto mt-[5rem] p-10 
    bg-gradient-to-b from-sky-700 to-sky-400
    rounded-2xl
    shadow-lg
    bg-winston
    "
    >

      <div> No page here.</div>
      <br />
      <h2> 4 0 4 </h2> 
      <br />
      <p>
        Sorry, you! But I can take you 
        <Link href="/gql">back</Link>.
      </p> 
    </div>
  )
}
