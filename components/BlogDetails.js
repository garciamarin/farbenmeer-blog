import Link from "next/link"
import { dateToHuman } from "./dateToHuman"


export default function BlogDetails ({loading, blog}) { 
    return ( loading ? 
          <p> loading </p> :
          <div className="w-[55%] 
            h-fit 
            overflow-none
            bg-pink-500 
            p-4
            rounded-lg
            shadow-lg
            opacity-[.95]
            "
            data-testid='blog-details'
          >
            <Link href="/gql"><p className="p-4 text-right font-medium"> Close </p></Link> 
            <div >      
              <img  className='
                  mr-4  ml-0
                  float-left  
                  rounded-lg
                  [clip-path:circle(90%_at_20%_0%)]
                  [shape-outside:circle(90%_at_20%_0%)]
                ' 
                src={blog.image} 
                alt="blog" 
                width={300}
              /> 
              <h2 >{ blog.title}</h2> 
              <h3> {blog.subtitle}</h3>
              <p> {blog.author} </p>
              <p>{dateToHuman(blog.created)}</p>
              <br />
            </div>
            <p className="">{blog.content}</p>
          </div>
    )
    }