import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [ClientsModule.register([{ name: 'MATH_SERVICE', transport: Transport.TCP }]),],
  controllers: [ApiController]
})
export class ApiModule {}
