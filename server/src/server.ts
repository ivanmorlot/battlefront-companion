process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '~app';
import { HealthCheckRoutes, HeroesRoutes } from '~routes';

const app = new App([new HeroesRoutes(), new HealthCheckRoutes()]);

app.listen();
