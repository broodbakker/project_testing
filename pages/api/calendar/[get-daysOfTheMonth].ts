// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  await sleep1Second();

  console.log(res.query);

  if (req.query.country === 'jan') {
    console.log('jan');
    return res.status(200).json({ message: '31 days' });
  }

  if (req.query.country === 'feb') {
    return res.status(200).json({ message: '31 days' });
  }

  if (req.query.country === 'march') {
    return res.status(200).json({ message: '31 days' });
  }
}

function sleep1Second() {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
}
