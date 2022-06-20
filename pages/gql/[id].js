import { blogs, client, getBlog } from "../../fetch/ClientGQL"

import RenderBlogs from "../../components/RenderBlogs"
import BlogDetails from "../../components/BlogDetails"
import ServerError from "../../components/ServerError"

export default function Blog({loading, blog, error, blogposts}) {

  if(error) return < ServerError />

  return (
    <RenderBlogs blogposts={blogposts}>
        <BlogDetails blog={blog} loading={loading}/>
    </RenderBlogs>
    )
}

export const getStaticPaths = async ( ) => { 
  
  const { data } = await client.query({query: blogs, });
  const paths = data.blogposts.map( blog => {
    return { params: { id: blog.id } }
  })

  return {paths, fallback:false}
}

export const getStaticProps = async (context) => { 

  const { loading , error, data } = await client.query({ query:
        getBlog ,
        variables: { id: context.params.id }
    })
    const blogposts = await client.query({
      query: blogs ,
    });
  
  return {
      props:{
          loading,
          error: error || null,
          blog: data.blogpost,
          blogposts: blogposts.data.blogposts
      }
  }
}


