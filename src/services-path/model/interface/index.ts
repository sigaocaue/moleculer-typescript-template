import { Document } from 'mongoose'

interface ServicesPath extends Document {
  name: string
  frontPath?: string
  backPath?: string
  method?: string
  [key: string]: any
}

export { ServicesPath }
export default ServicesPath
