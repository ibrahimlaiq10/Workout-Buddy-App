const http = require('http');
const dotenv = require('dotenv').config()

const app = require("./app")



const server = http.createServer(app);

function runServer(){
    server.listen(process.env.PORT||4500,()=>{
        console.log(`server running on port ${process.env.Port}`);
    })
}

runServer();