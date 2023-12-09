import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3004;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req,res) => {
    const user = req.body["username"];
    const pass = req.body["password"];

    console.log(user, pass);

    res.render("index.ejs", {users: user, passes: pass} );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
