import {
  LoggerConfig as MoleculerLoggerConfig,
  LogLevelConfig as MoleculerLogLevelConfig,
} from 'moleculer'
import * as Winston from 'winston'
import { ElasticsearchTransport } from 'winston-elasticsearch'
import { ClientOptions } from '@elastic/elasticsearch'

import Moment from 'moment'

const LoggerConfig = {
  type: 'Winston',
  options: {
    winston: {
      transports: [
        new Winston.transports.Console({
          format: Winston.format.combine(
            Winston.format.colorize(),
            Winston.format.prettyPrint(),
            Winston.format.timestamp(),
            Winston.format.align(),
            Winston.format.printf(
              (info) =>
                `${Moment(info.timestamp)
                  .utcOffset('America/Sao_Paulo')
                  .format('DD/MM/YYYY HH:mm:ss')} [${info.level}]: ${
                  info.message
                }. Metadata: ${JSON.stringify(info)}`
            )
          ),
        }),
        new ElasticsearchTransport({
          clientOpts: {
            node:
              'https://af1d20bddc644dc8beea367b43476840.eastus2.azure.elastic-cloud.com:9243',
            cloud: {
              id:
                'caue-prado:ZWFzdHVzMi5henVyZS5lbGFzdGljLWNsb3VkLmNvbTo5MjQzJGFmMWQyMGJkZGM2NDRkYzhiZWVhMzY3YjQzNDc2ODQwJGM3MGMxNTZlYzc5YTQ1ZDlhZDMwOTQ5NWM0NGJjMDdj',
              username: 'elastic',
              password: '2MOpkNrM0EhUT5y9LXjVHRrb',
            },
            maxRetries: 5,
          } as ClientOptions,
        }),
      ],
    },
  },
} as MoleculerLoggerConfig

const LogLevelConfig = {
  TRANSIT:
    process.env.LOG_LEVEL_TRANSIT ||
    process.env.LOG_LEVEL_SERVICES ||
    process.env.LOG_LEVEL ||
    'warn',
  TRANSPORTER:
    process.env.LOG_LEVEL_TRANSPORTER ||
    process.env.LOG_LEVEL_SERVICES ||
    process.env.LOG_LEVEL ||
    'warn',
  BROKER:
    process.env.LOG_LEVEL_BROKER ||
    process.env.LOG_LEVEL_SERVICES ||
    process.env.LOG_LEVEL ||
    'warn',
  $NODE:
    process.env.LOG_LEVEL_$NODE ||
    process.env.LOG_LEVEL_SERVICES ||
    process.env.LOG_LEVEL ||
    'warn',
  REGISTRY:
    process.env.LOG_LEVEL_REGISTRY ||
    process.env.LOG_LEVEL_SERVICES ||
    process.env.LOG_LEVEL_SERVICES ||
    process.env.LOG_LEVEL ||
    'warn',
  '**': process.env.LOG_LEVEL || 'info',
} as MoleculerLogLevelConfig

export { LoggerConfig, LogLevelConfig }
export default LoggerConfig
