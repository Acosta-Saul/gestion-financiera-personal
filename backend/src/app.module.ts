import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsientoModule } from './Asiento/asiento.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    autoLoadEntities: true,
    synchronize: false,
  }),
    AsientoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
