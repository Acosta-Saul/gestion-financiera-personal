import {  Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { AsientoService } from './asiento.service';
import { Asiento } from './asiento.entity';

@Controller('asientos')
export class AsientoController {
  constructor(private readonly asientoService: AsientoService) {}

  @Get()
  findAll(): Promise<Asiento[]> {
    return this.asientoService.findAll();
  }

  @Post()
  create(@Body() asiento: Partial<Asiento>): Promise<Asiento> {
    return this.asientoService.create(asiento);
  }

  // Endpoint para borrar un asiento por id
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.asientoService.remove(Number(id));
  }

  // Endpoint para actualizar un asiento por id
  @Put(':id')
  update(@Param('id') id: string, @Body() asiento: Partial<Asiento>): Promise<Asiento | null> {
    return this.asientoService.update(Number(id), asiento);
  }
}