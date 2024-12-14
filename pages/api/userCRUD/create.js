// pages/api/create.js
// 'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { createConnection } from 'mysql2/promise';
// import bcrypt from 'bcrypt';

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

export default async function handler(req, res) {
  // const { data: session } = useSession()

  if (req.method !== 'POST') {
    console.log(req);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }


  
  // const { name, email, password, address } = req.nody;
  // console.log(req.body);

  // const id = '1'
  const name = "ZZEESSHHAANN"
  const email = "ZEESHAN@"
  const password = '1231'
  const address = 'abcstreet2'
  console.log(name);
  if (!name || !email || !password || !address) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    // const hashedPassword = await bcrypt.hash(password, 10); // Uncomment to hash password

    // Connect to the database
    const connection = await connectToDatabase();

    // Execute a query to insert data into the "users" table
    const [result] = await connection.execute(
      'INSERT INTO users (name, email, password, address) VALUES (?, ?, ?, ?)',
      [name, email, password, address]
    );

    // Close the database connection
    await connection.end();

    // Respond with the created user data
    res.status(201).json({ id: result.insertId, message: 'User created successfully' });
  } catch (error) {
    console.error('Error:', error.message); // Logs the error message
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }

}