import { createConnection } from 'mysql2/promise';

// Function to create a MySQL connection
async function connectToDatabase() {
    return createConnection({
      host: process.env.DB_HOST ,
      port: process.env.DB_PORT, 
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

// Update user API route
export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // const { id, name, email } = req.body;
  // console.log(req.body);

  const id = 1
  const name = "Best Bite"
  const status = 1
  const image = 'restaurants/best-bite.jpg'


  if (!id || !name || !status || !image) {
    return res.status(400).json({ error: 'id, name, status and image are required in the request body.' });
  }


  try {
    // Connect to the database
    const connection = await connectToDatabase();

    // Execute a query to update the user in the "users" table
    const [result] = await connection.execute(
      'UPDATE restaurants SET name = ?, status = ?, image = ? WHERE id = ?',
      [name, status, image, id]
    );

    // Close the database connection
    await connection.end();

    // Check if the user was updated successfully
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'restaurant not found.' });
    }

    // Respond with a success message
    res.status(200).json({ message: 'restaurant updated successfully' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}