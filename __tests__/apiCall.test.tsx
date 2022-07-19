import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
//components
import { Images } from '../components/images';

const photo = {
  id: '_NrJ278p3Sg',
  created_at: '2022-06-17T20:55:44-04:00',
  updated_at: '2022-07-09T22:26:36-04:00',
  promoted_at: '2022-06-18T10:24:02-04:00',
  width: 6604,
  height: 4403,
  color: '#262626',
  blur_hash: 'LHA[pE,I5ikW1rJi$SsoITxH$,Ri',
  description: null,
  alt_description: null,
  urls: {
    raw: 'https://images.unsplash.com/photo-1655513733523-5bf06bb97477?ixid=MnwzNDQ5MzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc0NDM1MjQ&ixlib=rb-1.2.1',
    full: 'https://images.unsplash.com/photo-1655513733523-5bf06bb97477?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDQ5MzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc0NDM1MjQ&ixlib=rb-1.2.1&q=80',
    regular:
      'https://images.unsplash.com/photo-1655513733523-5bf06bb97477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDQ5MzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc0NDM1MjQ&ixlib=rb-1.2.1&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1655513733523-5bf06bb97477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDQ5MzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc0NDM1MjQ&ixlib=rb-1.2.1&q=80&w=400',
    thumb:
      'https://images.unsplash.com/photo-1655513733523-5bf06bb97477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDQ5MzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc0NDM1MjQ&ixlib=rb-1.2.1&q=80&w=200',
    small_s3:
      'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1655513733523-5bf06bb97477',
  },
  links: {
    self: 'https://api.unsplash.com/photos/_NrJ278p3Sg',
    html: 'https://unsplash.com/photos/_NrJ278p3Sg',
    download:
      'https://unsplash.com/photos/_NrJ278p3Sg/download?ixid=MnwzNDQ5MzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc0NDM1MjQ',
    download_location:
      'https://api.unsplash.com/photos/_NrJ278p3Sg/download?ixid=MnwzNDQ5MzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc0NDM1MjQ',
  },
  categories: [],
  likes: 23,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {},
  user: {
    id: 'bgHwSny1CTY',
    updated_at: '2022-07-09T21:10:58-04:00',
    username: 'skylerewing',
    name: 'Skyler Ewing',
    first_name: 'Skyler',
    last_name: 'Ewing',
    twitter_username: null,
    portfolio_url: 'https://www.youtube.com/channel/UCwXleP-l6d8OoqPbkTQrgWQ',
    bio: 'Grateful for every donation, no matter at what level!',
    location: null,
    links: {
      self: 'https://api.unsplash.com/users/skylerewing',
      html: 'https://unsplash.com/@skylerewing',
      photos: 'https://api.unsplash.com/users/skylerewing/photos',
      likes: 'https://api.unsplash.com/users/skylerewing/likes',
      portfolio: 'https://api.unsplash.com/users/skylerewing/portfolio',
      following: 'https://api.unsplash.com/users/skylerewing/following',
      followers: 'https://api.unsplash.com/users/skylerewing/followers',
    },
    profile_image: {
      small:
        'https://images.unsplash.com/profile-1652281779153-a5d035d154b9image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
      medium:
        'https://images.unsplash.com/profile-1652281779153-a5d035d154b9image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
      large:
        'https://images.unsplash.com/profile-1652281779153-a5d035d154b9image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
    },
    instagram_username: 'Skyler',
    total_collections: 0,
    total_likes: 0,
    total_photos: 2153,
    accepted_tos: true,
    for_hire: false,
    social: {
      instagram_username: 'Skyler',
      portfolio_url: 'https://www.youtube.com/channel/UCwXleP-l6d8OoqPbkTQrgWQ',
      twitter_username: null,
      paypal_email: null,
    },
  },
  exif: {
    make: 'SONY',
    model: 'ILCE-1',
    name: 'SONY, ILCE-1',
    exposure_time: '1/160',
    aperture: '11.0',
    focal_length: '90.0',
    iso: 100,
  },
  location: {
    title: null,
    name: null,
    city: null,
    country: null,
    position: {
      latitude: null,
      longitude: null,
    },
  },
  views: 74684,
  downloads: 2700,
};

const server = setupServer(
  rest.get('api/get-photos', (req, res, ctx) => {
    return res(ctx.delay(100), ctx.json([photo]));
  })
);

beforeAll(() => server.listen());
beforeAll(() => server.close());
// beforeAll(() => {})

describe('images', () => {
  beforeEach(async () => {
    render(<Images />);
    await waitForElementToBeRemoved(() => screen.getByText('loading...'));
  });
});
