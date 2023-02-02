const express = require('express');
const app = express();
const PORT = process.env.PORT || 35000;
const amqp = require("amqplib")
var channel, connection;

connect();

async function connect() {
   try{
      const amqpServer = "amqp://localhost:5672";
      connection = await amqp.connect(amqpServer);
      channel = await connection.createChannel();
      await channel.assertQueue("rabbit", { durable: true });
   }catch(error){
     console.log(error)
   }
}




app.get("/send", async (req, res) =>{
    const fakeData = {
     name: "Nelson Ekpenyong",
     company: "SpaceX"
    };

    await channel.sendToQueue("rabbit", Buffer.from(JSON.stringify(fakeData)));
    console.log("Sent buffer:", Buffer.from(JSON.stringify(fakeData)).toString());

    await channel.close();
    await connection.close();
    return res.send("done");
})

app.listen( PORT, () => {
 console.log(`Server started at port: ${PORT}`)
})
