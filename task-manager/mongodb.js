// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id.id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database...");
    }
    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Johnny",
    //     age: 31
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user...");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 22
    //     },
    //     {
    //       name: "Bob",
    //       age: 28
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents...");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "mow lawn",
          completed: true
        },
        {
          description: "do dishes",
          completed: false
        },
        {
          description: "clean house",
          completed: false
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert documents...");
        }

        console.log(result.ops);
      }
    );
  }
);
