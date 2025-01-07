const cassandra = require('cassandra-drive');
const dotenv = require('dotenv');

dotenv.config();

const client = new cassandra.Client({
  cloud: { secureConnectBundle: process.env.ASTRA_SECURE_CONNECT_BUNDLE },
  credentials: {
    username: process.env.ASTRA_CLIENT_ID,
    password: process.env.ASTRA_CLIENT_SECRET,
  },
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to Astra DB");
  } catch (err) {
    console.error("Failed to connect to Astra DB:", err);
  }
}

module.exports = { client, connectToDB };
