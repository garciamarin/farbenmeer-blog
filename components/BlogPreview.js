import Link from "next/link";
import { useRouter } from 'next/router'
import { dateToHuman } from "./dateToHuman";

export default function BlogPreview({blog}) {
  const router = useRouter()

  return (
    <li data-testid={`blog-${blog.id}`} className='mb-3 shadow-lg  bg-green-500 rounded-lg group'> 
        <div onClick={()=> {
              router.push(`/gql/?blog=${blog.id}`, 
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
    </li>
  )
}

  {/* <Link href={`/gql/?blog=${blog.id}`}  >
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
        </Link> */}