import { useState } from "react";
import type { Asiento } from "../types/";

export function useAsientos() {
  const [asientos, setAsientos] = useState<Asiento[]>([]);

  const fetchAsientos = async () => {
    const res = await fetch('http://localhost:3000/asientos');
    const data = await res.json();
    setAsientos(data);
  };

  const createAsiento = async (entry: Asiento) => {
    await fetch('http://localhost:3000/asientos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
   await fetchAsientos();
  };

  const updateAsiento = async (id: number, entry: Asiento) => {
    await fetch(`http://localhost:3000/asientos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
    await fetchAsientos();
  };

  const deleteAsiento = async (id: number) => {
  await fetch(`http://localhost:3000/asientos/${id}`, {
    method: 'DELETE',
  });
  await fetchAsientos(); // Refresca la lista después de eliminar
  };

  return { asientos, fetchAsientos, updateAsiento, createAsiento, setAsientos, deleteAsiento };
}