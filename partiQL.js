const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-east-1"
});

const dynamoDB = new AWS.DynamoDB();

async function queryWithPartiQL() {
  const statement = `SELECT * FROM "Client" where clientId in ('e95bbeb9c15f44fa94629201597d7c93', 'l45bbeb9c15f44fa94629201597d7c93')`
  const results = await dynamoDB.executeStatement({Statement: statement}).promise();
  console.log(results);
}


queryWithPartiQL();
