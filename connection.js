const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connection sucessfully created`);
  })
  .catch((err) => console.log(`Oops connection not created`));



//! offline db MongoDb Compass 
// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost/restapi", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connection Done");
//   })
//   .catch((error) => {
//     console.log(error, "Not Connected");
//   });
