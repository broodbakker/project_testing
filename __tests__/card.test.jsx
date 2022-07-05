/**
 * @jest-environment jsdom
 */


import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Card } from '../components/card';

const setup = () => {
  const utils = render(<Card />)
}


 describe('Card', () => {
  it("test card component",() => {
    setup()

   const card = screen.getByRole("heading")

   expect(card).toBeInTheDocument()


})

  //  it("test card component",() => {
  //       render(<Card card={mockProduct} />)

  //   const card = screen.getAllByTestId('card')
  //    expect(card.value).toBe('23')

  //  })
 })


