import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../../components/Header'


describe('Header', () => {
  it('renders Title and Image', () => {
    render(<Header />)
    
    const header = screen.getByRole('heading',/farbenmeer blog/i)
    const image = screen.getByRole('img',/logo/i)
    expect(header).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})