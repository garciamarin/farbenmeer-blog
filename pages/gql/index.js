import { useRouter } from 'next/router'

import { blogs, client } from "../../fetch/ClientGQL";

import RenderBlogs from "../../components/RenderBlogs"
import BlogDetails from "../../components/BlogDetails";
import BlogNotFound from "../../components/BlogNotFound";
import ServerError from "../../components/ServerError";
import Loading from '../../components/loading';

export default function index({loading, error, blogs}) {
    
    const api = 'gql'
    const router = useRouter()

    const blogId = router?.query.blog
    const isBlog = blogs?.find( blog => blog.id === blogId )

    if(error) return <ServerError/>
    if( blogId && !isBlog ) return <BlogNotFound/>
    
    return ( 
    <>
        { 
            loading ?
                <Loading/> :
                <RenderBlogs blogposts={blogs} api={api}>
                    <BlogDetails blog={isBlog} loading={loading} api={api}/>
                </RenderBlogs> 
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


