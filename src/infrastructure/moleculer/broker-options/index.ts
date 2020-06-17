import { BrokerOptions as MoleculerBrokerOptions } from 'moleculer'
import uuid from 'uuid-random'
import pjson from 'pjson'
import * as DotEnv from 'dotenv'

import RabbitmqTransporter from 'src/infrastructure/moleculer/transporter/rabbitmq'
import {
  LoggerConfig,
  LogLevelConfig,
} from 'src/infrastructure/moleculer/logger'

DotEnv.config()

const BrokerOptions = {
  nodeID: `${pjson.name}-${uuid()}`,
  namespace: `${process.env.MOL_NAMESPACE || pjson.name}-${
    process.env.NODE_ENV || 'local'
  }`,
  transporter: RabbitmqTransporter,
  logger: LoggerConfig,
  logLevel: LogLevelConfig,
  validator: true,
  hotReload: (process.env.NODE_ENV === 'local' || 'local') === 'local',
} as MoleculerBrokerOptions

export { BrokerOptions }
export default BrokerOptions
