import { render, screen } from '@testing-library/react'

import Home from '../../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a Link', () => {
    render(<Home />)
    
    const graphQLLink = screen.getByText(/GraphQL/i)
    const restLink = screen.getByText(/rest/i)

    expect(graphQLLink).toBeInTheDocument()
    expect(restLink).toBeInTheDocument()

  })
})

