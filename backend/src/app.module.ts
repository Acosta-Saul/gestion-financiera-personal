import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsientoModule } from './Asiento/asiento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin', 
      database: 'finanza', 
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo, no usar en producción
    }),
    AsientoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
