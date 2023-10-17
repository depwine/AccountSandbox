const { MongoClient, Db } = require ("mongodb");

require ("dotenv").config();
const {MONGO_URI} = process.env;

// create a new client
  const client = new MongoClient(MONGO_URI);

  const getOneUser = async (req,res) => {

    const body = req.params.user;

    const searchQuery = {
        email: body
    }

    try{

        //conn
        await client.connect();

        //db
        const db = client.db("AccountSandbox");
        console.log("connected to Account Sandbox");

        // get
        const results = await db.collection("Users").findOne(searchQuery)

        if (results) {
            res
                .status(200)
                .json({
                    status: 200,
                    data: results
                })
        }

    } catch (err) {
        res
            .status(500)
            .json({
                status: 200,
                message: `Failed to look up user ${searchQuery}, Reason: ${err}`
            })
    }

    //disc
    client.close();
    console.log("disconnected")
  }

  module.exports = {getOneUser}