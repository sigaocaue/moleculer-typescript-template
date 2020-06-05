import { BrokerOptions as MoleculerBrokerOptions } from 'moleculer'
import uuid from 'uuid-random'

import RabbitmqTransporter from 'src/moleculer/transporter/rabbitmq'
import { LoggerConfig, LogLevelConfig } from 'src/moleculer/logger'

const BrokerOptions = {
  nodeID: `${uuid()}`,
  namespace: `snowpiercer-${process.env.NODE_ENV || 'local'}`,
  transporter: RabbitmqTransporter,
  logger: LoggerConfig,
  logLevel: LogLevelConfig,
  validator: true,
} as MoleculerBrokerOptions

export { BrokerOptions }
export default BrokerOptions
