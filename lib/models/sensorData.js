import mongoose from 'mongoose'

const SensorDataSchema = mongoose.Schema({
  source: String,
  value: Number,
  insertDate: {
    type: Date,
    default: Date.now
  },
  emitDate: {
    type: Date,
  }
})


const SensorData = mongoose.model('SensorData', SensorDataSchema)

export { SensorData }
