const express = require('express');
const aws = require('aws-sdk');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(cors());
app.get('/', (req, res) => res.send('up'));

app.post('/sendEmail',jsonParser, (req, res) =>{

    let senderEmail = req.body.senderEmail;
    let messagBody = req.body.messagBody;
    let ARN;
    aws.config.update({ region: "us-east-1" });
    let sns = new aws.SNS();
    sns.listTopics((err, data) => {
        if (err) 
        console.log("err in sns listTopics : "+ err.message);
        else 
        ARN = data.Topics[0].TopicArn;

        let params = {
          TopicArn: ARN,
          Message: `${senderEmail},${messagBody}`
        };

        sns.publish(params, (err, data) => {
          if (err) {
            console.log("error in publishing message: "+ err.message);
          } else {
            console.log("Request recieved!");
          }
        });
      });
    });  

app.listen(3000, () => console.log('Example app listening on port 3000!'));