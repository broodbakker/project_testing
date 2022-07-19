/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Navbar } from '../components/navbar';

  describe('render Card', () => {
   it("test card component",() => {
     const {getByTestId} = render(<Navbar />)

    const card = getByTestId("navbar")

    expect(card).toBeDefined()

 })
  })


