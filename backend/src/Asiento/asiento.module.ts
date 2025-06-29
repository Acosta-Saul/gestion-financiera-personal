import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asiento } from './asiento.entity';
import { AsientoService } from './asiento.service';
import { AsientoController } from './asiento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Asiento])],
  providers: [AsientoService],
  controllers: [AsientoController],
})
export class AsientoModule {}