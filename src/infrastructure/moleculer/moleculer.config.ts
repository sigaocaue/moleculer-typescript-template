import { ServiceBroker as MoleculerServiceBroker } from 'moleculer'
import BrokerOptions from 'src/infrastructure/moleculer/broker-options'

module.exports = ({
  ...BrokerOptions,
  hotReload: (process.env.NODE_ENV || 'local') === 'local',
} as unknown) as MoleculerServiceBroker
