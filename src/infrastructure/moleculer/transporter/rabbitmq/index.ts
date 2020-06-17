import { GenericObject } from 'moleculer'
import options from 'src/infrastructure/moleculer/transporter/rabbitmq/options'

const RabbitmqTransporter = {
  type: 'AMQP',
  options: {
    url:
      options.url ||
      `amqp://${options.username}:${options.password}@${options.hostname}:${options.port}`,
    prefetch: 1,
  },
} as GenericObject

export default RabbitmqTransporter
