const users = require ("../data/users.json");

const { MongoClient } = require ("mongodb");

require ("dotenv").config();
const {MONGO_URI} = process.env;

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

  // create a new client
  const client = new MongoClient(MONGO_URI);

const batchClearUsers = async () => {

    try{
        //conn
        await client.connect();

        // db
        const db = client.db("AccountSandbox");
        console.log("Connected");

        

        const emptyUsers = []
        const clearUserQuery = {}
        const clearUserNewValue = {}

        const clearUsers = await db.collection("Users").drop()

        if (clearUsers) {
            console.log(`All Users Dropped: ${clearUsers}`);
        }
        


    } catch (err) {

        console.log(`Failure: ${err}`)

    }

    // close connection
        client.close();
        console.log("disonnected")
}
    // import users into mongoDb
    batchClearUsers()

module.exports = {batchClearUsers}