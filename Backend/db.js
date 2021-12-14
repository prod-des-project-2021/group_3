const { Client } = require('pg');

const client = new Client({

  user: 'dmigsibybmubsf',

  host: 'ec2-52-31-201-170.eu-west-1.compute.amazonaws.com',

  database: 'd8a13385mvp7g2',

  password: 'c687dd859843ef7616a5eedcc9b75b698d2867a0b10b41d8db924c4ebcc805da',

  port: 5432,

  ssl: { rejectUnauthorized: false }

});

client.connect();

module.exports = client;