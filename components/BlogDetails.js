import Link from "next/link"
import { dateToHuman } from "./dateToHuman"

export default function BlogDetails ({loading, blog}) { 
    return ( loading ? 
          <p> loading </p> :
          <div>
            <Link href="/gql"><p> Back to blogs</p></Link>   
            <div >      
              <img  src={blog.image} alt="blog" width={300}/> 
              <p >{ blog.title}</p> <p> {blog.author} </p>
              <p>{dateToHuman(blog.created)}</p>
              <br />
              <p> {blog.subtitle}</p>
              <br />
            </div>
            <p>{blog.content}</p>
          </div>
    )
    }