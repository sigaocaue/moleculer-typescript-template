import { model } from 'mongoose'
import Schema from './schema'
import ServicesPathInterface from './interface'

const ServicesPath = model<ServicesPathInterface>(
  'ServicesPath',
  Schema,
  'services-path'
)
export { ServicesPath, ServicesPathInterface, Schema }
export default ServicesPath
