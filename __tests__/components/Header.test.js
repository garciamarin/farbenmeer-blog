import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../../components/Header'

  it('renders Title and Image', () => {
    render(<Header />)
    
    const header = screen.getByRole('heading',/farbenmeer blog/i)
    const image = screen.getByRole('img',/logo/i)
    expect(header).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })

describe('renders subtitle correctly', () => { 

  it('Subtitle is "rest" api when route is /rest', async () => {

    render(<Header route={'/rest'}/>)
    
    const subtitle = screen.getByText(/rest api/i)
    
    expect(subtitle).toBeInTheDocument()
})
  
  it('Subtitle is "GraphQL" when route is /gql', async () => {

      render(<Header route={'/gql'}/>)
      
      const subtitle = screen.getByText(/GraphQL Api/i)
      
      expect(subtitle).toBeInTheDocument()
    })

    it('There is no subtitle nothing when route is /', () => {

        render(<Header route={'/'}/>)
        
        const subtitle = screen.getByTestId('subtitle')
        
        expect(subtitle).toBeInTheDocument()
    })

})