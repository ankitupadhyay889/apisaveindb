const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");

//! Privacy
dotenv.config({ path: "./config.env" });

//! model data 
const restfapi = require("./data");

app.use(express.json());

//! Db connection 
require("./connection")


//! api router 

app.post("/" , async(req,res) => {
    try {
        const dataSend = new restfapi(req.body);
        const sendIt = await dataSend.save();
        res.status(200).send(sendIt);
    } catch (error) {
        res.status(404).send(error);
    }
})


app.get("/", async (req, res) => {
    try {
      const getDa = await restfapi.find({}).sort({"ranking":1});
      res.status(201).send(getDa);
    } catch (error) {
      res.status(404).send(error);
    }
});


app.get("/:id", async (req, res) => {
    try {
      const _id = req.params.id
      const getDaid = await restfapi.findById({_id});
      res.status(201).send(getDaid);
    } catch (error) {
      res.status(404).send(error);
    }
});


app.patch("/:id", async (req, res) => {
    try {
      const _id = req.params.id
      const getDaid = await restfapi.findByIdAndUpdate(_id,req.body,{
        new:true
      });
      res.status(201).send(getDaid);
    } catch (error) {
      res.status(500).send(error);
    }
});
  
  
app.delete("/:id", async (req, res) => {
    try {
      const getDaid = await restfapi.findByIdAndDelete(req.params.id);
      res.status(201).send(getDaid);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.listen(port , ()=> {
    console.log(`Server is run on ${port}`);
})