/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'




const setup = () => {
  const utils = render(<Home />)
  return {
    ...utils,
  }
}

describe('Home page', () => {
  it('renders a heading', () => {
    setup()

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  // it("renders a text input",() => {
  //   const {input} = setup()

  //   expect(input).toBeInTheDocument()

  //   fireEvent.change(input, {target: {value: '23'}})

  //   expect(input.value).toBe('23')

  // })

  // it("onChange should be the value",() => {
  //   const {input} = setup()

  //   fireEvent.change(input, {target: {value: '23'}})

  //   expect(input.value).toBe('23')

  // })

})


