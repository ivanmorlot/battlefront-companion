import { Router } from 'express';
import { HeroesController } from '~controllers';
import { HeroesDto } from '~dto/heroes.dto';
import { IRoutes } from '~interfaces/routes.interface';

const controller = new HeroesController();
const dto = new HeroesDto();

export class HeroesRoutes implements IRoutes {
  public path = '/heroes';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, controller.getHeroes);
    this.router.post(`${this.path}/`, dto.createHero, controller.createHero);
    this.router.get(`${this.path}/:id`, controller.getHero);
    this.router.put(`${this.path}/:id`, dto.updateHero, controller.updateHero);
    this.router.delete(`${this.path}/:id`, controller.deleteHero);
  }
}
