process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '~app';
import { HeroesRoutes } from '~routes';

const app = new App([new HeroesRoutes()]);

app.listen();
