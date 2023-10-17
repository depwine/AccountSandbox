const { MongoClient, Db } = require ("mongodb");

require ("dotenv").config();
const {MONGO_URI} = process.env;

  // create a new client
  const client = new MongoClient(MONGO_URI);

  const getAllUsers = async (req, res) => {

    try {

        // conn
        await client.connect();

        //db
        const db = client.db("AccountSandbox");
        console.log("Connected to AccountSandbox");

        const results = await db.collection("Users").find().toArray();

        if (results){

            res
            .status(200)
            .json({
                status: 200,
                message: "All users successfully retrieved",
                data: results
            })
        }

    } catch (err) {

        console.log(`Failure: ${err}`)

        res
            .status(500)
            .json({
                status: 500,
                message: `User lookup failed: ${err}`
            })

    }

    // disc
    client.close();
    console.log("Disconnected from AccountSandbox")
  }

  module.exports = {getAllUsers}