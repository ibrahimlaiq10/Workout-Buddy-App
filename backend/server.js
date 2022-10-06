const http = require('http');
require('dotenv').config();
const {connectMongoDB} = require('./config/db')

const app = require("./app")



const server = http.createServer(app);

async function  runServer(){
    await connectMongoDB();
    server.listen(process.env.PORT||4500,()=>{
        console.log(`server running on port ${process.env.Port}`);
    })
}

runServer();