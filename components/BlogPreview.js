import Link from "next/link";
import { useRouter } from 'next/router'
import { dateToHuman } from "./dateToHuman";

export default function BlogPreview({blog}) {
  const router = useRouter()

  return (
    <li> 
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
        <div onClick={()=> {
              router.push(`/gql/?blog=${blog.id}`, 
              undefined, { shallow: true })}}
        >
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
        </div>
    </li>
  )
}
