import { NextApiHandler } from 'next';

const handler: NextApiHandler = (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'ok', data: 'Pong!' }));
};

export default handler;
