import { AsientoService } from './asiento.service';
import { Asiento } from './asiento.entity';
export declare class AsientoController {
    private readonly asientoService;
    constructor(asientoService: AsientoService);
    findAll(): Promise<Asiento[]>;
    create(asiento: Partial<Asiento>): Promise<Asiento>;
    remove(id: string): Promise<void>;
    update(id: string, asiento: Partial<Asiento>): Promise<Asiento | null>;
}
