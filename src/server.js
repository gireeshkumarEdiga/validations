const app = require("./index");

const connect = require("./configs/db");

app.listen(2345, async()=>{
    await connect()
    connect.log("2345 is running");
})