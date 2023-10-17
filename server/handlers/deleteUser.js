const { MongoClient, Db } = require ("mongodb");

require ("dotenv").config();
const {MONGO_URI} = process.env;

  // create a new client
  const client = new MongoClient(MONGO_URI);

  const deleteUser = async (req,res) => {

    const body = req.body;

    query = {email: body.email, password: body.password}

    try {

        await client.connect()

        //db
        const db = client.db("AccountSandbox");
        console.log("connected")

        //validate search
        const validationSearch = await db.collection("Users").findOne(query)

        console.log(validationSearch)

        if (validationSearch) {
            //delete
            const result = await db.collection("Users").deleteOne(query)

            if (result.deletedCount === 1) {
                    res
                        .status(200)
                        .json({
                            message: `successfully deleted user ${body.email}`,
                            data: result,
                            status: 200
                        })

            } else {
                res
                    .status(400)
                    .json({
                        status:400,
                        message: `failed to delete user ${body.email}`
                    })
            }
        }


    } catch (err) {

        console.log(`Failure: ${err}`)
        res
            .status(500)
            .json({
                status: 500,
                message: "a grand failure."
            })

    }

    //disc
    client.close()
    console.log("disconnected")

    
  }

  module.exports = { deleteUser}