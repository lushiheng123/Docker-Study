import express from "express"

import dotenv from "dotenv"

const app = express()
app.use(express.json())
dotenv.config()

const port  = process.env.BACKEND_PORT || 3001

app.listen(port, () => {
    
    console.log(`server is running on port ${port}`)

})
app.get("/", (req, res) => {
    
    res.send("你好")
})