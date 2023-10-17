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

const batchImportUsers = async () => {

    try{
        // connect
        await client.connect();

        //connect to db
        const db = client.db("AccountSandbox");
        console.log("connected")

        //create a new collection "users"
        await db.collection("Users").insertMany(users)

        // on success or no error, send
        console.log("Success, all users added to DB")


    } catch (err) {
        //on error
        console.log("Failure", err)


    }

    // close connection
    client.close();
    console.log("disonnected!");
}
    // import users into mongoDb
batchImportUsers()

module.exports = {batchImportUsers}
