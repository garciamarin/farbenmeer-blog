import Link from "next/link";

import { dateToHuman } from "./dateToHuman";

export default function BlogPreview({blog}) {

  return (
    <li> 
        <Link href={`/gql/blog/${blog.id}`}>
            <div>
                <img src={blog.image} alt="blog" width={100} />
                <div >
                    <p> {blog.title} </p>
                    <p> {blog.author} </p>
                    <p> {dateToHuman(blog.created)}</p>
                    <br />
                    <p> {blog.subtitle}</p> 
                </div>      
            </div>
        </Link>
    </li>
  )
}
