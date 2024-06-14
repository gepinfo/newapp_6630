
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const tickSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String }
})

const tickModel = mongoose.model('tick', tickSchema, 'tick');
export default tickModel;
