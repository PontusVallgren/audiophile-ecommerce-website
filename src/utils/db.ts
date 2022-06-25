import mongoose from "mongoose";
import { product } from "../types";
 
const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI!)
  console.log('connected DB')
}

const disconnect = async () => {
  await mongoose.disconnect()
  console.log('disconnect DB')
}

const convertDocToObj = (doc: product) => {
  doc._id = doc._id.toString();
  return doc;
}

const db = {connect, disconnect, convertDocToObj}

export default db;