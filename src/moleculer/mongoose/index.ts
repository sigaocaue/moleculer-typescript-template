import MongooseAdapter from 'moleculer-db-adapter-mongoose'
import * as Mongoose from 'mongoose'
import pickBy from 'lodash.pickby'

const mongooseConfiguration = {
  uris: process.env.MONGODB_URL
    ? process.env.MONGODB_URL
    : `mongodb://${process.env.MONGODB_HOST || 'mongodb'}:${
        process.env.MONGODB_PORT || 27017
      }/${process.env.MONGODB_DATABASE || 'octopus'}`,
  options: pickBy(
    {
      user: process.env.MONGODB_USERNAME || null,
      pass: process.env.MONGODB_PASSWORD || null,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    null
  ) as Mongoose.ConnectionOptions,
}

const adapter = new MongooseAdapter(
  mongooseConfiguration.uris,
  mongooseConfiguration.options
)

export { mongooseConfiguration, adapter }
export default adapter
module.exports = adapter
