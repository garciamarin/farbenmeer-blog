import RenderBlogs from "../../components/RenderBlogs"
import { useRouter } from 'next/router'

import BlogDetails from "../../components/BlogDetails";

import {blogposts} from "../../public/DataMock/data"
import { blogs, client } from "../../fetch/ClientGQL";
import LayoutGQL from "../../components/LayoutGQL";

 
export default function index({loading, error, blogs}) {
    
    const router = useRouter()

    const blogId = router.query.blog
    const isBlog = blogs.find( blog => blog.id === blogId )

    if(error) return <div>Error fetching API, my friend.</div>
    if( blogId && !isBlog ) return <div>Blog not found</div>
    
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

