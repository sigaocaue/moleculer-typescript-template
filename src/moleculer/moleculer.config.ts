import { ServiceBroker as MoleculerServiceBroker } from 'moleculer'
import * as DotEnv from 'dotenv'

import BrokerOptions from 'src/moleculer/broker-options'

DotEnv.config()

module.exports = ({
  ...BrokerOptions,
  hotReload: (process.env.NODE_ENV || 'local') === 'local',
} as unknown) as MoleculerServiceBroker
