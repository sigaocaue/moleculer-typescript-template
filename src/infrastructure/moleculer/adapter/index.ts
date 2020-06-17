import MongooseAdapter from 'moleculer-db-adapter-mongoose'
import * as Mongoose from 'mongoose'
import pickBy from 'lodash.pickby'
import pjson from 'pjson'
import * as DotEnv from 'dotenv'

DotEnv.config()

const uri = process.env.MONGODB_URL
  ? process.env.MONGODB_URL
  : `mongodb://${process.env.MONGODB_HOST || 'localhost'}:${
      process.env.MONGODB_PORT || 27017
    }/${process.env.MONGODB_DATABASE || pjson.name}`

const adapter = new MongooseAdapter(
  uri,
  pickBy(
    {
      user: process.env.MONGODB_USERNAME || null,
      pass: process.env.MONGODB_PASSWORD || null,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    null
  ) as Mongoose.ConnectionOptions
)

export { adapter }
module.exports = adapter
