import Link from "next/link"
import { useEffect } from "react"
import { useState } from "react"
import { dateToHuman } from "./dateToHuman"
import Loading from "./loading"


export default function BlogDetails ({loading, blog, api}) { 
    
  if(!blog) return 
  
  const [copySuccess, setCopySuccess] = useState('')
  const [blogURL, setBlogURL] = useState(`http://localhost:3000/${api}?blog=${blog.id}`)
  const copyHandler = () => { 
    navigator.clipboard.writeText(blogURL)
    setCopySuccess('Link Copied!')
  } 
  
  useEffect(() => {
    setBlogURL(`http://localhost:3000/${api}?blog=${blog.id}`)
    setCopySuccess('')
  }, [blog])
  
  return ( loading ? 
          <Loading/> :
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
            <div className="flex jusstify-around">
              
              <div className={
                copySuccess ?
                  `w-fit
                  text-amber-400                  
                  mb-4
                  font-medium` 
                :
                  `w-fit
                  mb-4
                  font-medium 
                hover:text-yellow-100 hover:cursor-pointer`
                } 
                onClick={copyHandler}
              >
                {copySuccess || `Copy link`}
              </div>

              <Link href="/gql">
                <p className="
                    w-fit
                    mb-4
                    ml-auto
                    font-medium 
                    hover:text-yellow-100 hover:cursor-pointer
                "> 
                  Close 
                </p>
              </Link> 
            </div>
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