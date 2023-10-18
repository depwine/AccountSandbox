const { MongoClient, Db } = require ("mongodb");

require ("dotenv").config();
const {MONGO_URI} = process.env;

// create a new client
  const client = new MongoClient(MONGO_URI);

  const postAddOneUser = async (req,res) => {

    const body = req.body;


    const postQuery = {
        email : body.email,
        password: body.password,
        given_name: body.given_name
    }

    const searchQuery = {
        email : body.email
    }

    console.log(postQuery)

    try {

        //conn
        await client.connect()

        //db
        const db = client.db("AccountSandbox");
        console.log("connected to account sandbox");

        // check for existing
        const searchExisting = await db.collection("Users").findOne(searchQuery)

        if (searchExisting) {

            console.log("already exists")

            res
                .status(401)
                .json({
                    status: 401,
                    message: "account with info already exists"
                })

        } else {

            // do stuff
        const results = await db.collection("Users").insertOne(postQuery)

        if (results) {

            console.log(`${postQuery.email} successfully added to DB`)

            res
                .status(200)
                .json({
                    status: 200,
                    message: `${postQuery.email} successfully added to DB`
                })

        } else {

            console.log(`${postQuery} NOT added to DB`)

            res
                .status(500)
                .json({
                    status: 500,
                    message: `${postQuery} NOT added to DB`
                })

        }


        }

        

    } catch (err) {

        console.log(err)

        res
            .status(500)
            .json({
                status: 500,
                message: err
            })

    }

    //disc
    client.close()
    console.log("disconnected")

  }

  module.exports = {postAddOneUser}