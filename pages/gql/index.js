import RenderBlogs from "../../components/RenderBlogs"
import { useRouter } from 'next/router'
import { useState } from "react";
import Link from "next/link";
import BlogDetails from "../../components/BlogDetails";

import {blogposts} from "../../public/DataMock/data"
import { blogs, client } from "../../fetch/ClientGQL";
import Layout from "../../components/Layout";
import LayoutGQL from "../../components/LayoutGQL";

 
export default function index({loading, error, blogs}) {
    
    if(error) return <div>Error fetching API, my friend.</div>
    
    return ( 
    <>
        { loading 
            ? <p>loading...</p> 
            : 
            // id ? 
            //     <RenderBlogs blogposts={blogs}>
            //         <BlogDetails blog={blogs[id]} loading={loading}/>
            //     </RenderBlogs> 
            //     :
            <RenderBlogs blogposts={blogs}/>   
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

//  index.getLayout = function getLayout(page) {
//     return (
//       <LayoutGQL>
//         {page}
//       </LayoutGQL>
//     )
//   }

