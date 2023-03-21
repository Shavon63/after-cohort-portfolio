// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
// access node packages
const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
// ... other imports ...

const path = require("path")

// cors allows our frontend to communicate with the backend
app.use(cors())

// ... other middleware ...

// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))

// ... other routes/controllers ...

// any other route not matching the routes above gets routed by React
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});


// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})