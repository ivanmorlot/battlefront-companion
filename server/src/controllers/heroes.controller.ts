import { Request, Response } from 'express';
import { CreateHeroData, PatchHeroData } from '~interfaces/heroes.interface';
import { HeroesService } from '~services';

const heroesService = new HeroesService();

export class HeroesController {
  getHero = async (req: Request, res: Response) => {
    const heroId = req.params.id;

    const hero = await heroesService.getHero(heroId);

    res.status(200).json(hero);
  };

  getHeroes = async (req: Request, res: Response) => {
    const heroes = await heroesService.getHeroes();

    res.status(200).json(heroes);
  };

  createHero = async (req: Request, res: Response) => {
    const data: CreateHeroData = req.body;

    const newHero = await heroesService.createHero(data);

    res.status(201).json(newHero);
  };

  updateHero = async (req: Request, res: Response) => {
    const heroId: string = req.params.id;
    const data: PatchHeroData = req.body;

    const updatedHero = await heroesService.updateHero(heroId, data);

    res.status(200).json(updatedHero);
  };

  deleteHero = async (req: Request, res: Response) => {
    try {
      const heroId: string = req.params.id;
      await heroesService.deleteHero(heroId);
      res.status(204);
    }
    catch (error) {
      res.status(500).json(error);
    }
  };
}
