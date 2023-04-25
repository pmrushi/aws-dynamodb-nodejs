const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Client";

const params = {
    TableName: table,
    Item: {
        "id": "z539afd5-779b-447f-a482-54eed012e5c7",
        "userId": "hhbc1baf-ee61-4fc3-90b8-86f19e02cf33",
        "clientId": "l45bbeb9c15f44fa94629201597d7c93",
        "createdAt": "2022-04-24T20:01:08.164Z"
    }
};

console.log("Adding a new item...");

docClient.put(params, function (err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log(data);
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});