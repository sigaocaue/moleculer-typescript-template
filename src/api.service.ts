import { ServiceSchema as MoleculerServiceSchema } from 'moleculer'
import ApiService from 'moleculer-web'

const ServiceSchema = {
  name: 'api-gateway',
  version: 1,
  mixins: [ApiService],
  settings: {
    routes: [
      {
        autoAliases: true,
        path: '/api',
      },
    ],
  },
} as MoleculerServiceSchema

export { ServiceSchema }
module.exports = ServiceSchema
