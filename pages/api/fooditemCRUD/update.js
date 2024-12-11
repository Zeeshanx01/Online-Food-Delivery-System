import { createConnection } from 'mysql2/promise';

// Function to create a MySQL connection
async function connectToDatabase() {
  return createConnection({
    host: process.env.DB_HOST,
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

  const { id, name, description, price, image, res_id } = req.body;
  console.log(req.body);

  // const id = 1
  // const name = "Burger 1"
  // const description = "lorem"
  // const price = 1300
  // const image = 'restaurant/abc2.jpg'
  // const res_id = 1


  if (!id || !name || !description || !price || !image || !res_id) {
    return res.status(400).json({ error: 'id, name, status and image are required in the request body.' });
  }


  try {
    // Connect to the database
    const connection = await connectToDatabase();

    // Execute a query to update the user in the "users" table
    const [result] = await connection.execute(
      'UPDATE food_items SET name = ?, description = ?, price = ?, image = ?, res_id = ? WHERE id = ?',
      [name, description, price, image, res_id, id]
    );

    // Close the database connection
    await connection.end();

    // Check if the user was updated successfully
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Food Item not found.' });
    }

    // Respond with a success message
    res.status(200).json({ message: 'Food item updated successfully' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}