import { Schema } from 'mongoose'

type Timestamps = {
  createdAt?: boolean
  updatedAt?: boolean
}
export const pluginTimestampsImmutable = (options: Timestamps) => (schema: Schema) => {
  // @ts-ignore
  if (schema.options.timestamps) {
    if (options.createdAt) {
      // @ts-ignore
      schema.path(schema.$timestamps.createdAt).immutable(true)
    }
    if (options.updatedAt) {
      // @ts-ignore
      schema.path(schema.$timestamps.updatedAt).immutable(true)
    }
  }
}
