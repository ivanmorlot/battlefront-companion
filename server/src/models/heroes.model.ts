import { Schema, model } from 'mongoose';
import { HeroDocument } from '~interfaces/heroes.interface';

const heroSchema = new Schema({
  name: String,
  type: String,
  hp: Number,
  regen: Number,
});

export const Hero = model<HeroDocument>('Hero', heroSchema);
