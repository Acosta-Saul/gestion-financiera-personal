export interface Asiento {
  fecha: string;
  monto: number;
  descripcion: string;
  categoria: string;
  id?: number; // Si usas id en el backend
}