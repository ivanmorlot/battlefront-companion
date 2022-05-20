import { Router } from 'express';
import { HealthCheckController } from '~controllers';
import { IRoutes } from '~interfaces/routes.interface';

const controller = new HealthCheckController();

export class HealthCheckRoutes implements IRoutes {
  public path = '/health-check';
  public router = Router();
  
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, controller.healthCheck);
  }
}
