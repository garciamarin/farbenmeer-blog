import Link from "next/link";

export default function ServerError () { 
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
            <div>Error fetching API, my friend.</div>
            <br />
            <h2> 5 0 0 </h2>
            <br />
            <p>
                I can take you <Link href="/gql">back</Link>.
            </p> 
        </div> 
)}