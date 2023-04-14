let express = require("express");
let cors = require("cors");
const morgan = require("morgan");
let app = express();

const AddWithInt = require("./examples/AddWithInt/runAdd");

app.use(morgan("combined"));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/addwithint", async (req, res) => {
    //parse the request body to get the values
    let x = req.body.x;
    let y = req.body.y;

    //call the wasm function
    let result = await AddWithInt(x, y);
    
    //send the result back to the client
    res.send(result);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
