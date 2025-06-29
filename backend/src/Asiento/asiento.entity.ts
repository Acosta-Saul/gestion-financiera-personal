import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Asiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column('decimal')
  monto: number;

  @Column()
  descripcion: string;

  @Column()
  categoria: string;
}