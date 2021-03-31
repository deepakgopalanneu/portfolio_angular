const express = require('express');
const aws = require('aws-sdk');
const app = express();
const cors = require('cors');
// var bodyParser = require('body-parser');
app.use(cors());
app.use(express.urlencoded());

app.use(express.json());
app.get('/', (req, res) => res.send('up'));

app.post('/sendEmail', (req, res) =>{
    console.log("Request Received!");

    let ARN='arn:aws:sns:us-east-1:384467288578:TOPIC_EMAIL';
    aws.config.update({ region: "us-east-1" });
    let message = req.body;
    console.log(message);
    let sns = new aws.SNS();
    let params = {
          TopicArn: ARN,
          Message: message.senderEmail+","+message.messageBody
        };

    sns.publish(params, (err, data) => {
      if (err) {
        console.log("error in publishing message: "+ err.message);
      } 
      if(data) {
        console.log("Published to Topic!");
        } 
      });
      console.log("Request dispatched!");
      res.setHeader("Access-Control-Allow-Origin", "*");  
      res.json({"status":"sent"});
    });  

app.listen(3000, () => console.log('Example app listening on port 3000!'));