import RenderBlogs from "../../../components/RenderBlogs"
import BlogDetails from "../../../components/BlogDetails"

import { blogposts } from "../../../public/DataMock/data"

// export const getStaticPaths = async ( ) => { 
  
//   const paths = blogposts.map( blog => {
//     return { params: { id: blog.id.toString() } }
//   })
//   return {paths, fallback:false}
// }

// export const getStaticsProps = (context) => { 

//   const id = context.params.id
//   const blog = blogposts[id]

//   return { props: {blog} }
//  }

export default function Blog() {
  const loading = false
  const error = false
  const blog = blogposts[0]
  
    if(error.isError) return renderError()

    return (
      <RenderBlogs blogposts={blogposts}>
          <BlogDetails blog={blog} loading={loading}/>
      </RenderBlogs>
    )
}
