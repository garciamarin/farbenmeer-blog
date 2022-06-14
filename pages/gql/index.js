import RenderBlogs from "../../components/RenderBlogs"
import {blogposts} from "../../public/DataMock/data"

export default function index() {

    const error = false

    if(error.isError) return renderError()

    return <RenderBlogs blogposts={blogposts}/>
}
