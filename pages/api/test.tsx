export default function handler(req, res) {
  console.log('testtest');
  res.status(200).json({ name: 'John Doe' });
}
