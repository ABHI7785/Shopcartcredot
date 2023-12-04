const express = require("express")
const cors=require("cors")

const connection = require("./Config/Connection")
const router = require("./Router/Route")
connection()

const app=express()
app.use(express.static(path.join(__dirname, "front-end", "build")));
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "front-end", "build", "index.html"));
  });
app.use("/",router)





const port=4000
app.listen(port,console.log(`server is running on port ${port}`))