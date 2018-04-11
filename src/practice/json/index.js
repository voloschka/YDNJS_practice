const data = require('./data');

const Table = require('cli-table');
let table = new Table({});

function dataRetriever () {
  data.activities.forEach((activity, index) => {
    table.push(
      {
        "Task No": ++index
      },
      {
        "Is Completed": activity.isCompleted
      },
      {
        "Name": activity.value
      },
      {
        "Created": activity.createdAt
      }
    )
  });
}

dataRetriever();

console.log(`Title: ${data.title}, User ID: ${data.userId}`);

console.log(table.toString());
