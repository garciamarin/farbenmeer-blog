import RenderBlogs from "../../components/RenderBlogs"
import BlogDetails from "../../components/BlogDetails"
import Link from "next/link"

import { blogs, client, getBlog } from "../../fetch/ClientGQL"


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

export default function Blog({loading, blog, error, blogposts}) {

  if(error) return (
    <>
        <p>There was an error, my friend.</p>
        <Link href="/gql"><p> Take me back, please! </p></Link> 
    </>
  )

  return (
    <RenderBlogs blogposts={blogposts}>
        <BlogDetails blog={blog} loading={loading}/>
    </RenderBlogs>
    )
}



