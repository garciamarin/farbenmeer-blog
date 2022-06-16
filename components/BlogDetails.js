import Link from "next/link"
import { dateToHuman } from "./dateToHuman"


export default function BlogDetails ({loading, blog}) { 
    return ( loading ? 
          <p> loading </p> :
          <div className="w-[55%] 
            h-fit 
            overflow-none
            bg-gradient-to-r from-pink-600 to-pink-700
            p-4
            rounded-lg
            shadow-lg
            opacity-[.95]
            "
            data-testid='blog-details'
          >
            <Link href="/gql">
              <p className="
                  w-fit
                  ml-auto
                  p-4 
                  font-medium 
                  hover:text-yellow-100 hover:cursor-pointer
              "> 
                Close 
              </p>
            </Link> 
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