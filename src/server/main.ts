import "zone.js/dist/zone-node";
import "reflect-metadata";

import { NestFactory } from "@nestjs/core";
import * as dotenv from "dotenv";
import { enableProdMode } from "@angular/core";
import { ApplicationModule } from "./server.module";
import { NestExpressApplication } from "@nestjs/platform-express";

dotenv.config();

async function bootstrap() {
  if (process.env.NODE_ENV === 'production') {
    enableProdMode();
  }

  const server = await NestFactory.create<NestExpressApplication>(ApplicationModule);

  await server.listen(process.env.PORT || 3666);
}

bootstrap();
