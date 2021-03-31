const express = require('express');
const aws = require('aws-sdk');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.text())
app.get('/', (req, res) => res.send('up'));

app.post('/sendEmail',jsonParser, (req, res) =>{
    console.log("Request Received!");

    let ARN='arn:aws:sns:us-east-1:384467288578:TOPIC_EMAIL';
    aws.config.update({ region: "us-east-1" });
    let message = req.body;
    let sns = new aws.SNS();
    let params = {
          TopicArn: ARN,
          Message: message
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
      res.send("sent!")
    });  

app.listen(3000, () => console.log('Example app listening on port 3000!'));