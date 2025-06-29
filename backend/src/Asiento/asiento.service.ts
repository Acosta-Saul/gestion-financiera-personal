import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asiento } from './asiento.entity';

@Injectable()
export class AsientoService {
  constructor(
    @InjectRepository(Asiento)
    private asientoRepository: Repository<Asiento>,
  ) {}

  findAll(): Promise<Asiento[]> {
    return this.asientoRepository.find();
  }

  create(asiento: Partial<Asiento>): Promise<Asiento> {
    return this.asientoRepository.save(asiento);
  }


   // Servicio para borrar un asiento por id
  async remove(id: number): Promise<void> {
    await this.asientoRepository.delete(id);
  }

  // Servicio para actualizar un asiento por id
  async update(id: number, asiento: Partial<Asiento>): Promise<Asiento | null> {
    await this.asientoRepository.update(id, asiento);
    return this.asientoRepository.findOneBy({ id });
  }
}