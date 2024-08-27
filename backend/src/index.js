const express=require("express")
const app = express()
const http=require("http")
const server=http.createServer(app)
const io=require("socket.io")(server)
const cors=require("cors")
app.use(cors())
app.use(express.json())





module.exports=server