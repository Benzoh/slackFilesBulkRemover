/**
 * @see https://api.slack.com/methods/files.list
 */ 

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const { WebClient } = require('@slack/web-api');
const token  = process.env.SLACK_TOKEN;
const client = new WebClient(token);
const timestamp_to = Math.round(new Date(process.env.TIMESTAMP_TO).getTime()/1000)

const getFiles = async () => {
  const params = {
    ts_to: timestamp_to,
    // count: 1
  }
  const response = await client.files.list(params);
  
  return response
}

const deleteFiles = async (file) => {
  const params = {
    file: file.id,
  }
  const response = await client.files.delete(params);
  console.log('deleted files...', {response});
}

const main = async () => {
  const response = await getFiles()
  console.log('file list...', {response});

  response.files.forEach(file => {
    deleteFiles(file)
  });
};

main();