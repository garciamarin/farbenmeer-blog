import { render, screen } from '@testing-library/react'

import Home from '../../pages/index'
import '@testing-library/jest-dom'
import Router from 'next/router';

describe('Home', () => {
  it('renders a Link', () => {
    render(<Home />)

    const link = screen.getByText(/GraphQL server/i)
    expect(link).toBeInTheDocument()
  })
})

