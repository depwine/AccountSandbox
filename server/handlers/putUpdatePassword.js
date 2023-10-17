const { MongoClient, Db } = require ("mongodb");

require ("dotenv").config();
const {MONGO_URI} = process.env;



  // create a new client
  const client = new MongoClient(MONGO_URI);

  const putUpdatePassword = async (req,res) => {

    const body = req.body;
    const emailResult = body.email;
    const oldPasswordResult = body.password;
    const newPasswordResult = body.newPassword;    

    console.log(emailResult, oldPasswordResult, newPasswordResult)
  
    const query = {email : emailResult, password: oldPasswordResult}
    const update = {$set: {email: emailResult, password: newPasswordResult}}

    try {

        //conn
        await client.connect();

        //db
        const db = client.db("AccountSandbox");
        console.log("connected")

        //validate
        const result = await db.collection("Users").findOne(query)

            //if such a user exists, update password
        if (result) {
            const updatePasswordResult = await db.collection("Users").updateOne(query, update)

            if (updatePasswordResult) {

                console.log("User password successfully updated!")
                res
                    .status(200)
                    .json({
                        message: `Password of user ${emailResult} successfully updated`,
                        status: 200
                    })
            }
        } else {
            res
            .status(500)
            .json({
                status: 500,
                message: err
            })
        }

    } catch (err) {

        console.log(`Failure: ${err}`)

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

  module.exports = {putUpdatePassword}