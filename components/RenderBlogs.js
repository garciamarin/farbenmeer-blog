import BlogPreview from "./BlogPreview"

export default function  RenderBlogs ({children, blogposts}) {
    return ( 
        <div >
            <div >   
                <ul>
                    { blogposts?.map( 
                        (blog) =>  
                            <BlogPreview blog={blog} key={blog.id} />
                    )}
                </ul>
            </div> 
            {children}
        </div>
    )
}
