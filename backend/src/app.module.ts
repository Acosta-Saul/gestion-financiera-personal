import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AsientoModule } from './Asiento/asiento.module';

@Module({
  imports: [
  ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    AsientoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
