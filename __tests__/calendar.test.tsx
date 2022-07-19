/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { DefaultBodyType, rest } from 'msw';
import { setupServer } from 'msw/node';

it.todo('calendar');

const server = setupServer(
  rest.get<DefaultBodyType, { message: string }>(
    '/api/get-daysOfTheMonth/jan',
    (req, res, ctx) => {
      return res(ctx.delay(100), ctx.json('31 days'));
    }
  ),
  rest.get<DefaultBodyType, { message: string }>(
    '/api/get-daysOfTheMonth/feb',
    (req, res, ctx) => {
      return res(ctx.delay(100), ctx.json('28 days or 29 days'));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
