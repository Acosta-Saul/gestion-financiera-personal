import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsientoModule } from './Asiento/asiento.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE, // <- aquí
    autoLoadEntities: true,
    synchronize: false,
    ssl:
      process.env.DB_SSL == 'true' ? {rejectUnauthorized:false} :false}),
    AsientoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
