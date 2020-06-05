import {
  Schema as MongooseSchema,
  SchemaDefinition as MongooseSchemaDefinition,
} from 'mongoose'

const SchemaDefinition = {
  name: {
    type: MongooseSchema.Types.String,
    required: true,
  },
  frontPath: {
    type: MongooseSchema.Types.String,
    required: false,
  },

  backPath: {
    type: MongooseSchema.Types.String,
    required: false,
  },

  method: {
    type: MongooseSchema.Types.String,
    required: false,
  },
} as MongooseSchemaDefinition

const Schema = new MongooseSchema(SchemaDefinition, {
  strict: false,
  timestamps: true,
})

Schema.index({ name: 1 }, { unique: true })

export { Schema, SchemaDefinition }

export default Schema
