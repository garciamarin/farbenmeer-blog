import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { client } from '../../../fetch/ClientGQL'
import Index, {getStaticProps} from '../../../pages/gql/index'
import {blogposts} from '../../../public/DataMock/data'
import { useRouter } from 'next/router'
import next from 'next'

describe('Index', () => {
    it('renders props correctly', () => {

        render(<Index  loading={false} error={null} blogs= {blogposts}/>)
        
        blogposts.forEach( blog => {
            
            const blogpost =  screen.getByTestId(`blog-${blog.id}`)
            
            expect(blogpost).toBeInTheDocument()
        
        })
    })

    it('hadnles loading correctly', () => {

        render(<Index  loading={true} error={null} blogs= {blogposts}/>)
        
        const loadingMessage =  screen.getByText(/loading/i)
        
        expect(loadingMessage).toBeInTheDocument()
 
    })

    it('handles error fetch correctly', () => {

        render(<Index  loading={false} error={true} blogs= {blogposts}/>)
        
        const errorWarning =  screen.getByText(/error/i)
        
        expect(errorWarning).toBeInTheDocument()
 
    })
})

describe('getStaticProps', () => {
it('getStaticProps returns the correct props', async () => {
        
    const data = {blogposts} 
 
    jest.spyOn(client, 'query').mockImplementation(async () => ({
        loading: false , error: false, data
    }
    ))

    const response = await getStaticProps({})

    expect(client.query).toHaveBeenCalled()
    expect(response).toEqual({
        props:{
            loading: false,
            error:  null,
            blogs: data.blogposts}
    })
})
})

// jest.mock("next/router", () => ({
//     useRouter() {
//         return {
//             query: {blog:'1'},
//         };
//     }
// }));
jest.mock("next/router", () => ({
    useRouter: jest.fn()
}));

describe('endpoint ?blog={id}', () => {
   
    
    it('renders blog details', async () => {
        
        useRouter.mockImplementation( () =>     {
            return {
                query: {blog:'1'}
            };
        })
        const data = {blogposts} 
        
        const router = useRouter()    
        const index = render(<Index  loading={false} error={null} blogs= {blogposts}/>)

        const blogDetails = screen.getByTestId(/blog-details/i)
        expect(blogDetails).toBeInTheDocument()
    })

})


describe('endpoint ?blog={id} for invalid id', () => {
    
    it('renders error ', async () => {
        useRouter.mockImplementation( () =>     {
            return {
                query: {blog:'23'}
            };
        })
        const data = {blogposts} 

        const router = useRouter()    
        const index = render(<Index  loading={false} error={null} blogs= {blogposts}/>)
        const blogDetails = screen.getByText(/blog not found/i)
        expect(blogDetails).toBeInTheDocument()
    })    
})


it('renders loading', async () => {
        
    useRouter.mockImplementation( () =>     {
        return {
            query: {blog:'1'}
        };
    })
    render(<Index  loading={true} error={null} blogs= {blogposts}/>)
        
    const loadingMessage =  screen.getByText(/loading/i)
    
    expect(loadingMessage).toBeInTheDocument()
})