import { Repository } from 'typeorm';
import { Asiento } from './asiento.entity';
export declare class AsientoService {
    private asientoRepository;
    constructor(asientoRepository: Repository<Asiento>);
    findAll(): Promise<Asiento[]>;
    create(asiento: Partial<Asiento>): Promise<Asiento>;
    remove(id: number): Promise<void>;
    update(id: number, asiento: Partial<Asiento>): Promise<Asiento | null>;
}
