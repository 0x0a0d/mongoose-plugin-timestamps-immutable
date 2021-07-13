# @cylution/mongoose-plugin-timestamps-immutable

Simple mongoose plugin that prevents update `createdAt` (or even `updatedAt`)

## Getting started


### Install

`npm i @cylution/mongoose-plugin-timestamps-immutable`

or

`yarn add @cylution/mongoose-plugin-timestamps-immutable`

### Usage

> You need set schema options `timestamps: true` to tell plugin modify schema
```js
const demoSchema = new Schema({
  name: String
}, {
  timestamps: true // <~~ set it
})
```

#### Typescript
```ts
import { pluginTimestampsImmutable } from '@cylution/mongoose-plugin-timestamps-immutable'
import { plugin, Schema } from 'mongoose'
```

#### Javascript
```js
const { pluginTimestampsImmutable } = require('@cylution/mongoose-plugin-timestamps-immutable')
const { plugin } = require('mongoose')
```

```js
// global
plugin(pluginTimestampsImmutable({
  createdAt: true, // prevent change
  updatedAt: false, // allow to change updatedAt
}))

// or schema
const userSchema = new Schema({
  //
}, {
  timestamps: true,
})

userSchema.plugin(pluginTimestampsImmutable({
  createdAt: true, // prevent change
  updatedAt: false, // allow to change updatedAt
}))
```
### License

This project is licensed under the [MIT License](LICENSE.md).
