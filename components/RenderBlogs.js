import BlogPreview from "./BlogPreview"

export default function  RenderBlogs ({ children, blogposts, api }) {
    return ( 
        <div className="px-[2em] flex justify-between mt-[1.5em]">
           
            <div className="w-2/5">   
                <div className="scrollbar h-[85vh] p-[.5rem] overflow-y-auto">
                    { 
                        blogposts?.map( 
                            (blog) =>  
                                <BlogPreview blog={blog} key={blog.id} api={api} />
                    )}
                </div>
            </div> 

            {children}
        </div>
    )
}
