const express = require('express')
const app = express()
const PORT = process.env.PORT || 2000
const amqp = require("amqplib");
var channel, connection;

connect();

async function connect() {
  try{
      const amqpServer = "amqp://localhost:5672";
      connection = await amqp.connect(amqpServer);
      channel = await connection.createChannel();
      await channel.assertQueue("rabbit", { durable: true });
      await channel.consume("rabbit", async function(msg) {
       console.log("Received buffer:", msg.content.toString(),msg.content);
       channel.ack(msg)
       // Additional processing code...
     });
   }catch(error){
     console.log(error)
   }
}




app.get("/send", (req, res )=>{

})

app.listen(PORT, () =>{
 console.log(`Server running on port ${PORT}`);
})