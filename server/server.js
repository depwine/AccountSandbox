"use strict";

// const { postAllUsers } = require("./handlers/batchImportUsers")
const { getAllUsers } = require("./handlers/getAllUsers");
const { getOneUser } = require("./handlers/getOneUser");
const { putUpdatePassword } = require("./handlers/putUpdatePassword");
const { deleteUser } = require("./handlers/deleteUser")

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8889;


express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇

    .get("/test", (req, res) =>{

        res.status(200).json({
            status: 200,
            itWorked: true,
            message: "It Worked"
        })

    })

    .get("/api/getAllUsers", getAllUsers)
    .get("/api/getOneUser/:user", getOneUser)

    .put("/api/putUpdatePassword", putUpdatePassword)

    .delete("/api/deleteUser", deleteUser)


  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8889.
  .listen(port, () => console.log(`Listening on port ${port}`));