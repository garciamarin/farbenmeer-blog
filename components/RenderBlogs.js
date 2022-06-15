import BlogPreview from "./BlogPreview"

export default function  RenderBlogs ({children, blogposts}) {
    return ( 
        <div className="px-[1em] flex justify-between mt-[1.5em]">
            <div className="w-2/5" >   
                <ul className="scrollbar h-[85vh] p-[.5rem] overflow-y-auto">
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
