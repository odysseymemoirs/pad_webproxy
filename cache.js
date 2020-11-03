const mongoose = require("mongoose");
const redis = require("redis");
const keys = require("../config/keys");

const client = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});