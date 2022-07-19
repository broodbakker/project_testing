import { createApi } from 'unsplash-js';

// in the browser
// const browserApi = createApi({
//   apiUrl: 'https://mywebsite.com/unsplash-proxy',
//   //...other fetch options
// });

const api = createApi({
  accessKey: 'ryrmJXqH8jviCkHIYJOLOziCQoSV9_h7Xz3ysxu1FSA',
});

export default async function handler(req, res) {
  const photos = await api.photos
    .get({ photoId: 'mtNweauBsMQ' })
    .then((result) => {
      const photo = result.response;

      return photo;
    })
    .catch(() => {
      console.log('something went wrong!');
    });

  res.status(200).json({ photos });
}
