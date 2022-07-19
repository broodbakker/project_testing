/**
 * @jest-environment jsdom
 */


import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Card } from '../components/card';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

  it("test card component",() => {
    const {getByTestId} = render(<Card  cardData={data} />)

   const card = getByTestId("card")

   expect(card).toBeDefined()

})



