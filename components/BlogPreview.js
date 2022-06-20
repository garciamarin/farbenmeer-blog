import Link from "next/link";
import { useRouter } from 'next/router'
import { dateToHuman } from "./dateToHuman";

export default function BlogPreview({ blog, id, api }) {
  const router = useRouter()

  return (
    <div data-testid={`blog-${blog.id}`} 
      className='mb-3 
      hover:shadow-md hover:shadow-green-500/50
      bg-gradient-to-r from-green-500 to-green-600
      rounded-lg group
      '
      key={id}
    > 
        <div onClick={()=> {
              router.push(`/${api}/?blog=${blog.id}`, 
              undefined, { shallow: true })}}
        >
          <div className='group-hover:cursor-pointer' >
              <img className=' float-right m-2   rounded-[50%] z-10 ' src={blog.image} alt="blog" width={100} />
              <div className=" p-2 ">
                <div className="text-left">
                  <p className='group-hover:text-yellow-100 font-bold font-alt '> {blog.title} </p>
                  <p> {dateToHuman(blog.created)}</p> 

                  <p className="mt-[.6rem]"> {blog.subtitle}</p>
                  <p> {blog.author} </p>

              </div>                  
              </div>      
          </div>
        </div>
    </div>
  )
}
