const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken'); // to create JWT token
const bodyParser = require('body-parser');//to get the api response body
const crypto = require('crypto');//to generate secreat key
var cors = require('cors');
var path = require('path');
const app = express();
const port = 3001;
app.use(bodyParser.json());
// MySQL database connection configuration for db4free.net
// const connection = mysql.createPool({
//   host: 'db4free.net',
//   user: 'varsha',
//    password: 'varsha4test',
//   database: 'vs_test'   
// });

// MySQL database connection configuration for AWS 
const connection = mysql.createPool({
  host: 'turf-booking.c8bgzubqgkmc.eu-north-1.rds.amazonaws.com',
  user: 'admin',
   password: 'mypw4mysql',
  database: 'turf_booking'   
});

// Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });
// Secret key for signing the JWT. This should be kept secure and not hardcoded in the code.
// Generate a random 32-byte secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};
const secretKey = generateSecretKey();
console.log("secretKey--->",secretKey)


app.use(express.static(path.join(__dirname, 'build')));
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

// Create a new record
app.post('/api/users', (req, res) => {ß
  const { name, email } = req.body;

  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  connection.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Error creating a user:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  });
});

// Retrieve all turfs
app.get('/api/turf', (req, res) => {
  const query = 'SELECT * FROM turf where active=1';

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Error retrieving turf:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(rows);
  });
});
     




//***************************************************** */
// TURF BOOKING RELATED APIS -table available_slots
//***************************************************** */

// Endpoint to get available slots for a particular turf and date
app.get('/api/slots', (req, res) => {
  const { turfId, date } = req.query;

  // Query the database to get available slots based on turfId and date
  const sql = 'SELECT * FROM available_slots WHERE turfId = ? AND date = ? order by startTime';
  connection.query(sql, [turfId, date], (err, results) => {
    if (err) {
      console.error('Error fetching available slots:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(results);
  });
});

// Endpoint to book a slot (not fully implemented in this basic example)
app.post('/api/book', (req, res) => {
  // In a real application, you would handle booking logic and update the database
  res.json({ message: 'Slot booked successfully!' });
});

//***************************************************** */

//******************USER REGISTRATIONS*********************************** */

// API endpoint to handle user registration
app.post('/api/user/register', (req, res) => {
  const { name, description, mobile, email, dob, gender ,password} = req.body;
  const sql = 'INSERT INTO users (name, description, mobile, email, dob, gender,user,password) VALUES (?, ?, ?, ?, ?, ?,?,?)';
  connection.query(sql, [name, description, mobile, email, dob, gender,name,password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to register user.' });
    }
    res.json({ message: 'User registered successfully!' });
  });
});
// Retrieve all users
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Error retrieving users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(rows);
  });
});

app.post('/api/login', (req, res) => {
  console.log("-------req--->",req.body)
  const user = req.body.user;
  const password = req.body.password;

  // Query the database to find the user by user
  connection.query('SELECT id,user,password FROM users WHERE user = ? and password =?', [user,password], (error, results) => {
    if (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      if (results.length > 0) {
        // If the user is found, return the user ID and password 
        const { id,user, password } = results[0];
        // Generate a JWT with the user's ID as the payload
        const token = jwt.sign({ userId: id }, secretKey, { expiresIn: '1h' });
        console.log("token--->",token)
        // Respond with the token
       return res.json({ token });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  });
});

app.get('/api/adminUser', (req, res) => {
  const query = 'SELECT * FROM admin_login';

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Error retrieving users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(rows);
  });
});
app.post('/api/adminLogin', (req, res) => {
  console.log("-------req--->",req.body)
  const user = req.body.user;
  const password = req.body.password;

  // Query the database to find the user by user
  connection.query('SELECT id,user,password FROM users WHERE user = ? and password =?', [user,password], (error, results) => {
    if (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      if (results.length > 0) {
        // If the user is found, return the user ID and password 
        const { id,user, password } = results[0];
        // Generate a JWT with the user's ID as the payload
        const token = jwt.sign({ userId: id }, secretKey, { expiresIn: '1h' });
        console.log("token--->",token)
        // Respond with the token
       return res.json({ token });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  });
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});
// Start the server
app.listen(port,"0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

