import { NextFunction, Request, Response } from 'express';
import { HttpException } from '~exceptions/httpException';
import { CreateHeroData, PatchHeroData } from '~interfaces/heroes.interface';

export class HeroesDto {
  createHero = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.name === null || req.body.name === undefined) throw new HttpException(400, 'Name field required');
      if (typeof req.body.name !== 'string') throw new HttpException(400, 'Name has to be a string');
      if (req.body.name.trim().length === 0) throw new HttpException(400, "Name can't be empty");

      if (req.body.name === null || req.body.name === undefined) throw new HttpException(400, 'Type field required');
      if (typeof req.body.type !== 'string') throw new HttpException(400, 'Type has to be a string');
      if (req.body.type.trim().length === 0) throw new HttpException(400, "Type can't be empty");

      if (req.body.name === null || req.body.name === undefined) throw new HttpException(400, 'HP field required');
      if (typeof req.body.hp !== 'number') throw new HttpException(400, 'HP has to be a number');
      if (req.body.hp < 0) throw new HttpException(400, 'HP has to be 0 or greater');

      if (req.body.name === null || req.body.name === undefined) throw new HttpException(400, 'Regen field required');
      if (typeof req.body.regen !== 'number') throw new HttpException(400, 'Regen has to be a number');
      if (req.body.regen < 0) throw new HttpException(400, 'Regen has to be 0 or greater');

      const data: CreateHeroData = {
        name: req.body.name.trim(),
        type: req.body.type.trim(),
        hp: req.body.hp,
        regen: req.body.regen,
      };

      req.body = data;

      next();
    } catch (error) {
      next(error);
    }
  };

  updateHero = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.name) {
        if (typeof req.body.name !== 'string') throw new HttpException(400, 'Name has to be a string');
        if (req.body.name.trim().length === 0) throw new HttpException(400, "Name can't be empty");
      }

      if (req.body.type) {
        if (typeof req.body.type !== 'string') throw new HttpException(400, 'Type has to be a string');
        if (req.body.type.trim().length === 0) throw new HttpException(400, "Type can't be empty");
      }

      if (req.body.hp) {
        if (typeof req.body.hp !== 'number') throw new HttpException(400, 'HP has to be a number');
        if (req.body.hp < 0) throw new HttpException(400, 'HP has to be 0 or greater');
      }

      if (req.body.regen) {
        if (typeof req.body.regen !== 'number') throw new HttpException(400, 'Regen has to be a number');
        if (req.body.regen < 0) throw new HttpException(400, 'Regen has to be 0 or greater');
      }

      const data: PatchHeroData = {};
      if (req.body.name) data.name = req.body.name;
      if (req.body.type) data.type = req.body.type;
      if (req.body.hp) data.hp = req.body.hp;
      if (req.body.regen) data.regen = req.body.regen;

      req.body = data;

      next();
    } catch (error) {
      next(error);
    }
  };
}
