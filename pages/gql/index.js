import RenderBlogs from "../../components/RenderBlogs"
import { useRouter } from 'next/router'
import Link from "next/link";

import BlogDetails from "../../components/BlogDetails";

import { blogs, client } from "../../fetch/ClientGQL";

 
export default function index({loading, error, blogs}) {
    
    const router = useRouter()

    const blogId = router?.query.blog
    const isBlog = blogs?.find( blog => blog.id === blogId )

    const renderNotFound = () => { 
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
                <div> Blog not found.  Sorry, you! </div>
                <br />
                <h2> 4 0 4 </h2>
                <br />
                <p>
            But I can take you <Link href="/gql">back</Link>.
                </p> 
            </div> 
    )}

    const renderError = () => { 
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
            But I can take you <Link href="/gql">back</Link>.
                </p> 
            </div> 
    )}

    if(error) return renderError()
    if( blogId && !isBlog ) return renderNotFound()
    
    return ( 
    <>
        { loading 
            ? <p>loading...</p> 
            : 
            isBlog ? 
                <RenderBlogs blogposts={blogs}>
                    <BlogDetails blog={isBlog} loading={loading}/>
                </RenderBlogs> 
                :
                <RenderBlogs blogposts={blogs}/>   
        }
    </>
    )
    
}

export const getStaticProps = async () => { 

    const { loading , error, data } = await client.query({
        query: blogs ,
      });
    return {
        props:{
            loading,
            error: error || null,
            blogs: data.blogposts
        }
    }

 }

//  index.getLayout = function getLayout(page) {
//     return (
//       <LayoutGQL>
//         {page}
//       </LayoutGQL>
//     )
//   }

