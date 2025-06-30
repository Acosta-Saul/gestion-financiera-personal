import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsientoModule } from './Asiento/asiento.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d1grp2jipnbc73b4d2mg-a.oregon-postgres.render.com',
      port: 5432,
      username: 'finanza_z1pf_user',
      password: 'Yi5vcUTP34RziAbwuUWEEHsCZIamh513',
      database: 'finanza_z1pf',
      synchronize: true,
      ssl:
        process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    }),
    AsientoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
