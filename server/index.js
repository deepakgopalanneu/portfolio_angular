const express = require('express');
const aws = require('aws-sdk');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(cors());
app.get('/', (req, res) => res.send('up'));

app.post('/sendEmail',jsonParser, (req, res) =>{
    console.log("Request Received!");
    let senderEmail = req.body.senderEmail;
    let messagBody = req.body.messagBody;
    let ARN='arn:aws:sns:us-east-1:384467288578:TOPIC_EMAIL';
    aws.config.update({ region: "us-east-1" });
    let sns = new aws.SNS();
    let params = {
          TopicArn: ARN,
          Message: `${senderEmail},${messagBody}`
        };

    sns.publish(params, (err, data) => {
      if (err) {
        console.log("error in publishing message: "+ err.message);
      } 
      if(data) {
          res.setHeader("Access-Control-Allow-Origin", "*");  
          res.sendStatus(200);
          res.body("sent!")
          console.log("Request dispatched!");
        } 
      });
    });  

app.listen(3000, () => console.log('Example app listening on port 3000!'));