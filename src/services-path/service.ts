import { ServiceSchema as MoleculerServiceSchema } from 'moleculer'
import DbService from 'moleculer-db'
import path from 'path'

import adapter from 'src/moleculer/mongoose'
import { ServicesPath } from 'src/services-path/model'

const ServiceSchema = {
  name: path.basename(path.dirname(__filename)),
  version: 1,
  mixins: [DbService],
  adapter,
  model: ServicesPath,
} as MoleculerServiceSchema

export { ServiceSchema }
module.exports = ServiceSchema
