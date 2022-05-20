import { Document } from 'mongoose';

export type HeroDocument = IHero & Document;

export interface IHero {
  _id: string;
  name: string;
  type: string;
  hp: number;
  regen: number;
}

export interface CreateHeroData {
  name: string;
  type: string;
  hp: number;
  regen: number;
}

export interface PatchHeroData {
  name?: string;
  type?: string;
  hp?: number;
  regen?: number;
}
