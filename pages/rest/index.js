import { useRouter } from 'next/router'

import { blogs, client } from "../../fetch/ClientGQL";

import BlogDetails from "../../components/BlogDetails";
import RenderBlogs from "../../components/RenderBlogs"
import ServerError from "../../components/ServerError";
import BlogNotFound from "../../components/BlogNotFound";
import useApiRest from '../../fetch/useApiRest';
import { useEffect } from 'react';
import Loading from '../../components/loading';

export default function Rest() {
    
    const api = 'rest'

    const router = useRouter()
    const {loading, error, getBlogs, blogs} = useApiRest()

    useEffect(() => getBlogs(), [])
    
    const blogId = router?.query.blog
    const isBlog = blogs?.find( blog => blog.id === blogId )

    if(error) return < ServerError />
    if( blogId && !isBlog ) return < BlogNotFound />

    return ( 
    <>
        { loading 
            ?   < Loading />
            :   <RenderBlogs blogposts={blogs} api={api}>
                    <BlogDetails blog={isBlog} loading={loading} api={api}/>
                </RenderBlogs> 
        }
    </>
    )
    
}
