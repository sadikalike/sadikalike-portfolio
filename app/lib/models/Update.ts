import mongoose, { Schema, Document } from 'mongoose';

export interface IUpdate extends Document {
  title: string;
  content: string;
  image?: string;
  createdAt: Date;
}

const UpdateSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Update || mongoose.model<IUpdate>('Update', UpdateSchema);