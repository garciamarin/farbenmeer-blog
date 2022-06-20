import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useRouter } from 'next/router'

import { client } from '../../../fetch/ClientGQL'
import Index, {getStaticProps} from '../../../pages/gql/index'
import {blogposts} from '../../../public/DataMock/data'

describe('Layout and logic', () => {

    it('renders blogposts from props correctly', () => {

        render(<Index  loading={false} error={null} blogs= {blogposts}/>)
        
        blogposts.forEach( blog => {
            
            const blogpost =  screen.getByTestId(`blog-${blog.id}`)
            
            expect(blogpost).toBeInTheDocument()
        
        })
    })

    it('handles loading correctly', () => {

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
   
    it('renders blog details and close button', async () => {
        
        useRouter.mockImplementation( () =>     {
            return {
                query: {blog:'1'}
            };
        })
   
        render(<Index  loading={false} error={null} blogs= {blogposts}/>)

        const blogDetails = screen.getByTestId(/blog-details/i)
        const closeButton = screen.getByText(/close/i)

        expect(blogDetails).toBeInTheDocument()
        expect(closeButton).toBeInTheDocument()
    })

    it('renders "not found" if blog id does not exist', async () => {
        
        useRouter.mockImplementation( () =>     {
            return {
                query: {blog:'23'}
            };
        })

        render(<Index  loading={false} error={null} blogs= {blogposts}/>)
        const blogDetails = screen.getByText(/blog not found/i)
        expect(blogDetails).toBeInTheDocument()
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

})



