const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-east-1"
});

const docClient = new AWS.DynamoDB.DocumentClient();

// ':val1': 'aabc1baf-ee61-4fc3-90b8-86f19e02cf33',
// ':val2': 'ddbc1baf-ee61-4fc3-90b8-86f19e02cf33',
// ':val3': 'e95bbeb9c15f44fa94629201597d7c93',
// ':val4': 'c45bbeb9c15f44fa94629201597d7c93'

/*
var params = {
  TableName : 'Client',
  IndexName : 'clientId-index',
  KeyConditionExpression : 'clientId = :clientId', 
  ExpressionAttributeValues : {
      ':clientId' : 'c45bbeb9c15f44fa94629201597d7c93'        
  }
}; */

/*
var params = {
  RequestItems: {
    'Client': {
      Keys: [
        {
          'userId': 'aabc1baf-ee61-4fc3-90b8-86f19e02cf33'
        },
        {
          'userId': 'ddbc1baf-ee61-4fc3-90b8-86f19e02cf33'
        }
      ],
      ProjectionExpression: 'userId, clientId, id'
    }
  }
};
*/


var params = {
  TableName: 'Client',
  IndexName : 'clientId-index',
  FilterExpression: 'clientId IN (:clientId1, :clientId2)',
  ExpressionAttributeValues : {
    ':clientId1' : 'c45bbeb9c15f44fa94629201597d7c93',
    ':clientId2' : 'e95bbeb9c15f44fa94629201597d7c93'    
  }
};

/*
const params = {
  TableName: 'Client',
  KeyConditionExpression: '#attr = :val',
  ExpressionAttributeNames: {
      '#attr': 'clientId',
  },
  ExpressionAttributeValues: {
      ':val': { S: 'c45bbeb9c15f44fa94629201597d7c93' },
  },
}; */

docClient.scan(params, function (err, data) {
  if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
      // console.log(data);
      console.log("Added item:", JSON.stringify(data, null, 2));
  }
});