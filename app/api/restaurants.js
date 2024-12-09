import db from '../../utils/db';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    const [rows] = await db.query('SELECT * FROM restaurants');
    res.status(200).json(rows);
  }
  else if (method === 'POST') {
    const { name, address } = req.body;
    await db.query('INSERT INTO restaurants (name, address) VALUES (?, ?)', [name, address]);
    res.status(201).json({ message: 'Restaurant added!' });
  }
  else if (method === 'PUT') {
    const { id, name, address } = req.body;
    await db.query('UPDATE restaurants SET name=?, address=? WHERE id=?', [name, address, id]);
    res.status(200).json({ message: 'Restaurant updated!' });
  }
  else if (method === 'DELETE') {
    const { id } = req.query;
    await db.query('DELETE FROM restaurants WHERE id=?', [id]);
    res.status(200).json({ message: 'Restaurant deleted!' });
  }
}
