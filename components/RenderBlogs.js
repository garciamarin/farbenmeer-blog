import BlogPreview from "./BlogPreview"

export default function  RenderBlogs ({children, blogposts}) {
    return ( 
        <div className="px-[2em] flex justify-between mt-[1.5em]">
           
            <div className="w-2/5">   
                <div className="scrollbar h-[85vh] p-[.5rem] overflow-y-auto">
                    { 
                        blogposts?.map( 
                            (blog) =>  
                                <div>
                                <BlogPreview blog={blog} key={blog.id} />
                                </div>
                    )}
                </div>
            </div> 

            {children}
        </div>
    )
}
