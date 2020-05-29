import { Module } from '@nestjs/common';
import { StaticController } from './static.controller';

@Module({
  imports: [],
  controllers: [StaticController]
})
export class StaticModule {}
